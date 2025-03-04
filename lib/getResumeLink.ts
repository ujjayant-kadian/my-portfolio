import client from "./contentful";

export type ResumeLinkData = {
  resumeUrl: string;
};

export async function fetchResumeLinkData(): Promise<ResumeLinkData | null> {
  const res = await client.getEntries({
    content_type: "resumeUrl",
  });

  if (!res.items.length) return null;
  const entry = res.items[0];
  return { resumeUrl: entry.fields.resumeUrl as string };
}
