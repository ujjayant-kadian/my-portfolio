import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-terminal-border bg-terminal-bg py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-sm text-terminal-green">
              <span className="text-terminal-blue">const</span> <span className="text-terminal-purple">portfolio</span>{" "}
              = <span className="text-terminal-green">"© {new Date().getFullYear()} Ujjayant Kadian | All Rights Reserved."</span>;
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ujjayant-kadian" className="text-terminal-green hover:text-terminal-blue transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ujjayantkadian/" className="text-terminal-green hover:text-terminal-blue transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a href="#" className="text-terminal-green hover:text-terminal-blue transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a> */}
            {/* <a href="#" className="text-terminal-green hover:text-terminal-blue transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

