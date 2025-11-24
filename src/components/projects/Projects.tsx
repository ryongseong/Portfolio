import ProjectItem from "@/components/projects/ProjectItem";

import { projects } from "@/data/projects";

export default async function Projects() {
  return (
    <section>
      <div className="container mx-auto flex flex-col px-4 py-12 mb-10">
        <h1 className="text-3xl font-light mb-1">
          프로젝트
          <span className="text-sm ml-3 font-normal text-slate-500 dark:text-slate-400">
            ({projects.length})
          </span>
        </h1>
        <div className="h-0.5 w-20 bg-slate-200 dark:bg-slate-700 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              imageUrl={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.github || ""}
              workPeriod={project.workPeriod}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
