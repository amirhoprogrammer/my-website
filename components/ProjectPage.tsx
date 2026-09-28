import { ProjectDetils } from "@/utils/types";
import Image from "next/image";

export default function ProjectPage({ items }: { items: ProjectDetils }) {
  const altMaker = (alt: string): string => {
    const result = alt.slice(1, alt.length - 5);
    return result;
  };
  return (
    <div className="w-[90] rounded-lg bg-Main">
      <div className="flex items-center justify-center pt-5 pb-25">
        <h1 className="text-3xl">{items.title}</h1>
      </div>
      <div className="py-5">
        <p className="text-justify text-base">{items.description}</p>
      </div>
      <div className="flex flex-wrap py-5">
        {items.imageUrls.map((url, id) => (
          <div className="mx-5 rounded-lg" key={id}>
            <Image src={url} alt={altMaker(url)} width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}
