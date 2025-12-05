import { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-2 border-background shadow-lg"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-60"></div>
      <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {experience.title}
            </h3>
            <p className="text-sm text-primary font-medium whitespace-pre-line">
              {experience.description}
            </p>
          </div>
          <span className="text-xs text-muted-foreground bg-gradient-to-r from-muted/30 to-muted/50 px-3 py-1 rounded-full border border-border/50 whitespace-nowrap">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
            >
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>
                <strong>{resp.title}</strong>
                <br />
                {resp.content}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

