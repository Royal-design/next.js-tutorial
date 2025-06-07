import Link from "next/link";

export default function Notification() {
  return (
    <div className="max-w-sm h-full border shadow-md rounded-lg ">
      <h1>Default Notification</h1>
      <Link href="/dashboard/archived">archived</Link>
    </div>
  );
}
