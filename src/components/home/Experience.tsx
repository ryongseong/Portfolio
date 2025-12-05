import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <>
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-lg"></div>
      </div>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Experience
          </h2>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"></div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
