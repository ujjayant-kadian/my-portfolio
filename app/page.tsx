import Header from "@/components/header";
import Terminal from "@/components/terminal";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Whoami from "@/components/whoami";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { fetchProjects, Project } from "@/lib/getProjects";
import { fetchWhoAmISection, WhoAmISection } from "@/lib/getDescription";
import { fetchExperiences, Experiences } from "@/lib/getExperienceData";
import { fetchResumeLinkData, ResumeLinkData } from "@/lib/getResumeLink";
import { fetchSkills, Skill } from "@/lib/getSkillsData";

export const revalidate = 604800;

export default async function Home() {

  const projectsData: Project[] = await fetchProjects();
  const whoAmISection: WhoAmISection | null = await fetchWhoAmISection();
  const experienceData: Experiences[] = await fetchExperiences();
  const resumeLinkData: ResumeLinkData | null = await fetchResumeLinkData();
  const skillsData: Skill[] = await fetchSkills();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Terminal />
        {whoAmISection && <Whoami whoAmISection={whoAmISection} />}
        <Projects projectsData={projectsData} />
        <Skills skillsData={skillsData}/>
        <Experience 
          experienceData={experienceData}
          resumeLinkData={resumeLinkData}
        />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
