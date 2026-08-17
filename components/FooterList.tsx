import { FooterList } from "@/utils/types";

export default function FooterList({ items }: { items: FooterList }) {
  return (
    <div className="py-2 mx-2">
      <h3 className="text-lg font-bold">{items.title}</h3>
      {items.listItems.map((item, id) => (
        <div className="" key={id}>
          <p className="text-base my-1">{item}</p>
        </div>
      ))}
      {/*.map((item, id) => ())}*/}
    </div>
  );
}
