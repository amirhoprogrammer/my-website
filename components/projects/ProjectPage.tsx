import { ProjectDetils } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ items }: { items: ProjectDetils }) {
  const altMaker = (alt: string): string => {
    const result = alt.slice(1, alt.length - 5);
    return result;
  };
  return (
    <div className="w-[90%] rounded-lg bg-Main">
      <div className="flex items-center justify-center pt-5 pb-25">
        <h1 className="text-3xl">{items.title}</h1>
      </div>
      <div className="py-5 px-5">
        <p className="text-justify text-base">{items.description}</p>
      </div>
      <div className="flex flex-wrap py-5">
        {items.imageUrls.map((url, id) => (
          <div className="mx-5  py-2" key={id}>
            <Image
              src={url}
              alt={altMaker(url)}
              width={250}
              height={250}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 px-2 py-5">
        {items.label.map((item, id) => (
          <div className="rounded-md bg-projectcard px-2" key={id}>
            {item}
          </div>
        ))}
      </div>

      <div className="py-5 flex items-center justify-center">
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
  );
}
