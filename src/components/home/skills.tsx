"use client";

const skills = {
  Language: {
    id: "Language",
    language: {
      Python: "#306998",
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
    },
  },
  FrontEnd: {
    id: "FrontEnd",
    language: {
      HTML: "#e34c26",
      CSS: "#1572b6",
      React: "#61dafb",
      "React Native": "#61dafb",
      "Vue.js": "#42b883",
      "Next.js": "#000000",
      "Tailwind CSS": "#06b6d4",
    },
  },
  BackEnd: {
    id: "BackEnd",
    language: {
      Django: "#092E20",
      FastAPI: "#009688",
      "Node.js": "#8cc84b",
      Express: "#000000",
      "Nest.js": "#000000",
      "REST API": "#0052CC",
    },
  },
  DataBase: {
    id: "DataBase",
    language: {
      PostgreSQL: "#336791",
      MongoDB: "#47A248",
      MySQL: "#00758F",
      SQLite: "#003B57",
      Elasticsearch: "#005571",
    },
  },
  DevOps: {
    id: "DevOps",
    language: {
      AWS: "#FF9900",
      Docker: "#2496ED",
      Vercel: "#000000",
    },
  },
  Tools: {
    id: "Tools",
    language: {
      Git: "#F05032",
      GitHub: "#181717",
      Postman: "#FF6C37",
      VSCode: "#007ACC",
      Figma: "#F24E1E",
      Notion: "#000000",
    },
  },
};

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-col">
        {Object.entries(skills).map(([key, value]) => (
          <div
            key={value.id}
            className="flex p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 gap-4 mb-4"
          >
            <div className="flex items-start min-w-[120px] font-semibold">
              {key}
            </div>
            <ul className="flex flex-wrap text-gray-700 dark:text-gray-300 gap-0.5">
              {Object.entries(value.language).map(([skill, color]) => (
                <li
                  key={skill}
                  className="flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                  style={{ backgroundColor: color, color: "#fff" }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
