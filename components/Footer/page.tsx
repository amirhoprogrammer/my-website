import Image from "next/image";
import Icon from "@/components/Icon";
import { iconData } from "@/data/iconData";
import FooterLists from "@/components/FooterLists";
import { footerData } from "@/data/footerData";
import "../../app/globals.css";
export default function Footer() {
  return (
    <footer className="bg-footer-foreground">
      <div className="flex items-center justify-between ">
        <div className="left px-2 py-1 ">
          <div className="block relative size-25">
            <Image
              src="/AmirhosseinsLogo.png"
              alt="AmirLogo"
              fill
              className="rounded-md py-1 px-1 bg-white"
            />
          </div>

          <p className="text-base text-justify px-1 py-1 ">
            To get in touch with me, you can email me at <br />
            amirhanegareshi@gmail.com.
          </p>
        </div>
        <div className="flex items-center justify-between mx-2 my-1 w-[70%]">
          <FooterLists items={footerData[0]} />
          <FooterLists items={footerData[1]} />
          <FooterLists items={footerData[2]} />
        </div>
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="flex items-center justify-around">
        <p className="text-sm ">©Copyright 2026. All Rights Reserved.</p>
        <div className="flex gap-3">
          {<Icon item={iconData[0]} />}
          {<Icon item={iconData[1]} />}
          {<Icon item={iconData[2]} />}
        </div>
      </div>
    </footer>
  );
}
