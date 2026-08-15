import React from "react";
import { CardDetails } from "@/utils/types";
import "../app/globals.css";
import Image from "next/image";
export default function Card({ items }: { items: CardDetails }) {
  const date = `${items.year}/${items.month}/${items.day}`;
  return (
    <div className="rounded-md bg-card border-card w-[25%] shadow-lg card">
      <div className="rounded-t-md">
        <Image
          src={items.imageUrl}
          alt={items.title}
          width={450}
          height={50}
          className="rounded-t-md"
        />
      </div>
      <div className="px-2 py-2 cardlist">
        <h2 className="text-center text-3xl font-bold py-1">{items.title}</h2>
        <p className="text-base text-justify py-1">{items.description}</p>
        <h5 className="text-lg">date : {date}</h5>
        <h5 className="text-lg">issued : {items.issued}</h5>
      </div>
    </div>
  );
}
