import Resume from "./Resume";

export default function ResumeSection() {
  return (
    <div className="mt-20 mb-40 flex flex-col gap-10">
      <h2 className="text-3xl font-bold mb-2 text-center">Resume</h2>
      <div className="h-140">
        <Resume />
      </div>
    </div>
  );
}
