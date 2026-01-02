"use client";

import { useState } from "react";

import ProjectItem from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");

  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects =
    activeTab === "featured" ? featuredProjects : projects;

  return (
    <section>
      <div className="container mx-auto flex flex-col px-4 py-12 mb-10">
        <h1 className="text-3xl font-light mb-1">프로젝트</h1>
        <div className="h-0.5 w-20 bg-slate-200 dark:bg-slate-700 mb-6"></div>

        <div className="flex gap-4 mb-6 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab("featured")}
            className={`pb-2 px-4 transition-colors ${
              activeTab === "featured"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            주요 프로젝트 ({featuredProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 px-4 transition-colors ${
              activeTab === "all"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            전체 프로젝트 ({projects.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {displayProjects.map((project) => (
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
