"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

interface IProjectModalProps {
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

interface ProjectModalProps {
  project: IProjectModalProps;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [detailContent, setDetailContent] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"description" | "details">(
    "description"
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && project.id) {
      // projects 배열에서 해당 프로젝트의 상세 정보를 가져옴
      const projectData = projects.find((p) => p.id === project.id);
      if (projectData?.detailContent) {
        setDetailContent(projectData.detailContent);
        setActiveTab("details");
      } else {
        setDetailContent("");
      }
    }
  }, [isOpen, project.id]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatMarkdown = (text: string) => {
    const lines = text.split("\n");

    let inTable = false;
    let tableRows: string[] = [];

    let inCodeBlock = false;
    let codeLines: string[] = [];

    const processedLines = lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("```") && !inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
        return "";
      }

      if (trimmedLine.startsWith("```") && inCodeBlock) {
        inCodeBlock = false;
        const codeContent = codeLines.join("\n");
        return `<pre class="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm font-mono text-blue-600 dark:text-blue-400 whitespace-pre">${codeContent}</code></pre>`;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return "";
      }

      if (!trimmedLine) return "";

      if (trimmedLine.includes("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(trimmedLine);

        const nextLine = lines[index + 1]?.trim();
        if (!nextLine?.includes("|") || index === lines.length - 1) {
          inTable = false;
          return formatTable(tableRows);
        }
        return "";
      }

      if (trimmedLine.startsWith("### ")) {
        return `<h4 class="text-base font-medium mt-3 mb-2 text-slate-800 dark:text-slate-200">${trimmedLine.replace(
          "### ",
          ""
        )}</h4>`;
      }
      if (trimmedLine.startsWith("## ")) {
        return `<h3 class="text-lg font-semibold mt-6 mb-3 text-slate-900 dark:text-white">${trimmedLine.replace(
          "## ",
          ""
        )}</h3>`;
      }

      if (trimmedLine.startsWith("img(") && trimmedLine.endsWith(")")) {
        const imagePath = trimmedLine.slice(4, -1).trim();
        return `<div class="my-6"><img src="${imagePath}" alt="Project Image" class="w-full rounded-lg shadow-md" /></div>`;
      }

      if (trimmedLine.startsWith("- ")) {
        let content = trimmedLine.replace("- ", "");
        content = processInlineFormatting(content);
        return `<li class="ml-6 mb-2 text-slate-700 dark:text-slate-300 list-disc">${content}</li>`;
      }

      const processed = processInlineFormatting(trimmedLine);
      return `<p class="mb-3 text-slate-700 dark:text-slate-300 leading-relaxed">${processed}</p>`;
    });

    return processedLines.join("");
  };

  // 인라인 포맷팅 처리 함수
  const processInlineFormatting = (text: string) => {
    // 링크 처리: [텍스트](url)
    text = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>'
    );

    // 인라인 코드 처리
    text = text.replace(
      /`([^`]+)`/g,
      '<code class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-sm font-mono text-blue-600 dark:text-blue-400">$1</code>'
    );

    // 볼드 처리
    text = text.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>'
    );

    return text;
  };

  // 표 포맷팅 함수
  const formatTable = (rows: string[]) => {
    if (rows.length < 2) return "";

    const tableHtml = rows.map((row, index) => {
      // 구분선(---|---) 제거
      if (row.match(/^\|[\s\-:|]+\|$/)) return "";

      const cells = row
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell) => processInlineFormatting(cell.trim()));

      if (index === 0) {
        // 헤더 행
        return `<tr class="bg-slate-100 dark:bg-slate-700">${cells
          .map(
            (cell) =>
              `<th class="px-4 py-2 text-left font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600">${cell}</th>`
          )
          .join("")}</tr>`;
      } else {
        // 데이터 행
        return `<tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50">${cells
          .map(
            (cell) =>
              `<td class="px-4 py-2 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600">${cell}</td>`
          )
          .join("")}</tr>`;
      }
    });

    return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">${tableHtml.join(
      ""
    )}</table></div>`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-modalFadeIn"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 z-20 flex justify-between items-center p-5 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-110"
            aria-label="닫기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-grow hide-scrollbar">
          <div className="relative w-full h-72">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              quality={95}
            />
            <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
              <div className="flex flex-wrap gap-2">
                {project.tags &&
                  project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 sticky top-0 z-10">
            <div className="flex px-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-3 px-4 font-medium text-sm transition-colors relative ${
                  activeTab === "description"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                기본 정보
                {activeTab === "description" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`py-3 px-4 font-medium text-sm transition-colors relative ${
                  activeTab === "details"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                disabled={!detailContent}
              >
                상세 정보
                {activeTab === "details" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                )}
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "description" ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    프로젝트 설명
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    작업 기간
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 flex items-center">
                    {project.workPeriod?.start &&
                      formatDate(project.workPeriod.start)}
                    {project.workPeriod?.end
                      ? ` ~ ${formatDate(project.workPeriod.end)}`
                      : " ~ 현재 진행중"}
                  </p>
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                      </svg>
                      기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.githubLink && project.githubLink !== "Private" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </h3>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors"
                    >
                      <span>GitHub 저장소</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-2">
                {detailContent ? (
                  <div>
                    <div
                      className="text-slate-600 dark:text-slate-300 leading-relaxed prose prose-slate dark:prose-invert prose-img:rounded-lg prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: formatMarkdown(detailContent),
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-300 dark:text-slate-600 mb-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p className="text-slate-500 dark:text-slate-400">
                      이 프로젝트에 대한 상세 정보가 없습니다.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
