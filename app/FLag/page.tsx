import React from "react";
import "./flag.css";
export default function Flag() {
  return (
    <div className="border-4 border-blues mx-14 my-14 rounded-lg flex flex-col flag ">
      <span className="w-full h-8 bg-blues flag1" />
      <div className="w-full h-8 bg-greens flex item-center justify-center flag2 py-1">
        <span className="flex item-center justify-center w-5 h-5 rounded-full bg-white flag2-1" />
      </div>
      <span className="w-full h-8 bg-reds flag3" />
    </div>
  );
}
