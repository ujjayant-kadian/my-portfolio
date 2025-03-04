import client from "./contentful";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export type Project = {
  id: string;
  title: string;
  description: any;
  tags: string[];
  github: string;
  link: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const res = await client.getEntries({
    content_type: "portfolioProject",
  });

  // console.log("Raw response items:", res.items);

  const projectsData: Project[] = res.items.map((item: any) => ({
    id: item.sys.id as string,
    title: item.fields.title as string,
    description: documentToPlainTextString(item.fields.description),
    tags: (item.fields.tags as string[]) || [],
    github: item.fields.githubLink as string,
    link: item.fields.link as string,
  }));

  // console.log("Transformed projectsData:", projectsData);
  return projectsData;
}

