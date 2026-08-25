import { ContactsMe } from "@/utils/types";
import Image from "next/image";
export default function Contacts({ items }: { items: ContactsMe }) {
  return (
    <div className="px-2 flex gap-2">
      <Image src={items.imageUrl} alt={items.imageAlt} width={50} height={50} />
      <div className="flex items-center justify-center">
        <p className="text-base">{items.text}</p>
      </div>
    </div>
  );
}
