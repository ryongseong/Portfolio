"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

// 태그별 아이콘 매핑 객체
const tagIcons: Record<string, string> = {
  JavaScript: "/icons/javascript.png",
  React: "/icons/react.png",
  "Next.js": "/icons/nextjs.png",
  TypeScript: "/icons/typescript.png",
  "node.js": "/icons/nodejs.png",
  Express: "/icons/express.png",
  MongoDB: "/icons/mongodb.png",
  PostgreSQL: "/icons/postgresql.png",
  Python: "/icons/python.png",
  Django: "/icons/django.png",
  FastAPI: "/icons/fastapi.png",
  "Llama 3.1": "/icons/llama.png",
  OpenAI: "/icons/openai.jpeg",
  "Gemma 2.0": "/icons/gemma.png",
  Docker: "/icons/docker.png",
  HTML: "/icons/html.png",
  CSS: "/icons/css.png",
  Vue: "/icons/vue.png",
  TailwindCSS: "/icons/tailwindcss.png",
  Vercel: "/icons/vercel.png",
  SQLite3: "/icons/sqlite3.png",
};

export interface IProjectItemProps {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  workPeriod?: {
    start: string;
    end?: string;
  };
  tags?: string[];
  imageUrl: string;
}

export default function ProjectItem({
  id,
  title,
  description,
  githubLink,
  workPeriod,
  tags,
  imageUrl,
}: IProjectItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <>
      <div
        key={id}
        className="project-card cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          className="rounded-t-md w-full h-[300px] object-cover"
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          quality={90}
        />
        <div className="p-4 flex flex-col space-y-3">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 text-xs">
            {tags?.map((tag) => (
              <span key={tag} className="flex items-center">
                <Image
                  src={tagIcons[tag]}
                  alt={tag}
                  width={16}
                  height={16}
                  className="inline-block mr-1"
                />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 mt-1">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {workPeriod?.start && formatDate(workPeriod.start)}
              {workPeriod?.end ? ` - ${formatDate(workPeriod.end)}` : " - 현재"}
            </p>

            <button
              className="text-xs font-medium text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        project={{
          id,
          title,
          description,
          githubLink,
          workPeriod,
          tags,
          imageUrl,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
