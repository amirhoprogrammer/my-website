import Image from "next/image";
import Link from "next/link";

export default function Steady() {
  return (
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
          <p className="text-md">About me</p>
        </Link>
        <Link href={""}>
          <p className="text-md">Contact me</p>
        </Link>
        <Link href={""}>
          <p className="text-md">Projects & Portfolio</p>
        </Link>
        <Link href={""}>
          <p className="text-md">services</p>
        </Link>
        <Link href={""}>
          <p className="text-md">Resume</p>
        </Link>
      </div>
      <div className="rounded-sm moon">
        {/*<Image src="./icon8-moon-30.png" alt="moon" height={30} width={30} />*/}
        <Image src="/icons8-moon-30.png" alt="moon" height={30} width={30} />
      </div>
    </div>
  );
}
