"use client";
import Image from "next/image";
import Link from "next/link";
import "./header.css";
import { useEffect, useState } from "react";
import SteadyHeader from "@/components/SteadyHeader";
import { HeaderData } from "@/data/HeaderData";

export default function Steady() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 580);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-3 py-2 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="logo rounded-full">
        <Image
          src="/AmirLogo.png"
          alt="AmirLogo"
          width={50}
          height={50}
          className="rounded-sm"
        />
      </div>
      <div className="flex items-center justify-between gap-3 headerlist">
        {/*<Link href={"#"}>
          <p className="text-base">About me</p>
        </Link>
        <Link href={"#"}>
          <p className="text-base">Contact me</p>
        </Link>
        <Link href={"#"}>
          <p className="text-base">Projects & Portfolio</p>
        </Link>
        <Link href={"#"}>
          <p className="text-base">services</p>
        </Link>
        <Link href={"#"}>
          <p className="text-base">Resume</p>
        </Link>*/}
        <SteadyHeader item={HeaderData[0]} />
        <SteadyHeader item={HeaderData[1]} />
        <SteadyHeader item={HeaderData[2]} />
        <SteadyHeader item={HeaderData[3]} />
        <SteadyHeader item={HeaderData[4]} />
      </div>
      <div className="rounded-full bg-lights p-2">
        <Image src="/icons8-moon-30.png" alt="moon" height={30} width={30} />
      </div>
    </div>
  );
}
