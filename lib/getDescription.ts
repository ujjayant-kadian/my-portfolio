import client from "./contentful";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

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

  const description = documentToPlainTextString(entry.fields.description);
  const keywords = (entry.fields.keywords as string[]) || [];
  const profileImageUrl = entry.fields.profileImage?.fields?.file?.url || '';

  return {
    description,
    keywords,
    profileImageUrl,
  };
}
