"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">cat ./skills.json</h2>

      <Card className="bg-terminal-bg border-terminal-border">
        <CardContent className="p-6">
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="flex flex-wrap sm:flex-nowrap gap-2 bg-terminal-black overflow-x-auto">
              <TabsTrigger value="programming" className="font-mono flex-1 text-center">
                Programming
              </TabsTrigger>
              <TabsTrigger value="ai-ml" className="font-mono flex-1 text-center">
                AI/ML
              </TabsTrigger>
              <TabsTrigger value="web" className="font-mono flex-1 text-center">
                Web Dev
              </TabsTrigger>
              <TabsTrigger value="devops" className="font-mono flex-1 text-center">
                DevOps
              </TabsTrigger>
              <TabsTrigger value="other" className="font-mono flex-1 text-center">
                Other
              </TabsTrigger>
            </TabsList>

            <TabsContent value="programming" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard name="Python" level={90} color="green" />
                <SkillCard name="C++" level={85} color="blue" />
                <SkillCard name="C" level={80} color="purple" />
                <SkillCard name="Verilog" level={50} color="yellow" />
                <SkillCard name="SQL" level={85} color="green" />
                <SkillCard name="Java" level={50} color="blue" />
                <SkillCard name="JavaScript" level={90} color="purple" />
              </div>
            </TabsContent>

            <TabsContent value="ai-ml" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard name="OpenVINO" level={95} color="blue" />
                <SkillCard name="TensorFlow" level={85} color="green" />
                <SkillCard name="PyTorch" level={80} color="purple" />
                <SkillCard name="scikit-learn" level={75} color="yellow" />
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard name="HTML" level={85} color="green" />
                <SkillCard name="CSS" level={80} color="blue" />
                <SkillCard name="JavaScript" level={75} color="yellow" />
                <SkillCard name="Node.js" level={70} color="green" />
                <SkillCard name="MongoDB" level={65} color="purple" />
                <SkillCard name="React" level={60} color="blue" />
                <SkillCard name="ShadCN" level={60} color="purple" />
                <SkillCard name="Bootstrap" level={75} color="green" />
              </div>
            </TabsContent>

            <TabsContent value="devops" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard name="Jenkins" level={70} color="blue" />
                <SkillCard name="JIRA" level={75} color="purple" />
                <SkillCard name="Git" level={85} color="green" />
                <SkillCard name="GitHub" level={85} color="yellow" />
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard name="Information Retrieval" level={75} color="green" />
                <SkillCard name="Maven" level={70} color="blue" />
                <SkillCard name="Lucene API" level={65} color="purple" />
                <SkillCard name="AJAX" level={70} color="yellow" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

interface SkillCardProps {
  name: string
  level: number
  color: "green" | "blue" | "purple" | "yellow"
}

function SkillCard({ name, level, color }: SkillCardProps) {
  const colorClasses = {
    green: "text-terminal-green",
    blue: "text-terminal-blue",
    purple: "text-terminal-purple",
    yellow: "text-yellow-400",
  }

  const bgColorClasses = {
    green: "bg-terminal-green",
    blue: "bg-terminal-blue",
    purple: "bg-terminal-purple",
    yellow: "bg-yellow-400",
  }

  return (
    <div className="bg-terminal-black p-4 rounded-md border border-terminal-border">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-mono font-bold ${colorClasses[color]}`}>{name}</span>
      </div>
      <div className="w-full bg-terminal-border rounded-full h-2">
        <div className={`h-2 rounded-full ${bgColorClasses[color]}`} style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

