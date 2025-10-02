import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { works } from '@/data/works'
import type { MediaItem } from '@/data/works'
import VideoEmbed from '@/components/VideoEmbed'
import Container from '@/components/Container'

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = works.find(work => work.id === params.slug)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Media */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                {project.year && (
                  <span className="text-lg">{project.year}</span>
                )}
                {project.role && (
                  <span className="text-lg">• {project.role}</span>
                )}
                {project.client && (
                  <span className="text-lg">• {project.client}</span>
                )}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {project.blurb}
                  </p>
                </div>

                {/* Video Embed */}
                {project.href.includes('bilibili.com') && (
                  <div className="mb-12">
                    <VideoEmbed
                      src={project.href}
                      title={project.title}
                      className="w-full"
                    />
                  </div>
                )}

                {/* Gallery */}
                {project.extra?.gallery && project.extra.gallery.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.extra.gallery.map((img: MediaItem | string, index) => {
                        const src = typeof img === 'string' ? img : img.src;
                        const alt = typeof img === 'string' ? `${project.title} - Image ${index + 1}` : (img.alt ?? `${project.title} - Image ${index + 1}`);
                        return (
                          <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                            <Image
                              src={src}
                              alt={alt}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Credits */}
                {project.extra?.credits && project.extra.credits.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Credits</h3>
                    <ul className="space-y-2">
                      {project.extra.credits.map((credit, index) => (
                        <li key={index} className="text-gray-300">
                          {credit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Press Links */}
                {project.extra?.press && project.extra.press.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Press</h3>
                    <ul className="space-y-3">
                      {project.extra.press.map((press, index) => (
                        <li key={index}>
                          <a
                            href={press.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-red hover:text-brand-blue transition-colors duration-300"
                          >
                            {press.title} →
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-red/10 text-brand-red border border-brand-red/20">
                        {project.tag}
                      </span>
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                    <div className="space-y-3">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-3 bg-brand-red hover:bg-brand-blue text-white text-center font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  {/* Back to Projects */}
                  <Link
                    href="/projects"
                    className="block w-full px-4 py-3 border border-border text-white text-center font-medium rounded-lg hover:border-brand-red hover:text-brand-red transition-all duration-300"
                  >
                    ← Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.id,
  }))
}

