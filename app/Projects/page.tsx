import ProjectCard from "@/components/projects/ProjectCard";
import { projectCardData } from "@/data/projectCardData";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 py-20 gap-10">
      {projectCardData.map((project) => (
        <ProjectCard items={project} key={project.id}  />
      ))}
    </div>
  );
}
