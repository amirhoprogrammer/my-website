import { FooterList } from "@/utils/types";
import Link from "next/link";

export default function FooterLists({ items }: { items: FooterList }) {
  return (
    <div className="py-2 mx-2">
      <h3 className="text-lg font-bold">{items.title}</h3>
      {items.listItems.map((item, id) => (
        <div className="" key={id}>
          <Link href={item.link}>
            <p className="text-base my-1">{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
