'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Loader visible for 8 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-background pointer-events-none">
        <p className="text-sm font-medium text-foreground/70">Loading Portfolio</p>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-background pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated circle loader */}
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-3 border-primary/30" />
          <motion.div
            className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-primary"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Loading text with timer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-base font-medium text-foreground">Loading Portfolio</p>
          <p className="text-xs text-foreground/50 mt-2">Please wait...</p>
          
          {/* Pulsing dots */}
          <div className="mt-4 flex gap-1.5 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.p
          className="text-xs text-foreground/40 mt-6 max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Initializing your portfolio experience...
        </motion.p>
      </div>
    </motion.div>
  )
}
