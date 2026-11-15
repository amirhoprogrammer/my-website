// data/skillsData.ts

export type SkillNode = {
  id: string;
  label: string;
  x: number;
  y: number;
};

export type SkillGroup = {
  id: string;
  center: SkillNode;
  branches: SkillNode[];
};

export const skillsData: SkillGroup[] = [
  {
    id: "frontend",
    center: { id: "frontend", label: "front end", x: 50, y: 50 },
    branches: [
      { id: "responsive", label: "responsive", x: 30, y: 12 },
      { id: "css", label: "CSS", x: 18, y: 72 },
      { id: "html", label: "HTML", x: 82, y: 72 },
      { id: "react", label: "React", x: 30, y: 90 },
      { id: "tailwind", label: "Tailwind CSS", x: 18, y: 30 },
      { id: "bootstrap", label: "Bootstrap", x: 82, y: 30 },
      { id: "shadcn", label: "Shadcn UI", x: 70, y: 90 },
      { id: "framework", label: "Other frameworks", x: 70, y: 12 },
    ],
  },
  {
    id: "fullstack",
    center: { id: "fullstack", label: "full stack", x: 50, y: 50 },
    branches: [
      { id: "nextjs", label: "Next.js", x: 50, y: 12 },
      { id: "typescript", label: "TypeScript", x: 82, y: 50 },
      { id: "javascript", label: "JavaScript", x: 18, y: 50 },
      { id: "aspnet", label: "ASP.NET", x: 50, y: 90 },
    ],
  },
  {
    id: "other",
    center: { id: "other", label: "Other", x: 50, y: 50 },
    branches: [
      { id: "nodejs", label: "Node.js", x: 50, y: 12 },
      {
        id: "api",
        label: "Postman & Axios & REST API",
        x: 82,
        y: 50,
      },
      {
        id: "git",
        label: "Git & Docker & GitHub",
        x: 18,
        y: 50,
      },
      {
        id: "php",
        label: "WordPress & PHP",
        x: 50,
        y: 90,
      },
    ],
  },
];
