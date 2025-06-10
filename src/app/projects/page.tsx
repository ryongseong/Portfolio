import { NOTION_TOKEN, NOTION_DATABASE_ID } from "../../../config/index";

export default async function ProjectPage() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await response.json();

  const projectIds = projects.results.map(({ id }: { id: string }) => id);
  const properties = projects.results.map(
    ({
      properties,
    }: {
      properties: { Name: { title: { plain_text: string }[] } };
    }) => properties.Name.title[0]?.plain_text
  );
  console.log("Project IDs:", projectIds);
  console.log("Project Properties:", properties);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">프로젝트 페이지입니다.</h1>
        <p className="text-lg">여기에 프로젝트 관련 내용을 추가하세요.</p>
      </div>
    </section>
  );
}
