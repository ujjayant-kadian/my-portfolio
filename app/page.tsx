import Header from "@/components/header";
import Terminal from "@/components/terminal";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Whoami from "@/components/whoami";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { fetchProjects, Project } from "@/lib/getProjects";

export const revalidate = 604800;

export default async function Home() {

  const projectsData: Project[] = await fetchProjects();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Terminal />
        <Whoami />
        <Projects projectsData={projectsData} />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
