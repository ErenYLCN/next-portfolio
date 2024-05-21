import About from "@/component/about/About";
import Contact from "@/component/contact/Contact";
import Experience from "@/component/experience/Experience";
import Header from "@/component/header/Header";
import Intro from "@/component/intro/Intro";
import Projects from "@/component/projects/Projects";
import SectionDivider from "@/component/section-divider/SectionDivider";
import Skills from "@/component/skills/Skills";

export default function Home() {
  return (
    <main className={"pt-28 flex flex-col items-center px-4"}>
      <Header />

      <Intro />

      <SectionDivider />

      <About />

      <Projects />

      <Skills />

      <Experience />

      <Contact />
    </main>
  );
}
