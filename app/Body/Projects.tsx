"use client";
import { useState } from "react";
import "./projects.css";
import { projectCardData } from "@/data/projectCardData";
import ProjectCard from "@/components/ProjectCard";
const Types = ["all", "React", "Nextjs", "other"];
export default function Projects() {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {Types.map((type, id) => (
          <div key={id}>
            <button
              className={`flex text-center rounded-2xl border-Main  px-4 py-1 ${
                activeButton == id ? "bg-Main" : "bg-card"
              }`}
              onClick={() => setActiveButton(id)}
            >
              {type}
            </button>
          </div>
        ))}
      </div>
      {activeButton == 0 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[2]} width={40} />
          <ProjectCard items={projectCardData[5]} width={40} />
        </div>
      )}
      {activeButton == 1 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[3]} width={40} />
          <ProjectCard items={projectCardData[4]} width={40} />
        </div>
      )}
      {activeButton == 2 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[0]} width={40} />
          <ProjectCard items={projectCardData[1]} width={40} />
        </div>
      )}
      {activeButton == 3 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[6]} width={40} />
          <ProjectCard items={projectCardData[7]} width={40} />
        </div>
      )}
      <div className="flex items-center justify-center my-5">
        <button className="bg-Main text-background rounded-lg border-card px-2 flex items-center justify-center text-2xl">
          other projects
        </button>
      </div>
    </div>
  );
}
