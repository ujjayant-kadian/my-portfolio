"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { TerminalIcon } from "lucide-react"

export default function Terminal() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<(string | JSX.Element)[]>([
    "Welcome to Ujjayant Kadian's Portfolio Terminal!",
    "Type 'help' to see available commands.",
    "",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Define available commands and their outputs
  const commands = {
    help: (
      <div className="space-y-1">
        <p>Available commands:</p>
        <p>
          <span className="text-terminal-purple">whoami</span> - Learn about Ujjayant Kadian
        </p>
        <p>
          <span className="text-terminal-purple">skills</span> - View technical skills
        </p>
        <p>
          <span className="text-terminal-purple">experience</span> - View work experience
        </p>
        <p>
          <span className="text-terminal-purple">projects</span> - View projects
        </p>
        <p>
          <span className="text-terminal-purple">contact</span> - Contact information
        </p>
        <p>
          <span className="text-terminal-purple">clear</span> - Clear terminal
        </p>
        <p>
          <span className="text-terminal-purple">help</span> - Show this help message
        </p>
      </div>
    ),
    whoami: <p>Navigating to about section...</p>,
    skills: <p>Navigating to skills section...</p>,
    experience: <p>Navigating to experience section...</p>,
    projects: <p>Navigating to projects section...</p>,
    contact: <p>Navigating to contact section...</p>,
    clear: null,
    "": null,
  }

  // Helper function to scroll to a specific section on the page
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Process the input command and return an array of output strings or JSX elements
  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "") {
      return [""]
    }

    if (trimmedCmd === "clear") {
      setOutput(["Welcome to Ujjayant Kadian's Portfolio Terminal!", "Type 'help' to see available commands.", ""])
      return []
    }

    if (trimmedCmd in commands) {
      return [`$ ${cmd}`, commands[trimmedCmd as keyof typeof commands], ""]
    }

    return [
      `$ ${cmd}`,
      `Command not found: ${cmd}. Type 'help' for available commands.`,
      "",
    ]
  }

  // Handle form submission: process the command, update the output, and scroll if needed
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    const result = handleCommand(input)
    setOutput((prev) => [...prev, ...result.filter((item) => item !== null)])

    // Scroll terminal content to bottom after updating output
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 10)

    // Check for navigation commands and scroll to corresponding sections
    const trimmedCmd = input.trim().toLowerCase()
    switch (trimmedCmd) {
      case "whoami":
        scrollToSection("about")
        break
      case "skills":
        scrollToSection("skills")
        break
      case "experience":
        scrollToSection("experience")
        break
      case "projects":
        scrollToSection("projects")
        break
      case "contact":
        scrollToSection("contact")
        break
      default:
        break
    }

    setInput("")
  }

  // Auto-focus the input field when the component mounts
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="terminal-section mb-12">
      <div className="flex items-center gap-2 mb-2 p-2 bg-terminal-bg border-b border-terminal-border">
        <TerminalIcon className="h-4 w-4 text-terminal-green" />
        <h3 className="font-mono text-sm text-terminal-green">Terminal</h3>
      </div>
      <div
        ref={terminalRef}
        className="font-mono text-sm text-terminal-green bg-terminal-black p-4 h-64 overflow-y-auto"
      >
        {output.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-terminal-green mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-terminal-green font-mono"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  )
}
