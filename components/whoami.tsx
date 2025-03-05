"use client";

import { WhoAmISection } from "@/lib/getDescription";
import Image from "next/image";

type WhoAmISectionProps = {
  whoAmISection: WhoAmISection;
}

export default function Whoami({ whoAmISection }: WhoAmISectionProps) {
  if (!whoAmISection) {
    return <div>No description available</div>;
  }
  const aboutData = whoAmISection;

  const escapeRegExp = (string: string) => {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  const processTextWithNewlines = (text: string) => {
    return text.split("\n").map((line, idx, arr) => (
      <span key={idx}>
        {line}
        {idx < arr.length - 1 ? <br /> : null}
      </span>
    ));
  };

  const highlightText = (text: string, keywords: string[]) => {
    if (!keywords.length) return processTextWithNewlines(text);
    const escapedKeywords = keywords.map((keyword) => escapeRegExp(keyword));
    const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
    const parts = text.split(regex);
    let matchCount = 0;
    return parts.map((part, index) => {
      if (keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase())) {
        matchCount++;
        const colorClass = matchCount % 2 === 0 ? "text-terminal-purple" : "text-terminal-blue";
        return (
          <strong key={index} className={colorClass}>
            {part}
          </strong>
        );
      }
      return <span key={index}>{processTextWithNewlines(part)}</span>;
    });
  };

  return (
    <section id="about" className="mb-12 scroll-mt-16">
      <h2 className="font-mono text-2xl text-terminal-green mb-4 terminal-prompt">whoami</h2>
      <div className="terminal-section">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-terminal-green to-terminal-blue rounded-md blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <div className="bg-terminal-bg p-1 rounded-md border border-terminal-border overflow-hidden">
                <div className="w-full max-w-[200px] aspect-square relative overflow-hidden rounded-sm">
                <Image
                    src={`https:${aboutData.profileImageUrl}`}
                    alt="Profile picture"
                    width={200} // Specify width for optimization
                    height={200} // Specify height for optimization
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-terminal-black/70 to-transparent"></div>
                </div>
              </div>
              <div className="mt-2 font-mono text-xs text-center text-terminal-green">
                <span className="text-terminal-blue">cat</span> profile.jpg
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="mb-4 text-terminal-text">
              {highlightText(aboutData.description, aboutData.keywords)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
