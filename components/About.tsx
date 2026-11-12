import Image from "next/image";
export default function About() {
  return (
    <div className="w90">
      <div className="flex aboutMe py-20 items-center justify-between">
        {/* 150px = 37.5 */}
        <div className="aboutMeLeft w-37.5 items-center justify-between flex flex-col gap-5">
          <div className="items-center justify-center px-0 relative block size-24 mb-2 ">
            <Image
              className="rounded-full"
              src="/profile/amirhosseinaminnegareshi.jpg"
              alt="Amir"
              fill
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="flex items-center justify-center">
              Amirhossein <br /> Aminnegareshi
            </h4>
            <h4 className="flex items-center justify-center">
              Full Stack Devloper
            </h4>
          </div>
        </div>
        {/* 1050px = 262.5 */}
        <div className="w-262.5 aboutMeRight ">
          <h2 className="text-3xl font-bold mb-2">About me</h2>
          <p className="text-justify text-[16px]/7.5">
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
    </div>
  );
}
