import React from "react";
import "../globals.css";
import Navbar from "./Navbar";
import Image from "next/image";
import Card from "@/components/Card";
import { cardData } from "@/data/cardData";

export default function Body() {
  return (
    <div className="py-2 px-2 relative">
      <div className="pr-2 flex ">
        <div className="w-[15%]">
          <div className="items-center justify-center flex px-0">
            <Image
              src="/amirhossein.jpg"
              alt="Amir"
              width={150}
              height={100}
              className="rounded-full"
            />
          </div>
          <h4 className="flex items-center justify-center">
            Amirhossein <br /> Aminnegareshi
          </h4>
          <h4 className="flex items-center justify-center">
            Full Stack Devloper
          </h4>
        </div>
        <div className="w-[85%]">
          <h2 className="text-3xl font-bold mb-2">About me</h2>
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
      <div className="flex-col mt-40">
        <h2 className="text-center text-4xl">Certificate</h2>
        <div className="flex items-center justify-around mt-10">
          <Card items={cardData[0]} />
          <Card items={cardData[1]} />
          <Card items={cardData[2]} />
        </div>
      </div>
    </div>
  );
}
