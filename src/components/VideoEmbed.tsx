'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface VideoEmbedProps {
  src: string
  title?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

export default function VideoEmbed({
  src,
  title = "Video",
  className = "",
  autoplay = false,
  muted = true,
  loop = false
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isBilibili, setIsBilibili] = useState(false)
  const [bvid, setBvid] = useState('')

  // Check if it's a Bilibili URL and extract bvid
  useEffect(() => {
    const biliMatch = src.match(/bilibili\.com\/video\/([a-zA-Z0-9]+)/)
    if (biliMatch) {
      setIsBilibili(true)
      setBvid(biliMatch[1])
    }
  }, [src])

  if (isBilibili && bvid) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={`https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=${autoplay ? 1 : 0}&muted=${muted ? 1 : 0}&loop=${loop ? 1 : 0}`}
            className="absolute inset-0 w-full h-full rounded-lg"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={title}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-red"></div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative w-full ${className}`}
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          controls
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-red"></div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
