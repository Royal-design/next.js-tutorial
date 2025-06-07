import Link from "next/link";
import React from "react";

export default function ArchivedNotification() {
  return (
    <div className="max-w-sm border shadow-md rounded-lg h-full bg-green-200">
      <h1>Archived Notification</h1>
      <Link href="/dashboard">default</Link>
    </div>
  );
}
