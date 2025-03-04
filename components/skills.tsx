"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skill } from "@/lib/getSkillsData"

type SkillsProps = {
  skillsData: Skill[];
};

export default function Skills({ skillsData }: SkillsProps) {
  const distinctCategories = Array.from(
    new Set(skillsData.map((skill) => skill.category))
  );

  const availableColors: ("green" | "blue" | "purple" | "yellow")[] = [
    "green",
    "blue",
    "purple",
    "yellow",
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">
        cat ./skills.json
      </h2>
      <Card className="bg-terminal-bg border-terminal-border">
        <CardContent className="p-6">
          <Tabs defaultValue={distinctCategories[0]} className="w-full">
            <TabsList className="flex flex-wrap sm:flex-nowrap gap-2 bg-terminal-black overflow-x-auto">
              {distinctCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="font-mono flex-1 text-center"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {distinctCategories.map((category) => {
              const skillsForCategory = skillsData.filter(
                (skill) => skill.category === category
              );
              return (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillsForCategory.map((skill, index) => (
                      <SkillCard
                        key={skill.id}
                        name={skill.skillName}
                        level={skill.level}
                        color={availableColors[index % availableColors.length]}
                      />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

interface SkillCardProps {
  name: string;
  level: number;
  color: "green" | "blue" | "purple" | "yellow";
}

function SkillCard({ name, level, color }: SkillCardProps) {
  const colorClasses = {
    green: "text-terminal-green",
    blue: "text-terminal-blue",
    purple: "text-terminal-purple",
    yellow: "text-yellow-400",
  };

  const bgColorClasses = {
    green: "bg-terminal-green",
    blue: "bg-terminal-blue",
    purple: "bg-terminal-purple",
    yellow: "bg-yellow-400",
  };

  return (
    <div className="bg-terminal-black p-4 rounded-md border border-terminal-border">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-mono font-bold ${colorClasses[color]}`}>
          {name}
        </span>
      </div>
      <div className="w-full bg-terminal-border rounded-full h-2">
        <div
          className={`h-2 rounded-full ${bgColorClasses[color]}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
