"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function SkillItem({
  skill,
  description,
}: {
  skill: string;
  description: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc =
    mounted && resolvedTheme === "dark"
      ? `/icons/${skill}-dark.png`
      : `/icons/${skill}.png`;

  const formatSkillName = (name: string) => {
    if (name === "nextjs") return "Next.js";
    if (name === "nodejs") return "Node.js";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div
      className="group h-full rounded-xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
      style={{
        boxShadow: hover
          ? "0 15px 30px -8px rgba(99, 102, 241, 0.3), 0 10px 15px -5px rgba(99, 102, 241, 0.2)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex flex-col items-center mb-4">
          <div
            className="relative mb-5 transition-all duration-500"
            style={{
              width: hover ? "5rem" : "4rem",
              height: hover ? "5rem" : "4rem",
              filter: hover
                ? "drop-shadow(0 8px 12px rgba(99, 102, 241, 0.4))"
                : "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.2))",
            }}
          >
            <Image
              src={iconSrc}
              alt={`${skill} icon`}
              fill
              className={`object-contain transition-all duration-500 ${
                hover ? "scale-110" : ""
              }`}
              onError={(e) => {
                // 아이콘이 없는 경우 기본 이미지로 대체
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/file.svg";
              }}
            />
          </div>

          <div className="relative">
            <h3 className="font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 transition-all duration-300">
              {formatSkillName(skill)}
            </h3>
            <div
              className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 transition-all duration-500 rounded-full`}
              style={{
                width: hover ? "100%" : "0%",
                opacity: hover ? 1 : 0,
              }}
            ></div>
          </div>
        </div>

        <div
          className={`h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4 transition-all duration-500 ${
            hover ? "opacity-100" : "opacity-40"
          }`}
        ></div>

        <p
          className={`text-gray-700 dark:text-gray-300 text-sm flex-grow text-center transition-all duration-500 ${
            hover ? "opacity-100" : "opacity-90"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
