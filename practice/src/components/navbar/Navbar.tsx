"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Login", path: "/login" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative pb-12">
      <header
        className={cn(
          "fixed top-0 z-50 w-full px-4 py-3 transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-xl font-bold text-gray-900">Logo</div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.path ? "text-primary" : "text-gray-600"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative h-5 w-5 p-4 flex flex-col justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute  h-0.5 w-5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute  h-0.5 w-5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute  h-0.5 w-5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </Button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={cn(
            "fixed left-0 top-0 z-50 h-screen w-4/5 max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-start border-b px-6">
            <span className="text-lg font-semibold">Menu</span>
          </div>
          <nav className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
