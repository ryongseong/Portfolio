import About from "@/components/home/about";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
      <div className="container mx-auto flex px-6 md:flex-row flex-col items-center">
        <About />
      </div>
      <div className="container mx-auto flex px-6 md:flex-row flex-col items-center mt-32">
        <Skills />
      </div>
    </section>
  );
}
