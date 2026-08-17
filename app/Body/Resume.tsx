"use client";

import { useState } from "react";
import { ResumeDetails } from "@/utils/types";
import { resumeData } from "@/data/resumeData";
import ResumeCard from "@/components/ResumeCard";
const Labels = ["education", "WorkHistory", "skills", "Language"];
export default function Resume() {
  const [isClicked, setisClicked] = useState(0);
  //const items : ResumeDetails
  return (
    <div className="flex  mx-0 px-0 items-center justify-center h-140">
      <div className="leftside flex flex-col items-center justify-center bg-Main shadow-lg h-140 rounded-l-md border-card">
        {Labels.map((Label, id) => (
          <div className="flex items-center justify-center py-1 px-2">
            <button
              className="px-2 rounded-lg bg-button-resume flex items-center justify-center w-28"
              onClick={() => setisClicked(id)}
            >
              {Label}
            </button>
          </div>
        ))}
      </div>
      <div className="rightside bg-card h-140 rounded-r-md border-card w-[60%]">
        {isClicked == 0 && (
          <div className="py-2 flex-col gap-3">
            <ResumeCard items={resumeData[0]} />
            <ResumeCard items={resumeData[1]} />
          </div>
        )}
        {isClicked == 1 && (
          <div className="py-2 flex-col gap-3 ">
            <ResumeCard items={resumeData[2]} />
            <ResumeCard items={resumeData[3]} />
            <ResumeCard items={resumeData[4]} />
          </div>
        )}
        {isClicked == 2 && (
          <div className="py-2 flex-col gap-3 ">
            <ResumeCard items={resumeData[5]} />
            <ResumeCard items={resumeData[6]} />
            <ResumeCard items={resumeData[7]} />
            <ResumeCard items={resumeData[8]} />
          </div>
        )}
        {isClicked == 3 && (
          <div className="py-2 flex-col gap-3">
            <ResumeCard items={resumeData[9]} />
          </div>
        )}
      </div>
    </div>
  );
}
