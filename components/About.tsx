import Image from "next/image";
export default function About() {
  return (
    <div className="w90">
      <div className="flex flex-col gap-8 items-center justify-between md:flex-row md:items-start py-20">
        {/* 150px = 37.5 */}
        <div className="flex flex-col items-center justify-between gap-10 py-0 md:w-37.5">
          <div className="items-center justify-center px-0 relative block size-24 ">
            <Image
              className="rounded-full"
              src="/profile/amirhosseinaminnegareshi.jpg"
              alt="Amir"
              fill
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="flex items-center justify-center text-[30px] md:text-[14px] text-center">
              Amirhossein Aminnegareshi
            </h4>
            <h4 className="flex items-center justify-center text-[18px] text-gray-400 md:text-[14px] md:text-default-line">
              Full Stack Devloper
            </h4>
          </div>
        </div>
        {/* 1050px = 262.5 */}
        <div className="lg:w-[80%] md:w-[60%] w-full">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-start">
            About me
          </h2>
          <p className="text-justify text-[16px]/9">
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
