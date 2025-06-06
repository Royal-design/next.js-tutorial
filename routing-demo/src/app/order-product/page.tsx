"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    alert(" product ordered successfully");
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="rounded-md bg-green-500 text-white p-2"
      >
        Place order
      </button>
    </div>
  );
}
