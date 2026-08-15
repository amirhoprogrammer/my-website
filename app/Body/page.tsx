import React from "react";
import "../globals.css";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Body() {
  return (
    <div className="flex py-2 px-2">
      <div className="pr-2 flex">
        <div className="">
          <div className="rounded-full">
            <Image src="/amir-resume.jpg" alt="Amir" width={50} height={30} />
          </div>
          <h3>Amirhossein aminnegareshi</h3>
          <h4>Full Stack Devloper</h4>
        </div>
        <div>
          <h2>About me</h2>
          <p>
            I'm Amirhossein Aminnegareshi,I'm Front-end Developer with over 3
            years of professional experience in web and mobile application
            development. Proficient in HTML, CSS, JavaScript, TypeScript, React,
            Next.js, Vite, and modern UI libraries & frameworks (Tailwind CSS,
            Shadcn UI, Bootstrap). Strong expertise in API integration, data
            fetching, state management (Zustand, Redux), and connecting frontend
            to backend services. Skilled in version control with Git & GitHub
            (including branching, PRs, and collaborative workflows), API testing
            with Postman, and containerization basics with Docker. Experienced
            in mobile development using React Native (CLI & Expo) — multiple
            live projects and portfolio available on GitHub.
          </p>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
