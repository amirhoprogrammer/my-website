"use client";

import { useState } from "react";
import { ResumeDetails } from "@/utils/types";
import { resumeData } from "@/data/resumeData";
import ResumeCard from "./ResumeCard";

const Labels = ["education", "WorkHistory", "skills", "Language"];
export default function Resume() {
  const [isClicked, setisClicked] = useState(0);
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-0 mx-0 px-0 items-center justify-center h-140">
      <div className="leftside grid grid-cols-2 md:flex md:flex-col items-center justify-center bg-resume-1 shadow-lg h-140 rounded-md md:rounded-r-none border-card">
        {Labels.map((Label, id) => (
          <div className="flex items-center justify-center py-1 px-2" key={id}>
            <button
              className={`px-2 rounded-lg  flex items-center justify-center w-28 ${
                isClicked == id ? "bg-resume-3" : "bg-button-resume"
              }`}
              onClick={() => setisClicked(id)}
            >
              {Label}
            </button>
          </div>
        ))}
      </div>
      <div className="rightside bg-resume-2 h-140 rounded-md md:rounded-l-none border-card w-[60%] overflow-hidden overflow-y-auto p-4">
        {isClicked == 0 && (
          <div className="flex flex-col gap-5">
            <ResumeCard items={resumeData[0]} />
            <ResumeCard items={resumeData[1]} />
          </div>
        )}
        {isClicked == 1 && (
          <div className="flex flex-col gap-5 ">
            <ResumeCard items={resumeData[2]} />
            <ResumeCard items={resumeData[3]} />
            <ResumeCard items={resumeData[4]} />
          </div>
        )}
        {isClicked == 2 && (
          <div className="flex flex-col gap-5 ">
            <ResumeCard items={resumeData[5]} />
            <ResumeCard items={resumeData[6]} />
            <ResumeCard items={resumeData[7]} />
            <ResumeCard items={resumeData[8]} />
          </div>
        )}
        {isClicked == 3 && (
          <div className="flex flex-col gap-5">
            <ResumeCard items={resumeData[9]} />
          </div>
        )}
      </div>
    </div>
  );
}
