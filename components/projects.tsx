"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Terminal, Code } from "lucide-react"
import { Project } from "@/lib/getProjects"

type ProjectsProps = {
  projectsData: Project[];
};

export default function Projects({ projectsData }: ProjectsProps) {
  if (!projectsData || projectsData.length === 0) {
    return <div>No projects available</div>;
  }

  const [currentProject, setCurrentProject] = useState(0)
  const project = projectsData[currentProject]

  const nextProject = () => {
    const nextIndex = (currentProject + 1) % projectsData.length
    setCurrentProject(nextIndex)
  }

  const prevProject = () => {
    const prevIndex = currentProject === 0 ? projectsData.length - 1 : currentProject - 1
    setCurrentProject(prevIndex)
  }

  return (
    <section id="projects" className="mb-12">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">ls -la ./projects</h2>

      <div className="terminal-section">
        <div className="flex items-center justify-between border-b border-terminal-border pb-3 mb-4">
          <div className="flex items-center">
            <Terminal className="h-5 w-5 text-terminal-green mr-2" />
            <h3 className="font-mono text-terminal-blue">Project Explorer</h3>
          </div>
          <div className="text-xs font-mono text-terminal-green">
            {currentProject + 1}/{projectsData.length}
          </div>
        </div>

        <div className="font-mono text-sm text-terminal-green mb-4">
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <span>cat ./projects/{project.title.toLowerCase().replace(/\s+/g, "-")}.md</span>
          </div>
        </div>

        <div className="bg-terminal-black p-4 rounded-md border border-terminal-border mb-4 min-h-[250px]">
          <div className="transition-opacity duration-300 opacity-100">
            <h3 className="font-mono text-xl text-terminal-blue mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-md bg-terminal-bg text-terminal-purple">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-green hover:text-terminal-purple transition-colors"
              >
                <Github className="h-4 w-4 mr-1" />
                <span className="text-sm">View Code</span>
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-terminal-green hover:text-terminal-purple transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevProject}
            className="flex items-center px-3 py-1 rounded-md bg-terminal-bg hover:bg-terminal-black border border-terminal-border hover:border-terminal-green transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-terminal-green mr-1" />
            <span className="text-xs font-mono">prev</span>
          </button>

          <div className="flex space-x-1">
            {projectsData.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-2 h-2 rounded-full ${index === currentProject ? "bg-terminal-green" : "bg-terminal-border"}`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextProject}
            className="flex items-center px-3 py-1 rounded-md bg-terminal-bg hover:bg-terminal-black border border-terminal-border hover:border-terminal-green transition-colors"
          >
            <span className="text-xs font-mono">next</span>
            <ChevronRight className="h-4 w-4 text-terminal-green ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-terminal-green">
          <Code className="inline h-4 w-4 mr-1" />
          <span>View more projects on </span>
          <a
            href="https://github.com/ujjayant-kadian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-blue hover:text-terminal-purple transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
