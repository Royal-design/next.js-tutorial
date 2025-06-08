import Home from "@/components/home/Home";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="">
      <h1 className="mb-4">Home page</h1>

      <Link href="/login" className="p-2 rounded-md bg-green-300 w-fit">
        Go to login
      </Link>
      <Link href="/register" className="p-2 rounded-md bg-green-300 w-fit">
        Go to Register
      </Link>
    </div>
  );
}

export default page;
