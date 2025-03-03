export default function Whoami() {
    return (
      <section id="about" className="mb-12 scroll-mt-16">
        <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">whoami</h2>
          <div className="terminal-section">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-terminal-green to-terminal-blue rounded-md blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <div className="bg-terminal-bg p-1 rounded-md border border-terminal-border overflow-hidden">
                    <div className="w-full max-w-[200px] aspect-square relative overflow-hidden rounded-sm">
                      <img
                        src="/IMG_8335.jpg"
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-terminal-black/70 to-transparent"></div>
                    </div>
                  </div>
                  <div className="mt-2 font-mono text-xs text-center text-terminal-green">
                    <span className="text-terminal-blue">cat</span> profile.jpg
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p className="mb-4 text-terminal-text">
            I am a results-driven{" "}
            <strong className="text-terminal-blue">Computer Engineering</strong> graduate student at Trinity College Dublin, passionate about{" "}
            <strong className="text-terminal-purple">AI optimization</strong>,{" "}
            <strong className="text-terminal-blue">machine learning</strong>, and{" "}
            <strong className="text-terminal-purple">software development</strong>.
          </p>
          <p className="mb-4 text-terminal-text">
            With hands-on experience at{" "}
            <strong className="text-terminal-blue">Intel</strong> as an{" "}
            <strong className="text-terminal-purple">AI Engineering Intern</strong>, I have worked on optimizing AI models for Intel NPU platforms, contributed to open-source projects, and developed tools to enhance AI performance.
          </p>
          <p className="mb-4 text-terminal-text">
            My technical skills include{" "}
            <strong className="text-terminal-blue">Python</strong>,{" "}
            <strong className="text-terminal-purple">C++</strong>,{" "}
            <strong className="text-terminal-blue">TensorFlow</strong>,{" "}
            <strong className="text-terminal-purple">OpenVINO</strong>, and{" "}
            <strong className="text-terminal-blue">web development</strong>. As an{" "}
            <strong className="text-terminal-purple">incoming Software Development Engineer</strong> at{" "}
            <strong className="text-terminal-blue">Amazon</strong>, I am excited to apply my expertise in building scalable solutions and tackling complex challenges in the tech industry.
          </p>
              </div>
            </div>
          </div>
      </section>
    )
  }
  