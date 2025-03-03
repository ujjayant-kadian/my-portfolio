"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"

export default function Header() {
  const [text, setText] = useState("")
  const fullText = "Ujjayant Kadian"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <header className="border-b border-terminal-border bg-terminal-bg py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-terminal-green" />
          <h1 className="font-mono text-xl text-terminal-green">
            <span className="text-terminal-purple">~/</span>
            <span className="text-terminal-blue">portfolio</span>
          </h1>
        </div>
        <div className="font-mono text-terminal-green hidden md:block">
          {text}
          <span className="terminal-cursor"></span>
        </div>
        {/* <nav>
          <ul className="flex space-x-4 font-mono text-sm">
            <li>
              <a href="#projects" className="text-terminal-green hover:text-terminal-blue transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-terminal-green hover:text-terminal-blue transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-terminal-green hover:text-terminal-blue transition-colors">
                Experience
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}

