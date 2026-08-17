import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footericon } from "@/utils/types";
export default function Icon({ item }: { item: Footericon }) {
  return (
    <div className="p-0 m-0">
      <Image src={item.imageUrl} alt={item.imageTitle} width={50} height={50} />
      <Link href={item.linkUrl} />
    </div>
  );
}
