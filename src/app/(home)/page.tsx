import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Education from "@/components/home/education";
// import ScrollToBtn from "@/components/home/ScollToBtn";
import ScrollToTopBtn from "@/components/home/ScrollToTopBtn";
import Skills from "@/components/home/skills";
import Landing from "@/components/home/landing";
import TableOfContents from "@/components/home/TableOfContents";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
      <TableOfContents />

      <section id="landing" className="container mx-auto px-6 my-36">
        <Landing />
      </section>
      {/* <ScrollToBtn target="about" /> */}

      <section
        id="about"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center my-36"
      >
        <About />
      </section>
      {/* <ScrollToBtn target="exprience" /> */}

      <section
        id="experience"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center justify-center mt-36 mb-36"
      >
        <Experience />
      </section>
      {/* <ScrollToBtn target="skills" /> */}

      <section
        id="skills"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center justify-center mt-36"
      >
        <Skills />
      </section>
      {/* <ScrollToBtn target="education" /> */}

      <section
        id="education"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center justify-center mt-36 mb-36"
      >
        <Education />
      </section>

      <ScrollToTopBtn />
    </section>
  );
}
