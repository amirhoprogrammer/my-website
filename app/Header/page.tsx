import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="h-screen">
      <div className="flex items-center justify-between px-3 pt-2">
        <div className="logo rounded-full">
          <Image
            src="/AmirLogo.png"
            alt="AmirLogo"
            width={50}
            height={50}
            className="rounded-sm"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <Link href={""}>
            <p className="text-sm">About me</p>
          </Link>
          <Link href={""}>
            <p className="text-sm">Contact me</p>
          </Link>
          <Link href={""}>
            <p className="text-sm">Projects & Portfolio</p>
          </Link>
          <Link href={""}>
            <p className="text-sm">services</p>
          </Link>
          <Link href={""}>
            <p className="text-sm">Resume</p>
          </Link>
        </div>
        <div className="rounded-sm moon">moon</div>
      </div>
    </header>
  );
}
