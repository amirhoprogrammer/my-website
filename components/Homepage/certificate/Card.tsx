import { CardDetails } from "@/utils/types";

import Image from "next/image";
export default function Card({ items }: { items: CardDetails }) {
  const date = `${items.year}/${items.month}/${items.day}`;
  return (
    <div className="rounded-md border-card shadow-lg bg-brand-gradient">
      {/* 250px = 75 , 382px = 62.5 */}
      <div className="rounded-t-md relative block h-62.5 w-full ">
        <Image
          src={items.imageUrl}
          alt={items.title}
          fill
          className="rounded-t-md h-62.5 w-95.5"
        />
      </div>
      <div className="px-4 pt-2 pb-4 cardlist">
        <h2 className="text-center xl:text-[25px] lg:text-[20px] text-[18px] font-bold pt-3 pb-6">
          {items.title}
        </h2>
        <p className="xl:text-[16px] text-[14px] text-justify py-1">
          {items.description}
        </p>
        <h5 className="xl:text-[14px] text-[12px] font-bold">Date : {date}</h5>
        <h5 className="xl:text-[14px] text-[12px] font-bold">
          Issued : {items.issued}
        </h5>
      </div>
    </div>
  );
}
