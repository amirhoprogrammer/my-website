import Image from "next/image";
import Icon from "@/components/Icon";
import { iconData } from "@/data/iconData";
import FooterList from "@/components/FooterList";
import { footerData } from "@/data/footerData";
export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="flex items-center justify-between">
        <div className="left px-2 py-1">
          <Image
            src="/AmirLogo.png"
            alt="AmirLogo"
            width={50}
            height={50}
            className="rounded-md py-1 px-1"
          />
          <p className="text-base text-justify px-1 py-1">
            To get in touch with me, you can email me at <br />
            amirhanegareshi@gmail.com.
          </p>
        </div>
        <div className="flex items-center justify-between mx-2 my-1 gap-45">
          <FooterList items={footerData[0]} />
          <FooterList items={footerData[1]} />
          <FooterList items={footerData[2]} />
        </div>
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="flex items-center justify-around">
        <p className="text-sm">©Copyright 2026. All Rights Reserved.</p>
        <div className="flex gap-3">
          {<Icon item={iconData[0]} />}
          {<Icon item={iconData[1]} />}
          {<Icon item={iconData[2]} />}
        </div>
      </div>
    </footer>
  );
}
