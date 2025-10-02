"use client";
import Image from "next/image";
import Link from "next/link";

type AnyWork = {
  id: string;
  title?: string;       // 中文
  titleEn?: string;     // 英文
  tag?: string;
  blurb?: string;
  cover?: string;
  href: string;
  extra?: { publishedAt?: string };
};

export default function WorkCard({ work }: { work: AnyWork }) {
  const titleCN = work.title || "";
  const titleEN = work.titleEn || "";

  return (
    <Link
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
       className="group block rounded-2xl overflow-hidden border-2 border-white/20 bg-white/5 hover:border-brand_red hover:shadow-contrast-red transition-all duration-300"
    >
      <div className="relative aspect-video">
        {work.cover ? (
          <Image src={work.cover} alt={titleCN} fill className="object-cover" />
        ) : (
           <div className="absolute inset-0 bg-brand_red/20" />
        )}
        {work.tag && (
          <span className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs tracking-wide font-bold border ${
            work.tag === 'video' ? 'bg-brand_red/90 text-white border-brand_red' :
            work.tag === 'research' ? 'bg-brand_blue/90 text-white border-brand_blue' :
            work.tag === 'photo' ? 'bg-green-500/90 text-white border-green-500' :
            'bg-purple-500/90 text-white border-purple-500'
          }`}>
            {work.tag}
          </span>
        )}
      </div>

      <div className="p-4">
        {work.extra?.publishedAt && (
          <p className="text-xs opacity-60 mb-1">
            {new Date(work.extra.publishedAt).toLocaleDateString()}
          </p>
        )}

        {/* 中文主标题 */}
        <h3 className="font-semibold leading-snug text-[15.5px] sm:text-[16px] line-clamp-2">
          {titleCN}
        </h3>

        {/* 英文副标题 */}
        {titleEN && (
          <p className="text-sm opacity-80 mt-1 italic leading-snug line-clamp-2 tracking-wide">
            {titleEN}
          </p>
        )}

        {work.blurb && (
          <p className="text-sm opacity-70 mt-2 line-clamp-2">
            {work.blurb}
          </p>
        )}
      </div>
    </Link>
  );
}