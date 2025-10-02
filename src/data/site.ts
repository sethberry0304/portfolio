export interface SiteConfig {
  name: string
  tagline: {
    en: string
    zh: string
  }
  description: {
    en: string
    zh: string
  }
  social: {
    email: string
    linkedin?: string
    instagram?: string
    bilibili?: string
    twitter?: string
  }
  clients: string[]
  about: {
    en: {
      bio: string
      experience: string[]
      screenings: string[]
      awards: string[]
    }
    zh: {
      bio: string
      experience: string[]
      screenings: string[]
      awards: string[]
    }
  }
}

export const siteConfig: SiteConfig = {
  name: 'sethberry',
  tagline: {
    en: 'Creative Director & Filmmaker',
    zh: '创意总监 & 电影制作人'
  },
  description: {
    en: 'Crafting compelling visual narratives that connect brands with audiences through the power of storytelling.',
    zh: '通过强大的叙事力量，创作引人入胜的视觉故事，连接品牌与观众。'
  },
  social: {
    email: 'hello@sethberry.com',
    linkedin: 'https://linkedin.com/in/sethberry',
    instagram: 'https://instagram.com/sethberry',
    bilibili: 'https://space.bilibili.com/398797485',
    twitter: 'https://twitter.com/sethberry'
  },
  clients: [
    'Nike',
    'Adidas', 
    'Apple',
    'Google',
    'Microsoft',
    'Tesla',
    'Spotify',
    'Netflix',
    'Amazon',
    'Meta',
    'Uber',
    'Airbnb'
  ],
  about: {
    en: {
      bio: 'With over a decade of experience in visual storytelling, I specialize in creating cinematic content that resonates with audiences and drives brand engagement. From commercial campaigns to documentary films, each project is approached with meticulous attention to detail and a passion for authentic storytelling.',
      experience: [
        'Creative Director at Studio X (2020-2024)',
        'Senior Producer at Agency Y (2018-2020)',
        'Freelance Director (2015-2018)',
        'Assistant Director at Production Z (2012-2015)'
      ],
      screenings: [
        'Cannes Lions International Festival of Creativity 2024',
        'Sundance Film Festival 2023',
        'Berlin International Film Festival 2022',
        'Tribeca Film Festival 2021'
      ],
      awards: [
        'Gold Lion - Cannes Lions 2024',
        'Best Director - Film Festival X 2023',
        'Creative Excellence Award - Industry Y 2022',
        'Emerging Talent - Festival Z 2021'
      ]
    },
    zh: {
      bio: '拥有超过十年的视觉叙事经验，我专注于创作能够引起观众共鸣并推动品牌参与的电影内容。从商业广告到纪录片，每个项目都以对细节的精心关注和对真实叙事的热情来处理。',
      experience: [
        'Studio X 创意总监 (2020-2024)',
        'Agency Y 高级制片人 (2018-2020)',
        '自由导演 (2015-2018)',
        'Production Z 副导演 (2012-2015)'
      ],
      screenings: [
        '戛纳国际创意节 2024',
        '圣丹斯电影节 2023',
        '柏林国际电影节 2022',
        '翠贝卡电影节 2021'
      ],
      awards: [
        '金狮奖 - 戛纳国际创意节 2024',
        '最佳导演 - X电影节 2023',
        '创意卓越奖 - Y行业 2022',
        '新兴人才 - Z电影节 2021'
      ]
    }
  }
}

