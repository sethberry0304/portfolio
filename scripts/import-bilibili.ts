// scripts/import-bilibili.ts
// 用法：
//   只拉 2023-01-01 之后： npm run import:bili
//   拉全部年份：SINCE=0 npm run import:bili
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const UID = '398797485'; // 你的 B 站 UID
const DEFAULT_SINCE = '2023-01-01T00:00:00Z';
const SINCE_TS =
  process.env.SINCE === '0'
    ? 0
    : (process.env.SINCE ? Date.parse(process.env.SINCE) : Date.parse(DEFAULT_SINCE)) / 1000;

const PAGE_SIZE = 30;
const MAX_ITEMS = 120;

// Normalized output types to match src/data/works.ts long-term contract
type MediaItem = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type WorkExtra = {
  publishedAt?: string;
  gallery?: MediaItem[];
  credits?: string[];
  duration?: string;
  links?: { label: string; href: string }[];
  press?: { title: string; url: string }[];
};

type Work = {
  id: string;
  title: string;
  titleEn?: string;
  tag: 'video' | 'research' | 'photo' | 'product';
  blurb?: string;
  cover: string;
  href: string;
  year?: string | number;
  role?: string;
  client?: string;
  tools?: string[];
  tags?: string[];
  extra?: WorkExtra;
};

function sanitize(s: string, limit = 140) {
  return (s || '').replace(/\s+/g, ' ').trim().slice(0, limit);
}

/** ---------- 工具 ---------- **/
async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
function writeDebug(name: string, data: any) {
  try {
    const p = path.resolve(process.cwd(), `data/debug_${name}.json`);
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`📝 debug -> ${p}`);
  } catch {}
}

