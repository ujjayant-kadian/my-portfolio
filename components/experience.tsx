"use client"

import { useState } from "react"
import { Calendar, MapPin, Briefcase, Download } from "lucide-react"

type Experience = {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led the development of a React-based dashboard used by over 10,000 customers",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "Austin, TX",
    period: "2018 - 2021",
    description: [
      "Built RESTful APIs using Node.js and Express",
      "Developed and maintained multiple client-facing web applications",
      "Collaborated with UX designers to implement responsive designs",
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Creative Agency",
    location: "Seattle, WA",
    period: "2016 - 2018",
    description: [
      "Created interactive websites for various clients",
      "Optimized website performance and SEO",
      "Implemented analytics tracking and reporting",
    ],
  },
]

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number>(1)

  return (
    <section id="experience" className="mb-12">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">more ./experience.md</h2>
      <div className="terminal-section">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`w-full text-left p-3 mb-2 rounded-md font-mono transition-colors ${
                  activeExp === exp.id
                    ? "bg-terminal-bg border-l-4 border-terminal-green"
                    : "bg-transparent hover:bg-terminal-bg"
                }`}
              >
                <div className="font-semibold text-terminal-blue">{exp.title}</div>
                <div className="text-sm text-terminal-green">{exp.company}</div>
              </button>
            ))}
          </div>

          <div className="md:w-2/3 bg-terminal-bg p-4 rounded-md">
            {experienceData
              .filter((exp) => exp.id === activeExp)
              .map((exp) => (
                <div key={exp.id} className="animate-fadeIn">
                  <h3 className="font-mono text-xl text-terminal-blue mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1 text-terminal-green" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="hidden sm:block text-terminal-green">•</div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-terminal-green" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="hidden sm:block text-terminal-green">•</div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-terminal-green" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-terminal-green mr-2">$</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-center mt-4">
          <a
            href="/resume.pdf"  // update the path to your resume file
            download
            className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-medium py-2 px-4 rounded"
          >
            <span className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

