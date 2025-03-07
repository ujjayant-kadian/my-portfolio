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
  const res = await client.getEntries<{
    contentTypeId: "experienceEntryForPortfolioresume";
    sys: { id: string };
    fields: {
      title: string;
      company: string;
      location: string;
      period: string;
      description?: string[];
    };
  }>({
    content_type: "experienceEntryForPortfolioresume",
    order: ["-sys.createdAt"],
  });

  const experinceData: Experiences[] = res.items.map((item) => ({
    id: parseInt(item.sys.id, 10),
    title: item.fields.title,
    company: item.fields.company,
    location: item.fields.location,
    period: item.fields.period,
    description: item.fields.description || [],
  }));

  return experinceData;
}
