import About from "@/components/home/about";
import AboutMe from "@/components/home/aboutMe";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
      <div className="container mx-auto flex px-6 md:flex-row flex-col items-center my-36">
        <About />
      </div>
      <div
        id="aboutme"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center justify-center mt-36"
      >
        <AboutMe />
      </div>
      <div
        id="skills"
        className="container mx-auto flex px-6 md:flex-row flex-col items-center justify-center mt-36"
      >
        <Skills />
      </div>
    </section>
  );
}
