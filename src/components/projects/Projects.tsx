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
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 m-6 py-10">
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
                imageUrl={cover.file?.url || cover.external?.url || ""}
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
