import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-1  bg-navbar w-16 rounded-sm">
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
  );
}
