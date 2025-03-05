import client from "./contentful";

export type Skill = {
  id: number;
  skillName: string;
  level: number;
  category: string;
};

export async function fetchSkills(): Promise<Skill[]> {
  const res = await client.getEntries<{
    contentTypeId: "skillsSection";
    sys: { id: string };
    fields: {
      skillName: string;
      level: number;
      category: string;
    };
  }>({
    content_type: "skillsSection",
    order: ["sys.createdAt"],
  });

  const skillsData: Skill[] = res.items.map((item) => ({
    id: parseInt(item.sys.id, 10),
    skillName: item.fields.skillName,
    level: item.fields.level,
    category: item.fields.category,
  }));

  return skillsData;
}
