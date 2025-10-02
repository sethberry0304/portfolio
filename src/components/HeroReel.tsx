'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroReelProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  videoUrl?: string
  coverImage?: string
  className?: string
}

export default function HeroReel({
  title,
  subtitle,
  ctaText,
  ctaHref,
  videoUrl,
  coverImage,
  className = ''
}: HeroReelProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoUrl && videoRef.current) {
      const video = videoRef.current
      video.load()
    }
  }, [videoUrl])

  const hasVideo = videoUrl && (isVideoLoaded || showVideo)
  const displayImage = coverImage || '/images/placeholder-video.jpg'

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue to-blue-900 ${className}`}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={videoUrl}
            loop
            muted
            autoPlay
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setShowVideo(false)}
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={displayImage}
              alt={title || "Hero background"}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-brand-red"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={ctaHref}
              className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-white text-white hover:text-brand-red font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow-red border-2 border-brand-red hover:border-white"
            >
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}