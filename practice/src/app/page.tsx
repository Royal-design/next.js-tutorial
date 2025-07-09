"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { setModal } from "@/redux/slice/modalSlice";
import Link from "next/link";
import React from "react";

function HomePage() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setModal({
        isOpen: true,
        type: "test",
        data: {
          name: "Emmanuel",
        },
      })
    );
  };

  return (
    <div className="">
      <h1 className="mb-4">Home page</h1>
      <Button onClick={handleClick}>Test</Button>

      {/* <Link href="/login" className="p-2 rounded-md bg-green-300 w-fit">
        Go to login
      </Link>
      <Link href="/register" className="p-2 rounded-md bg-green-300 w-fit">
        Go to Register
      </Link> */}
    </div>
  );
}

export default HomePage;
