"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative md:pb-12">
      <header
        className={cn(
          "bg-gray-400 fixed top-0 z-10 w-full px-4 py-2 transition duration-200",
          isScrolled && "shadow-sm bg-gray-200/50 backdrop-blur-md"
        )}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold">Logo</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <Button
            className="md:hidden bg-gray-100/50 hover:bg-gray-100 shadow-sm rounded-sm"
            onClick={() => setIsMobile((prev) => !prev)}
          >
            <div className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "absolute w-full h-px bg-black transition duration-200",
                  isMobile ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute w-full h-px bg-black transition duration-200",
                  isMobile ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute w-full h-px bg-black transition duration-200",
                  isMobile ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </Button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden px-4 pt-14 transition-all duration-300 bg-green-300 overflow-hidden",
          isMobile ? "h-40 opacity-100" : "h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <Link key={link.path} href={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
