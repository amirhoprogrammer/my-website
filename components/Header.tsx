import Image from "next/image";
import Link from "next/link";
import SteadyHeader from "./SteadyHeader";
import { HeaderData } from "@/data/HeaderData";
import PortfolioDropdown from "./PortfolioDropdown";

export default function Header() {
  return (
    <header className="header flex bg-secondary-bg">
      <div className="w90 flex items-center justify-between">
        <div className="">
          <Link href="./" className="size-18 relative block lg:size-20">
            <Image src="/Logo23.png" alt="logo" fill className="rounded-sm" />
          </Link>
        </div>
        <nav>
          {/* 30px = 7.5 */}
          <ul className="flex flex-wrap p-4 items-center justify-between gap-7.5 lg:flex lg:p-0 ">
            <SteadyHeader item={HeaderData[0]} />
            <SteadyHeader item={HeaderData[1]} />
            <SteadyHeader item={HeaderData[2]} />
            <SteadyHeader item={HeaderData[3]} />
            <SteadyHeader item={HeaderData[4]} />
          </ul>
        </nav>
        <PortfolioDropdown />
      </div>
    </header>
  );
}
