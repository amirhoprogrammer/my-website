"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { skillsData, SkillGroup, SkillNode } from "@/data/skillsData";

function SkillItem({
  node,
  center = false,
}: {
  node: SkillNode;
  center?: boolean;
}) {
  return (
    <div
      className={`
        skill-node absolute z-10
        -translate-x-1/2 -translate-y-1/2
        whitespace-normal text-center
        rounded-md px-2 py-1
        bg-background
        max-w-27.5 w-max
        text-xs sm:text-sm
        ${center ? "font-bold text-sm sm:text-base" : ""}
      `}
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
      }}
    >
      {node.label}
    </div>
  );
}

function SkillGroupItem({ group }: { group: SkillGroup }) {
  const center = group.center;

  return (
    //320px = 80
    <div className="skill-group relative h-80 w-full" data-group={group.id}>
      {/* Lines */}
      <svg
        className="absolute inset-0 z-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {group.branches.map((branch) => (
          <line
            key={branch.id}
            className="skill-line"
            x1={center.x}
            y1={center.y}
            x2={branch.x}
            y2={branch.y}
            stroke="currentColor"
            strokeWidth="0.65"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Center */}
      <SkillItem node={center} center />

      {/* Branches */}
      {group.branches.map((branch) => (
        <SkillItem key={branch.id} node={branch} />
      ))}
    </div>
  );
}

export default function SkillDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>(".skill-group");

      gsap.set(groups, { autoAlpha: 0 });

      groups.forEach((group) => {
        gsap.set(group.querySelectorAll(".skill-node"), {
          autoAlpha: 0,
          scale: 0.7,
          y: "+=10",
        });

        gsap.set(group.querySelectorAll(".skill-line"), {
          autoAlpha: 0,
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Right -> Center -> Left
      [2, 1, 0].forEach((index) => {
        const group = groups[index];

        if (!group) return;

        const nodes = group.querySelectorAll(".skill-node");
        const lines = group.querySelectorAll(".skill-line");

        timeline.to(
          group,
          {
            autoAlpha: 1,
            duration: 0.3,
          },
          "+=0.15"
        );

        timeline.to(
          lines,
          {
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.06,
          },
          "<"
        );

        timeline.to(
          nodes,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
          },
          "<"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w90 py-16">
      <div
        ref={containerRef}
        className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8 md:gap-2
          items-center
        "
      >
        {skillsData.map((group) => (
          <SkillGroupItem key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
