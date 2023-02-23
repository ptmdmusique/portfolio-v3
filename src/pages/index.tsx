import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about" className="text-skin-base">
        About
      </Link>
    </div>
  );
}
