import Link from "next/link";
import { HeaderList } from "@/utils/types";

export default function SteadyHeader({ item }: { item: HeaderList }) {
  return (
    <Link href={item.headerLink}>
      <p className="text-base">{item.headerItem}</p>
    </Link>
  );
}
