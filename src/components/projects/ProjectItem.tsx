import Image from "next/image";

interface IProjectItemProps {
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
  const calculateWorkPeriod = (start: string, end?: string) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end ? end.split("-") : null;

    const startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]) - 1,
      Number(startDateStringArray[2])
    );
    const endDate = endDateStringArray
      ? new Date(
          Number(endDateStringArray[0]),
          Number(endDateStringArray[1]) - 1,
          Number(endDateStringArray[2])
        )
      : null;

    const diffInMs = Math.abs(
      endDate ? endDate.getTime() - startDate.getTime() : 0
    );
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div key={id} className="project-card">
      <Image
        className="rounded-t-xl w-[400px] h-[200px] object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        quality={100}
      />
      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <p className="my-1">
          {workPeriod?.start} ~ {workPeriod?.end || ""} (
          {workPeriod && workPeriod.end
            ? `총 ${calculateWorkPeriod(workPeriod.start, workPeriod.end)}일`
            : "진행 중"}
          )
        </p>
        <div className="flex items-start mt-2 flex-wrap gap-2 text-sm">
          {tags?.map((tag) => (
            <h1
              key={tag}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            >
              {tag}
            </h1>
          ))}
        </div>
        {githubLink === "" || githubLink === "Private" ? (
          <p>비공개 프로젝트이거나 링크가 없습니다.</p>
        ) : (
          <a href={githubLink} target="_blank">
            깃허브 입니다.
          </a>
        )}
      </div>
    </div>
  );
}
