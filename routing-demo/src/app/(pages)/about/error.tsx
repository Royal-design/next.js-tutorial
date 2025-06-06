"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="flex flex-col">
      {error.message}
      <button
        onClick={reload}
        className="rounded-sm border bg-red-500 p-1 w-fit"
      >
        Retry
      </button>
    </div>
  );
}
