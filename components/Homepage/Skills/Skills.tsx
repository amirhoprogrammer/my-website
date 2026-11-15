import SkillGraph from "./SkillDiagram";

export default function Skills() {
  return (
    <div className="my-40 flex flex-col gap-5">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center">
          Skills & Technology
        </h2>
        <p className="text-center text-base">
          I work with this Tecnology and make project with it and in the bottom
          you see my skills
        </p>
      </div>
      <SkillGraph />
    </div>
  );
}
