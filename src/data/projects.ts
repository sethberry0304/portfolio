export interface Project {
  slug: string
  title: string
  year?: number
  role?: string
  client?: string
  tags: string[]
  cover: string
  heroVideo?: {
    src: string
    poster?: string
  }
  gallery?: {
    type: 'image' | 'video'
    src: string
    poster?: string
    alt?: string
  }[]
  blurb?: string
  credits?: string[]
  press?: {
    title: string
    outlet: string
    href: string
    year?: number
  }[]
  href?: string
  extra?: {
    publishedAt?: string
    bvid?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'commercial-brand-campaign',
    title: 'Brand Campaign 2024',
    year: 2024,
    role: 'Director',
    client: 'TechCorp',
    tags: ['commercial', 'brand'],
    cover: '/images/projects/commercial-1.jpg',
    heroVideo: {
      src: '/videos/commercial-1.mp4',
      poster: '/images/projects/commercial-1.jpg'
    },
    gallery: [
      {
        type: 'image',
        src: '/images/projects/commercial-1-1.jpg',
        alt: 'Behind the scenes'
      },
      {
        type: 'image',
        src: '/images/projects/commercial-1-2.jpg',
        alt: 'Production still'
      },
      {
        type: 'video',
        src: '/videos/commercial-1-bts.mp4',
        poster: '/images/projects/commercial-1-bts.jpg',
        alt: 'Behind the scenes video'
      }
    ],
    blurb: 'A cutting-edge commercial campaign showcasing innovation and human connection in the digital age.',
    credits: [
      'Director: Your Name',
      'Producer: Jane Smith',
      'DP: John Doe',
      'Editor: Mike Johnson'
    ],
    press: [
      {
        title: 'Innovative Campaign Wins Industry Award',
        outlet: 'Creative Review',
        href: 'https://example.com',
        year: 2024
      }
    ]
  },
  {
    slug: 'documentary-urban-stories',
    title: 'Urban Stories',
    year: 2023,
    role: 'Director & Producer',
    client: 'Independent',
    tags: ['documentary', 'short'],
    cover: '/images/projects/doc-1.jpg',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/doc-1-1.jpg',
        alt: 'Street scene'
      },
      {
        type: 'image',
        src: '/images/projects/doc-1-2.jpg',
        alt: 'Interview setup'
      }
    ],
    blurb: 'An intimate look at the lives of urban dwellers and their stories of resilience and hope.',
    credits: [
      'Director: Your Name',
      'Producer: Your Name',
      'DP: Sarah Wilson',
      'Sound: Tom Brown'
    ]
  },
  {
    slug: 'music-video-dreams',
    title: 'Dreams',
    year: 2023,
    role: 'Director',
    client: 'Artist Name',
    tags: ['music', 'video'],
    cover: '/images/projects/music-1.jpg',
    heroVideo: {
      src: '/videos/music-1.mp4',
      poster: '/images/projects/music-1.jpg'
    },
    gallery: [
      {
        type: 'image',
        src: '/images/projects/music-1-1.jpg',
        alt: 'Performance shot'
      },
      {
        type: 'image',
        src: '/images/projects/music-1-2.jpg',
        alt: 'Conceptual scene'
      }
    ],
    blurb: 'A surreal music video exploring the boundaries between reality and dreams.',
    credits: [
      'Director: Your Name',
      'Artist: Artist Name',
      'DP: Alex Chen',
      'Editor: Lisa Wang'
    ]
  },
  {
    slug: 'short-film-reflection',
    title: 'Reflection',
    year: 2022,
    role: 'Writer & Director',
    client: 'Independent',
    tags: ['short', 'film'],
    cover: '/images/projects/short-1.jpg',
    gallery: [
      {
        type: 'image',
        src: '/images/projects/short-1-1.jpg',
        alt: 'Main character'
      },
      {
        type: 'image',
        src: '/images/projects/short-1-2.jpg',
        alt: 'Key scene'
      }
    ],
    blurb: 'A contemplative short film about self-discovery and the power of introspection.',
    credits: [
      'Writer/Director: Your Name',
      'Producer: Emma Davis',
      'DP: Robert Lee',
      'Editor: Your Name'
    ],
    press: [
      {
        title: 'Short Film Festival Selection',
        outlet: 'Film Festival News',
        href: 'https://example.com',
        year: 2022
      }
    ]
  }
]

export const featuredProjects = projects.slice(0, 3)

export const allTags = [
  'commercial',
  'documentary', 
  'short',
  'music',
  'video',
  'brand',
  'film'
]

