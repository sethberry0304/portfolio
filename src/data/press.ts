export interface PressItem {
  title: string
  outlet: string
  href: string
  year: number
  excerpt?: string
}

export const pressItems: PressItem[] = [
  {
    title: 'Innovative Campaign Wins Industry Award',
    outlet: 'Creative Review',
    href: 'https://example.com/article1',
    year: 2024,
    excerpt: 'The groundbreaking campaign showcases new possibilities in brand storytelling...'
  },
  {
    title: 'Director Spotlight: Rising Talent in Visual Storytelling',
    outlet: 'Film Industry Weekly',
    href: 'https://example.com/article2',
    year: 2024,
    excerpt: 'An in-depth interview with one of the most promising directors in the industry...'
  },
  {
    title: 'Short Film Festival Selection',
    outlet: 'Film Festival News',
    href: 'https://example.com/article3',
    year: 2022,
    excerpt: 'The contemplative short film has been selected for multiple international festivals...'
  },
  {
    title: 'Behind the Scenes: Commercial Production Excellence',
    outlet: 'Production Today',
    href: 'https://example.com/article4',
    year: 2023,
    excerpt: 'A look at the creative process behind award-winning commercial campaigns...'
  },
  {
    title: 'Documentary Filmmaking in the Digital Age',
    outlet: 'Documentary Quarterly',
    href: 'https://example.com/article5',
    year: 2023,
    excerpt: 'Exploring new approaches to documentary storytelling and production...'
  }
]

