"use client"

import { useEffect, useState } from "react"

interface LoaderConfig {
  duration?: number // How long loader should display (ms)
  sessionKey?: string // Storage key to track if shown
  enabled?: boolean // Easy toggle
}

export function usePageLoader(config: LoaderConfig = {}) {
  const {
    duration = 2400, // 2.4 seconds for smooth animations
    sessionKey = "portfolio-loader-shown",
    enabled = true,
  } = config

  const [isLoading, setIsLoading] = useState(true)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Skip if disabled
    if (!enabled) {
      setIsLoading(false)
      return
    }

    // Check if loader was already shown this session
    const loaderShown = sessionStorage.getItem(sessionKey)

    if (loaderShown) {
      // Loader already shown this session, skip it
      setIsLoading(false)
      setHasShown(false)
      return
    }

    // First visit: mark as shown and start loader
    sessionStorage.setItem(sessionKey, "true")
    setHasShown(true)

    // After duration, hide loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, sessionKey, enabled])

  return {
    isLoading,
    hasShown, // Whether loader should be rendered
  }
}
