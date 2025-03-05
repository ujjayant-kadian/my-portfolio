import client from "./contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  link: string;
};

interface ContentfulProjectEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string; // Can be rich text from Contentful
    tags?: string[];
    githubLink: string;
    link: string;
  };
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await client.getEntries<ContentfulProjectEntry>({
    content_type: "portfolioProject",
  });

  const projectsData: Project[] = res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: documentToPlainTextString(item.fields.description),
    tags: item.fields.tags || [],
    github: item.fields.githubLink,
    link: item.fields.link,
  }));

  return projectsData;
}
