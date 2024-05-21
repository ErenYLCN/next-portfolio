import About from "@/component/about/About";
import Header from "@/component/header/Header";
import Intro from "@/component/intro/Intro";
import Projects from "@/component/projects/Projects";
import SectionDivider from "@/component/section-divider/SectionDivider";

export default function Home() {
  return (
    <main className={"pt-28 flex flex-col items-center px-4"}>
      <Header />

      <Intro />

      <SectionDivider />

      <About />

      <Projects />
    </main>
  );
}
