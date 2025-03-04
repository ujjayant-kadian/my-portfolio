"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [toggleVisibility])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-terminal-bg border border-terminal-border hover:border-terminal-green transition-colors z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-terminal-green group-hover:text-terminal-blue transition-colors" />
          <span className="absolute -top-10 right-0 bg-terminal-bg border border-terminal-border px-2 py-1 rounded text-xs font-mono text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">
            cd ~/
          </span>
        </button>
      )}
    </>
  )
}

