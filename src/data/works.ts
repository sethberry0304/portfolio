// src/data/works.ts

export type MediaItem = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type WorkExtra = {
  publishedAt?: string;
  gallery?: MediaItem[];
  credits?: string[]; // normalized to array
  duration?: string;
  links?: { label: string; href: string }[];
  press?: { title: string; url: string }[];
};

export type Work = {
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

export const works: Work[] = [
  {
    id: "BV1nks8zYEEo",
    title: "什么时候开始，算法让我们不再为自己创作？",
    titleEn: "SO I START A REVOLUTION FROM MY BED(room)",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/237dbf23c25a07e6792efc41eca199652486cfbf.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1nks8zYEEo",
    year: 2025,
    extra: { 
      publishedAt: "",
      links: [
        { label: "Bilibili", href: "https://www.bilibili.com/video/BV1nks8zYEEo" },
        { label: "YouTube", href: "https://www.youtube.com/watch?v=bsT6TKiuWTI" }
      ]
    }
  },
  {
    id: "BV1MEKJzeENE",
    title: "相差13岁，写给二胎妹妹的一封信",
    titleEn: "Thirteen Years Apart: A Letter to My Younger Sister",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/f65ee06ecdc16a380b313e2452a54af461e39484.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1MEKJzeENE",
    year: 2024,
    role: "Director",
    extra: { publishedAt: "" }
  },
  {
    id: "BV1YFjozqEg2",
    title: "离开家前，我定格下了我眼中的他们",
    titleEn: "Before Leaving Home, I Captured Them as I Saw Them",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/65dd5f216c6cd02f27dd578a196197ff02831413.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1YFjozqEg2",
    year: 2023,
    role: "Filmmaker",
    extra: { publishedAt: "" }
  },
  {
    id: "BV1jSJbz3EHE",
    title: "没想好怎么告别大学，所以我按下了快门",
    titleEn: "Unsure How to Say Goodbye to College, I Pressed the Shutter",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/6a5d9c6fbcef22d6dd0c42ee0b4d450b68ddabe7.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1jSJbz3EHE",
    year: 2023,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1DZdwYTELL",
    title: "做自媒体四年，我被ChatGPT问住了",
    titleEn: "Four Years as a Creator, Stumped by ChatGPT",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/c1e3e129c012e9e5e5a93e03e7b10563a2a3fc4c.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1DZdwYTELL",
    year: 2023,
    role: "Content Creator",
    extra: { publishedAt: "" }
  },
  {
    id: "BV1aJA6eAEfK",
    title: "离开县城8年， 我录下了最想带走的78秒",
    titleEn: "After Eight Years Away, I Recorded the 78 Seconds I Longed to Keep",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/e48877ae5e7073c621ed454f33fd024e730b7600.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1aJA6eAEfK",
    year: 2022,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1vnk2YPEjp",
    title: "我用眼睛，把2024做成了一本书",
    titleEn: "With My Eyes, I Made 2024 Into a Book",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/2280362dff571b47c8e21a5a19b278a98822f384.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1vnk2YPEjp",
    year: 2024,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1wTByYaEnr",
    title: "去你的风格，你就是你自己",
    titleEn: "Forget Style—You Are Your Own",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/e3a50e20c32e0a29e75221073e63dd796341e7c9.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1wTByYaEnr",
    year: 2023,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1Z319YPEh7",
    title: "我才21岁，为什么我的生活这么无聊？",
    titleEn: "I’m Only 21, Why Is My Life So Dull?",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/f9ff273ad52b765041e886b7c25262cdf8ffe5e5.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1Z319YPEh7",
    year: 2022,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1YG411973C",
    title: "10年后，我终于实现了小时候的梦",
    titleEn: "Ten Years Later, I Finally Lived My Childhood Dream",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/b7794b638820dc3e817f7aee21cce882365cf63c.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1YG411973C",
    year: 2023,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1LH4y1z79i",
    title: "当我们在喜欢复古滤镜时，我们在喜欢什么",
    titleEn: "What Are We Really Loving When We Love Retro Filters?",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/4fcd66c82becced2c2dc1bb7034112485e999a22.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1LH4y1z79i",
    year: 2021,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1Vh4y1B7XR",
    title: "为了做这期视频，我采访了一只鸡",
    titleEn: "To Make This Video, I Interviewed a Chicken",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/c05e54f42369e4f75a3384edda80a86a7ad22a1d.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1Vh4y1B7XR",
    year: 2021,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1684y1Z75x",
    title: "我讨厌离别，但我发现人生是一次相遇",
    titleEn: "I Hate Goodbyes, But Life Is Just a Series of Encounters",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/60dd578bd381308da6d1ff2b95bbc5f1537e23f2.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1684y1Z75x",
    year: 2020,
    extra: { publishedAt: "" }
  },
  {
    id: "BV1gx4y1P7Tr",
    title: "我讨厌20岁，但还是成为了20岁的人",
    titleEn: "I Hate Being 20, But I Became One Anyway",
    tag: "video",
    cover: "https://i0.hdslb.com/bfs/archive/c1b5e7217d5d2e7404c619de141388e41decb5f3.jpg@672w_378h_1c.webp",
    href: "https://www.bilibili.com/video/BV1gx4y1P7Tr",
    year: 2020,
    extra: { publishedAt: "" }
  }
];
