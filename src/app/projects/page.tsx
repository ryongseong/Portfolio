import Projects from "@/components/projects/Projects";
import Loaders from "@/components/projects/Loaders";
import { Suspense } from "react";

export default async function ProjectPage() {
  return (
    <Suspense fallback={<Loaders />}>
      <Projects />
    </Suspense>
  );
}
