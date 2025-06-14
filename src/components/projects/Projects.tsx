import ProjectItem from "@/components/projects/ProjectItem";
import { NOTION_TOKEN, NOTION_DATABASE_ID } from "../../../config/index";

export default async function Projects() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await response.json();

  return (
    <section>
      <div className="container mx-auto flex flex-col px-4 py-12 mb-10">
        <h1 className="text-3xl font-light mb-1">
          프로젝트
          <span className="text-sm ml-3 font-normal text-slate-500 dark:text-slate-400">
            ({projects.results.length})
          </span>
        </h1>
        <div className="h-0.5 w-20 bg-slate-200 dark:bg-slate-700 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {projects.results.map(
            ({
              id,
              cover,
              properties,
            }: {
              id: string;
              cover: {
                type: "external";
                file?: {
                  url: string;
                };
                external?: {
                  url: string;
                };
              };
              properties: {
                Name: { title: { plain_text: string }[] };
                Description: { rich_text: { plain_text: string }[] };
                Github: { url: string };
                WorkPeriod: { date: { start: string; end?: string } };
                Tags: { multi_select: { name: string }[] };
              };
            }) => (
              <ProjectItem
                key={id}
                id={id}
                imageUrl={cover.external?.url || cover.file?.url || ""}
                title={properties.Name.title[0]?.plain_text || "No Name"}
                description={
                  properties.Description.rich_text[0]?.plain_text ||
                  "No Description"
                }
                githubLink={properties.Github.url || ""}
                workPeriod={{
                  start: properties.WorkPeriod.date.start,
                  end: properties.WorkPeriod.date.end,
                }}
                tags={properties.Tags.multi_select.map((tag) => tag.name) || []}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
