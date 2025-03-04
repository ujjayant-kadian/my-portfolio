import client from "./contentful";

export type Experiences = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export async function fetchExperiences(): Promise<Experiences[]> {
  const res = await client.getEntries({
    content_type: "experienceEntryForPortfolioresume",
    order: ["-sys.createdAt"],
  });

const experinceData: Experiences[] = res.items.map((item: any) => ({
    id: parseInt(item.sys.id, 10),
    title: item.fields.title as string,
    company: item.fields.company as string,
    location: item.fields.location as string,
    period: item.fields.period as string,
    description: (item.fields.description as string[]) || [],
  }));

  return experinceData;
}
