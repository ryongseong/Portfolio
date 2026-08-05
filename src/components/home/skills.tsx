import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          style={{
            transform:
              "translateX(14.4621px) translateY(-14.4621px) scale(1.07231)",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl"
          style={{
            transform:
              "translateX(-24.0461px) translateY(24.0461px) scale(0.919846)",
          }}
        ></div>
      </div>
      <div className="container">
        <div
          className="text-center mb-12"
          style={{
            opacity: "1",
            transform: "none",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Skills
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-6xl">
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-auto"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">
                Programming Languages
              </span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">FrontEnd</span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="Next.js"
                    width={48}
                    height={48}
                    className="object-contain dark:invert"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    alt="TailwindCSS"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">BackEnd</span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                    alt="Spring"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                    alt="FastAPI"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                    alt="Nest.js"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">Database</span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    alt="PostgreSQL"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg"
                    alt="ElasticSearch"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                    alt="Redis"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">DevOps</span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                    alt="AWS"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                    alt="Docker"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
                    alt="Jenkins"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                    alt="Vercel"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            style={{
              opacity: "1",
              transform: "none",
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
            }}
          >
            <div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-60"
              style={{
                transform: "scale(1.11438)",
              }}
            ></div>
            <div className="text-lg font-semibold mb-6 relative pb-3">
              <span className="text-black dark:text-white">Tools</span>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 w-100"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VSCode"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg"
                    alt="WebStorm"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg"
                    alt="Notion"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                    alt="Jira"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
              <div
                className="group relative"
                style={{
                  opacity: "1",
                  transform: "rotate(0.501157deg)",
                }}
              >
                <div className="relative">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
                    alt="Slack"
                    width={48}
                    height={48}
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
