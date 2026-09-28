import React from "react";
import { ProjectCardDetils } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({ items }: { items: ProjectCardDetils }) {
  return (
    <div className="w-[40%] shadow-lg rounded-md border-Main my-3">
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
      <div className="px-2 py-2 cardlist">
        <h2 className="text-center text-3xl font-bold py-1">{items.title}</h2>
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
