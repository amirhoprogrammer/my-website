import React from "react";
import Card from "./Card";
import { cardData } from "@/data/cardData";

export default function Certificate() {
  return (
    <div className="flex-col mt-20 mb-40 w90">
      <h2 className="text-center text-4xl font-bold">Certificate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <Card items={cardData[0]} />
        <Card items={cardData[1]} />
        <Card items={cardData[2]} />
      </div>
    </div>
  );
}
