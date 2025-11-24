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
  const categoryIcons: Record<string, string> = {
    Language: "💻",
    FrontEnd: "🎨",
    BackEnd: "⚙️",
    DataBase: "🗄️",
    DevOps: "🚀",
    Tools: "🛠️",
  };

  return (
    <div className="relative py-24 sm:py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([key, value], index) => (
            <div
              key={value.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[key]}
                    </span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                      {key}
                    </h3>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300 delay-75"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 group-hover:scale-150 transition-transform duration-300 delay-150"></div>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {Object.entries(value.language).map(
                    ([skill, color], skillIndex) => (
                      <li
                        key={skill}
                        className="group/item relative px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                        style={{
                          backgroundColor: color,
                          color: "#fff",
                          animationDelay: `${index * 100 + skillIndex * 50}ms`,
                        }}
                      >
                        <span className="relative z-10 drop-shadow-sm">
                          {skill}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover/item:opacity-100 rounded-xl transition-opacity duration-300"></div>
                        <div className="absolute inset-0 ring-2 ring-white/50 ring-offset-0 opacity-0 group-hover/item:opacity-100 rounded-xl transition-opacity duration-300"></div>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
