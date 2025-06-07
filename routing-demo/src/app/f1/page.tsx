import Link from "next/link";
import React from "react";

export default function F1() {
  return (
    <div className="flex flex-col space-y-2">
      <h1>page F1</h1>
      <Link href="/f1/f2" className="p-2 rounded-md bg-green-300 w-fit">
        Go to F2
      </Link>
      <Link href="/f3" className="p-2 rounded-md bg-amber-300 w-fit">
        Go to F3
      </Link>
    </div>
  );
}
