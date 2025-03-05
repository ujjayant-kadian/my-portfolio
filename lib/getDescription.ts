import client from "./contentful";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";

export type WhoAmISection = {
  description: string;
  keywords: string[];
  profileImageUrl: string;
};

export async function fetchWhoAmISection(): Promise<WhoAmISection | null> {
  const res = await client.getEntries({
    content_type: "whoAmISection",
  });

  if (!res.items.length) {
    return null;
  }

  const entry = res.items[0];

  const descriptionField = entry.fields.description;
  const description = descriptionField && typeof descriptionField === "object" && "nodeType" in descriptionField
    ? documentToPlainTextString(descriptionField as Document)
    : "";

  const profileImage = entry.fields.profileImage as Asset | undefined;
  const profileImageUrl =
    profileImage?.fields.file?.url ? String(profileImage.fields.file.url) : "";

  const keywords = (entry.fields.keywords as string[]) || [];

  return {
    description,
    keywords,
    profileImageUrl,
  };
}
