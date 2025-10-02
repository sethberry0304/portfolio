'use client'

import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number
  className?: string
}

export default function Marquee({ items, speed = 60, className = '' }: MarqueeProps) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * items.length + '%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 text-2xl font-light text-gray-400 hover:text-brand-red transition-colors duration-300"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}