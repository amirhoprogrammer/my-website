import React from "react";
import Projects from "./Projects";

export default function Projectsection() {
  return (
    <div className="my-10 flex flex-col gap-7">
      <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
      <Projects />
    </div>
  );
}
