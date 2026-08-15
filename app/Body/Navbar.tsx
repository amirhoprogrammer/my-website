"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrooled] = useState(false);
  return (
    <nav className="px-1 bg-navbar w-[20%] rounded-2xl py-1 fixed top-600 left-0 right-1200 z-51">
      <div className="my-1 flex items-center justify-center">
        <Link href={""}>
          <p className="text-sm">About me</p>
        </Link>
      </div>
      <div className="my-1 flex items-center justify-center">
        <Link href={""}>
          <p className="text-sm">Contact me</p>
        </Link>
      </div>
      <div className="my-1 flex items-center justify-center">
        <Link href={""}>
          <p className="text-sm">Projects & Portfolio</p>
        </Link>
      </div>
      <div className="my-1 flex items-center justify-center">
        <Link href={""} className="my-1">
          <p className="text-sm">services</p>
        </Link>
      </div>
      <div className="my-1 flex items-center justify-center">
        <Link href={""} className="mt-1">
          <p className="text-sm">Resume</p>
        </Link>
      </div>
    </nav>
  );
}
