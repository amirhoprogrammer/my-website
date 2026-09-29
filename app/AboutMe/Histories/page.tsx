import React from "react";
import { HistoryItems } from "@/data/HistoryItem";
import History from "@/components/History/History";
export default function Histories() {
  return (
    <div className="flex flex-col gap-10">
      {HistoryItems.map((item, index) => (
        <History key={item.id} items={item} delay={index * 5} />
      ))}
    </div>
  );
}
