import ProjectCard from "@/components/ProjectCard";
import { projectCardData } from "@/data/projectCardData";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-wrap px-10 py-20 gap-10 items-center justify-center">
      {projectCardData.map((project, id) => (
        <ProjectCard items={project} key={id} width={20} />
      ))}
    </div>
  );
}
