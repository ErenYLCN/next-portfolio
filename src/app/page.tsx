import About from "@/component/about/About";
import Intro from "@/component/intro/Intro";
import SectionDivider from "@/component/section-divider/SectionDivider";

export default function Home() {
  return (
    <main className={"pt-28 flex flex-col items-center px-4"}>
      <Intro />

      <SectionDivider />

      <About />
    </main>
  );
}
