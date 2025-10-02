import { Project } from './projects'

// This file will be populated by the Bilibili import script
// It contains projects imported from Bilibili with tag: 'video'
export const bilibiliProjects: Project[] = []

// Helper function to merge Bilibili projects with main projects
export function mergeProjects(mainProjects: Project[], biliProjects: Project[]): Project[] {
  // Remove existing video projects from main projects
  const nonVideoProjects = mainProjects.filter(p => !p.tags.includes('video'))
  
  // Combine and sort by year/publishedAt
  const allProjects = [...nonVideoProjects, ...biliProjects].sort((a, b) => {
    const aYear = a.year || new Date(a.extra?.publishedAt || '').getFullYear() || 0
    const bYear = b.year || new Date(b.extra?.publishedAt || '').getFullYear() || 0
    return bYear - aYear // Descending order
  })
  
  return allProjects
}

