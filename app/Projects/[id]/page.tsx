import ProjectPage from "@/components/ProjectPage";
import { projectDetailData } from "@/data/projectDetailData";
import { notFound } from "next/navigation";
import React from "react";

export default async function project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectDetailData.find((p) => p.id === Number(id));

  if (!project) notFound(); // uses your not-found.tsx

  return (
    <div className="mt-20 flex items-center justify-center">
      <ProjectPage items={project} />
    </div>
  );
}
