import React from "react";
import { ProjectCardDetils } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({
  items,
  width,
}: {
  items: ProjectCardDetils;
  width: number;
}) {
  return (
    <div
      className={`w-[${width}%] shadow-lg rounded-md border-Main my-3 h-150 flex flex-col items-center justify-between`}
    >
      <div className="rounded-t-md">
        <Link href={`/Projects/${items.id}`}>
          <Image
            src={items.imageUrl}
            alt={items.title}
            width={600}
            height={50}
            className="rounded-t-md"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <h2 className="text-center text-3xl font-bold py-1">{items.title}</h2>
      </div>
      <div className="px-2 py-2 cardlist ">
        <p className="text-base text-justify py-1">{items.description}</p>
        <div className="flex flex-wrap gap-3 px-2 py-2">
          {items.label.map((item, id) => (
            <div className="rounded-md bg-label px-2" key={id}>
              {item}
            </div>
          ))}
        </div>

        <div className="my-2 flex gap-2">
          <Link href={items.gitUrl}>
            <Image
              src="/icons8-github-100.png"
              alt="git"
              width={50}
              height={50}
            />
          </Link>
          {items.vercelUrl && (
            <Link href={items.vercelUrl}>
              <Image
                src="/icons8-vercel-100.png"
                alt="vercel"
                width={50}
                height={50}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
