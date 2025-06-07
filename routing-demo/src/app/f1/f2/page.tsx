import Link from "next/link";

export default function F2() {
  return (
    <div>
      <h1>F2 Page</h1>
      <Link href="/f4" className="p-2 rounded-md bg-amber-300 w-fit">
        F4
      </Link>
    </div>
  );
}
