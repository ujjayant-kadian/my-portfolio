"use client"

import { useState } from "react"
import { Code, ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  github: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality.",
    tags: ["React", "TypeScript", "Firebase"],
    link: "https://example.com/tasks",
    github: "https://github.com/username/tasks",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps and forecasts.",
    tags: ["JavaScript", "APIs", "Chart.js"],
    link: "https://example.com/weather",
    github: "https://github.com/username/weather",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="mb-12">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">ls -la ./projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="terminal-section hover:border-terminal-green transition-colors cursor-pointer"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-terminal-blue text-lg">{project.title}</h3>
              <div className="flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-purple transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-purple transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-md bg-terminal-bg text-terminal-green">
                  {tag}
                </span>
              ))}
            </div>
            {activeProject === project.id && (
              <div className="mt-4 pt-4 border-t border-terminal-border">
                <div className="flex items-center text-xs text-terminal-green">
                  <Code className="h-4 w-4 mr-2" />
                  <span className="typing-animation">Exploring project code...</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

