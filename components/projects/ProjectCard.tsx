import { cn } from "@/lib/utils";
import { ProjectCardDetils } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({ items }: { items: ProjectCardDetils }) {
  return (
    <div
      className={cn(
        "shadow-lg rounded-md border-brand-blue bg-brand-gradient my-3 h-150 flex flex-col items-start justify-between"
      )}
    >
      <div className="rounded-t-md relative block h-62.5 w-full">
        <Link
          href={`/Projects/${items.id}`}
          //250px = 62.5
        >
          <Image
            src={items.imageUrl}
            alt={items.title}
            fill
            className="rounded-t-md"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-5 px-4">
        <h2 className="text-center text-3xl font-bold py-1">{items.title}</h2>
        <p className="text-base text-justify py-1">{items.description}</p>
      </div>
      <div className="px-2 py-2">
        <div className="flex flex-wrap gap-3 px-2 py-2">
          {items.label.map((item, id) => (
            <div className="rounded-md bg-brand-purple px-2" key={id}>
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
