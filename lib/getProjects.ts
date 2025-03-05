import client from "./contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document } from "@contentful/rich-text-types";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  link: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const res = await client.getEntries<{
    contentTypeId: "portfolioProject";
    sys: { id: string };
    fields: {
      title: string;
      description: string | Document;
      tags?: string[];
      githubLink: string;
      link: string;
    };
  }>({
    content_type: "portfolioProject",
  });

  const projectsData: Project[] = res.items.map((item) => {
    const { id } = item.sys;
    const { title, description: rawDescription, tags, githubLink, link } = item.fields;

    const description =
      rawDescription &&
      typeof rawDescription === "object" &&
      "nodeType" in rawDescription
        ? documentToPlainTextString(rawDescription as Document)
        : typeof rawDescription === "string"
        ? rawDescription
        : "";

    return {
      id,
      title,
      description,
      tags: tags || [],
      github: githubLink,
      link,
    };
  });

  return projectsData;
}
