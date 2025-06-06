"use client";

import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    title: "Login",
    path: "/login"
  },
  {
    title: "Register",
    path: "/register"
  }
];
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-700 p-2 flex justify-between items-center">
        <h1 className="text-2xl">Header</h1>
        <div className="flex space-x-3">
          {links.map((link) => {
            const isActive =
              pathname === link.path ||
              (pathname.startsWith(link.path) && link.path !== "/");
            return (
              <Link
                key={link.title}
                href={link.path}
                className={` ${isActive ? "text-red-500" : "text-white"}`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </header>
      {/* search*/}
      <input
        type="text"
        placeholder="search"
        value={query}
        className="border border-green-400 p-1 w-80"
        onChange={(e) => setQuery(e.target.value)}
      />

      <main className="flex-1 p-2">{children}</main>
      <footer className="bg-blue-900 p-2">Footer</footer>
    </div>
  );
}
