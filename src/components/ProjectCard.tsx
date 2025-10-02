'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={project.href || `/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-surface-elevated border-2 border-border hover:border-brand-red transition-all duration-300 hover:shadow-glow group">
          {/* Cover Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-brand-red/90 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-bold text-brand-red mb-2 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>

            {/* Role & Client */}
            {(project.role || project.client) && (
              <div className="text-sm text-gray-400 mb-3">
                {project.role && <span>{project.role}</span>}
                {project.role && project.client && <span> • </span>}
                {project.client && <span>{project.client}</span>}
                {project.year && <span> • {project.year}</span>}
              </div>
            )}

            {/* Blurb */}
            {project.blurb && (
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                {project.blurb}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}