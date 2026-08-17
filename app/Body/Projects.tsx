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
          <button
            className={`flex text-center rounded-2xl border-Main  px-4 py-1 ${
              activeButton == id ? "bg-Main" : "bg-card"
            }`}
            onClick={() => setActiveButton(id)}
          >
            {type}
          </button>
        ))}
        {/*<button
          className="flex text-center rounded-2xl border-Main bg-card px-4 py-1"
          onClick={() => setActiveButton(0)}
        >
          all
        </button>
        <button
          className="flex text-center rounded-2xl border-Main bg-card px-2 py-1"
          onClick={() => setActiveButton(2)}
        >
          React
        </button>
        <button
          className="flex text-center rounded-2xl border-Main bg-card px-2 py-1"
          onClick={() => setActiveButton(3)}
        >
          Nextjs
        </button>
        <button
          className="flex text-center rounded-2xl border-Main bg-card px-2 py-1"
          onClick={() => setActiveButton(4)}
        >
          other
        </button>*/}
      </div>
      {activeButton == 0 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[2]} />
          <ProjectCard items={projectCardData[5]} />
        </div>
      )}
      {activeButton == 1 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[3]} />
          <ProjectCard items={projectCardData[4]} />
        </div>
      )}
      {activeButton == 2 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[0]} />
          <ProjectCard items={projectCardData[1]} />
        </div>
      )}
      {activeButton == 3 && (
        <div className="flex px-2 items-center justify-around">
          <ProjectCard items={projectCardData[6]} />
          <ProjectCard items={projectCardData[7]} />
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
