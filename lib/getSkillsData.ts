import client from "./contentful";

export type Skill = {
  id: number;
  skillName: string;
  level: number;
  category: string;
};

export async function fetchSkills(): Promise<Skill[]> {
  const res = await client.getEntries({
    content_type: "skillsSection",
    order: ["sys.createdAt"],
  });

  const skillsData: Skill[] = res.items.map((item: any) => ({
    id: parseInt(item.sys.id, 10),
    skillName: item.fields.skillName as string,
    level: item.fields.level as number,
    category: item.fields.category as string,
  }));

  return skillsData;
}