/** ---------- WBI 签名 ---------- **/
const mixinKeyEncTab = [
  46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52
];
function getMixinKey(orig: string) {
  return mixinKeyEncTab.map((n) => orig[n]).join('').slice(0, 32);
}
async function getWbiKey(): Promise<string> {
  const r = await fetch('https://api.bilibili.com/x/web-interface/nav', {
    headers: { 'user-agent': 'Mozilla/5.0' },
  });
  const j = await r.json();
  const img = j.data?.wbi_img?.img_url ?? '';
  const sub = j.data?.wbi_img?.sub_url ?? '';
  const orig = path.basename(img).split('.')[0] + path.basename(sub).split('.')[0];
  return getMixinKey(orig);
}
function encWbi(params: Record<string, any>, key: string) {
  const wts = Math.floor(Date.now() / 1000);
  const filtered: Record<string, any> = {};
  Object.keys(params).sort().forEach((k) => {
    filtered[k] = String(params[k]).replace(/[!'\(\)*]/g, '');
  });
  filtered.wts = wts;
  const query = new URLSearchParams(filtered).toString();
  const w_rid = crypto.createHash('md5').update(query + key).digest('hex');
  return { ...filtered, w_rid };
}

/** ---------- 抓取方式 A：WBI API（兼容 vlist/archives） ---------- **/
async function fetchFromWBI(uid: string): Promise<Work[]> {
  console.log(`🔎 WBI: fetch videos uid=${uid}`);
  const key = await getWbiKey();
  const raw: any[] = [];
  for (let pn = 1; pn <= 10 && raw.length < MAX_ITEMS; pn++) {
    const qs = encWbi({ mid: uid, ps: PAGE_SIZE, pn, order: 'pubdate', platform: 'web', tid: 0, keyword: '' }, key);
    const url = `https://api.bilibili.com/x/space/wbi/arc/search?${new URLSearchParams(qs).toString()}`;
    const r = await fetch(url, {
      headers: { referer: `https://space.bilibili.com/${uid}`, 'user-agent': 'Mozilla/5.0' },
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j = await r.json();
    const list = j?.data?.list;
    const page: any[] = (list?.vlist ?? list?.archives ?? j?.data?.archives ?? []) as any[];
    if (!page.length) {
      if (pn === 1) console.log('ℹ️ WBI 第一页为空（结构变化/无满足时间条件的数据）');
      break;
    }
    for (const v of page) {
      const created = (v.created ?? v.pubdate ?? 0) as number;
      if (created < SINCE_TS) { pn = 99; break; }
      raw.push(v);
      if (raw.length >= MAX_ITEMS) break;
    }
    await sleep(220);
  }
  console.log(`✅ WBI: got ${raw.length} items(before map)`);
  return raw.map((v) => {
    const bvid = v.bvid ?? v.bv_id ?? '';
    const title = v.title ?? '';
    const desc = v.description ?? v.desc ?? v.dynamic ?? title;
    const cover = v.pic ?? v.cover ?? '';
    const created = (v.created ?? v.pubdate ?? 0) as number;
    const publishedAt = new Date(created * 1000).toISOString();
    return {
      id: bvid,
      title: sanitize(title),
      tag: 'video',
      blurb: sanitize(desc, 120),
      cover: cover?.startsWith('http') ? cover : `https:${cover}`,
      href: `https://www.bilibili.com/video/${bvid}`,
      year: new Date(publishedAt).getUTCFullYear(),
      extra: { publishedAt },
    };
  });
}

/** ---------- 抓取方式 B：RSSHub（兜底，可能 429/502） ---------- **/
async function fetchFromRSS(uid: string): Promise<Work[]> {
  console.log(`🔁 RSS fallback: uid=${uid}`);
  const url = `https://rsshub.app/bilibili/user/video/${uid}`;
  const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error(`RSS HTTP ${r.status}`);
  const xml = await r.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  const list: Work[] = [];
  for (const item of items) {
    const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? '';
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? '';
    const dateStr = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? '';
    const desc = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ?? '';
    const bvid = link.match(/\/video\/([A-Za-z0-9]+)/)?.[1];
    if (!bvid) continue;
    const ts = dateStr ? Date.parse(dateStr) / 1000 : Math.floor(Date.now() / 1000);
    if (ts < SINCE_TS) continue;
    const publishedAt = new Date(ts * 1000).toISOString();
    list.push({
      id: bvid,
      title: sanitize(title),
      tag: 'video',
      blurb: sanitize(desc, 120),
      cover: `https://i0.hdslb.com/bfs/archive/${bvid}.jpg`,
      href: `https://www.bilibili.com/video/${bvid}`,
      year: new Date(publishedAt).getUTCFullYear(),
      extra: { publishedAt },
    });
  }
  console.log(`✅ RSS: got ${list.length} items`);
  return list;
}

/** ---------- 抓取方式 C：抓 HTML，解析 __INITIAL_STATE__ ---------- **/
async function fetchFromHTML(uid: string): Promise<Work[]> {
  console.log(`🕸️ HTML scrape: uid=${uid}`);
  const url = `https://space.bilibili.com/${uid}/video`;
  const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0', referer: `https://space.bilibili.com/${uid}` } });
  if (!r.ok) throw new Error(`HTML HTTP ${r.status}`);
  const html = await r.text();

  // 抓 __INITIAL_STATE__
  const m = html.match(/__INITIAL_STATE__=({[\s\S]*?});/);
  if (!m) throw new Error('INITIAL_STATE not found');
  let state: any = {};
  try { state = JSON.parse(m[1]); } catch {
    // 有时是 JS 对象不是严格 JSON，简单修剪下再 eval
    try { state = eval('(' + m[1] + ')'); } catch (e) { throw new Error('parse INITIAL_STATE failed'); }
  }
  writeDebug('initial_state', state);

  // 可能位置：state.space?.list?.vlist / state.videoData?.list?.archives / state?.archives
  const candidates: any[] = [
    state?.space?.list?.vlist,
    state?.videoData?.list?.archives,
    state?.archives,
    state?.list?.vlist,
  ].find(Array.isArray) || [];

  console.log(`✅ HTML: got ${candidates.length} items(before filter)`);
  const out: Work[] = [];
  for (const v of candidates) {
    const bvid = v.bvid ?? v.bv_id ?? v.bvId ?? '';
    const title = v.title ?? '';
    const desc = v.desc ?? v.description ?? title;
    const cover = v.pic ?? v.cover ?? '';
    const created = (v.created ?? v.pubdate ?? v.ctime ?? 0) as number;
    if (created && created < SINCE_TS) continue;
    if (!bvid) continue;
    out.push({
      id: bvid,
      title: sanitize(title),
      tag: 'video',
      blurb: sanitize(desc, 120),
      cover: cover?.startsWith('http') ? cover : `https:${cover}`,
      href: `https://www.bilibili.com/video/${bvid}`,
      extra: created ? { publishedAt: new Date(created * 1000).toISOString() } : undefined,
    });
  }
  return out;
}

/** ---------- 写入 data/works.ts ---------- **/
function writeToWorks(videos: Work[]) {
  const sorted = [...videos].sort((a, b) => {
    const ta = a.extra?.publishedAt ?? '';
    const tb = b.extra?.publishedAt ?? '';
    return ta < tb ? 1 : -1;
  });
  const header = `// Auto-generated by scripts/import-bilibili.ts\n` +
`// DO NOT EDIT MANUALLY. Keep types in sync with src/data/works.ts\n\n` +
`import type { Work } from '../src/data/works'\n\n`;
  const out = `${header}export const works: Work[] = ${JSON.stringify(sorted, null, 2)};\n`;
  const dataPath = path.resolve(process.cwd(), 'src/data/works.ts');
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
  fs.writeFileSync(dataPath, out, 'utf8');
  console.log(`\n📊 Summary: total written = ${sorted.length}`);
  console.log('➡ src/data/works.ts 已生成/更新\n');
}

/** ---------- 主流程 ---------- **/
async function main() {
  console.log(`🚀 Import Bilibili videos, UID=${UID}, SINCE=${SINCE_TS === 0 ? 'ALL' : new Date(SINCE_TS * 1000).toISOString()}`);

  let list: Work[] = [];
  try { list = await fetchFromWBI(UID); } catch (e) { console.warn('⚠️  WBI failed:', e); }
  if (!list.length) {
    try { list = await fetchFromRSS(UID); } catch (e) { console.warn('⚠️  RSS fallback failed:', e); }
  }
  if (!list.length) {
    try { list = await fetchFromHTML(UID); } catch (e) { console.warn('⚠️  HTML scrape failed:', e); }
  }

  if (!list.length) {
    console.error('❌ No videos fetched from all strategies. 可尝试：SINCE=0 npm run import:bili');
    return;
  }
  writeToWorks(list);
}

main().catch((e) => { console.error('❌ import failed:', e); process.exit(1); });