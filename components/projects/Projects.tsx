"use client";
import { useState } from "react";
import { projectCardData } from "@/data/projectCardData";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
const Types = ["all", "React", "Nextjs", "other"];
export default function Projects() {
  const [activeButton, setActiveButton] = useState(0);
  return (
    //28px = 7
    <div className="">
      <div className="flex items-center justify-center gap-3">
        {Types.map((type, id) => (
          <div key={id}>
            <button
              className={`flex text-center rounded-2xl border-resume-1  px-4 py-1 ${
                activeButton == id ? "bg-resume-4" : "bg-resume-1"
              }`}
              onClick={() => setActiveButton(id)}
            >
              {type}
            </button>
          </div>
        ))}
      </div>
      {activeButton == 0 && (
        <div className="w90 grid grid-cols-1 md:grid-cols-2 gap-20 px-2  items-center justify-around my-7">
          <ProjectCard items={projectCardData[2]} />
          <ProjectCard items={projectCardData[5]} />
        </div>
      )}
      {activeButton == 1 && (
        <div className="w90 grid grid-cols-1 md:grid-cols-2 gap-20 px-2 items-center justify-around my-7">
          <ProjectCard items={projectCardData[3]} />
          <ProjectCard items={projectCardData[4]} />
        </div>
      )}
      {activeButton == 2 && (
        <div className="w90 grid grid-cols-1 md:grid-cols-2 gap-20 px-2 items-center justify-around my-7">
          <ProjectCard items={projectCardData[0]} />
          <ProjectCard items={projectCardData[1]} />
        </div>
      )}
      {activeButton == 3 && (
        <div className="w90 grid grid-cols-1 md:grid-cols-2 gap-20 px-2 items-center justify-around my-7">
          <ProjectCard items={projectCardData[6]} />
          <ProjectCard items={projectCardData[7]} />
        </div>
      )}
      <div className="flex items-center justify-center my-5">
        <button className="bg-info text-foreground rounded-lg border-footer-border border py-2 px-4 font-bold flex items-center justify-center text-[16px] cursor-pointer">
          <Link href="/Projects">other projects</Link>
        </button>
      </div>
    </div>
  );
}
