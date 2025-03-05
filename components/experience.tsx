"use client"

import { useState } from "react"
import { Calendar, MapPin, Briefcase, Download } from "lucide-react"
import { Experiences } from "@/lib/getExperienceData"
import { ResumeLinkData } from "@/lib/getResumeLink";

type ExperienceProps = {
  experienceData: Experiences[];
  resumeLinkData: ResumeLinkData | null;
};

export default function Experience({ experienceData, resumeLinkData }: ExperienceProps) {
  const [activeExp, setActiveExp] = useState<number>(
    experienceData && experienceData.length > 0 ? experienceData[0].id : 0
  );

  if (!experienceData || experienceData.length === 0) {
    return <div>No experience available</div>;
  }

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
                      <Briefcase className="h-4 w-4 mr-1 text-terminal-purple" />
                      <span className="text-terminal-purple">{exp.company}</span>
                    </div>
                    <div className="hidden sm:block text-terminal-purple">•</div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-terminal-purple" />
                      <span className="text-terminal-purple">{exp.location}</span>
                    </div>
                    <div className="hidden sm:block text-terminal-purple">•</div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-terminal-purple" />
                      <span className="text-terminal-purple">{exp.period}</span>
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
          {resumeLinkData ? (
            <a
              href={resumeLinkData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-terminal-green hover:bg-terminal-purple/50 text-terminal-black font-medium py-2 px-4 rounded"
            >
              <span className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </span>
            </a>
          ) : (
            <div>Loading resume...</div>
          )}
        </div>
      </div>
    </section>
  )
}

