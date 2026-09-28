import Image from "next/image";
import "./aboutme.css";
export default function AboutMe() {
  return (
    <div>
      <div className="mt-20 ">
        <div className="flex items-center justify-around gap-20">
          <div className="w-[60%] px-15">
            <h1 className="text-3xl py-5">Hi, I'm amirhossein aminnegareshi</h1>
            <p className="text-justify text-lg">
              I began my career in programming and software development in 2023,
              working as a Frontend and React Native Developer at companies such
              as Avan Holding, Cyclo, and Behineh Sazan-e Sarzamin-e Hooshmand.
            </p>
            <p className="text-justify text-lg">
              I have worked with React, Next.js, TypeScript, Laravel, and MySQL,
              and have built projects using them.
            </p>
          </div>
          <div className="flex w-[30%]">
            <Image
              src={"/profile.png"}
              alt={"amirhossein aminnegareshi"}
              height={200}
              width={200}
              className="z-10"
            />
          </div>
        </div>
        <div className="w-full h-50 flex items-center justify-center relative ">
          <div className="absolute bottom-25 right-30">
            <Image src="/grass.png" alt="grass" width={500} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
