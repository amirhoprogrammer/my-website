import { HistoryDetails } from "@/utils/types";
import "./history.css";

export default function History({
  items,
  delay = 0,
}: {
  items: HistoryDetails;
  delay?: number;
}) {
  const formatDate = (
    year: number,
    month: number,
    day: number
  ): string | null => {
    if (day === 0 || month === 0) return null;

    const months = month < 10 ? `0${month}` : `${month}`;
    const days = day < 10 ? `0${day}` : `${day}`;

    return `${year}/${months}/${days}`;
  };

  return (
    <div
      className={`px-10 flex items-center history ${
        items.id % 2 !== 0 ? "justify-end flex-row" : "justify-start"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col">
        <div className="flex gap-5 items-center justify-center">
          <span className="bg-history rounded-full w-2.5 h-2.5"></span>
          <h2 className="text-2xl">{items.title}</h2>
          <h4 className="text-base">
            {formatDate(items.year, items.month, items.day)}
          </h4>
        </div>
        <div>
          <p>{items.description}</p>
        </div>
      </div>
    </div>
  );
}
