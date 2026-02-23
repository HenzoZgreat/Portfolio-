"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        {/* Left: Logo */}
        <Link className="flex items-center space-x-2 pl-4" href="/">
          <span className="font-bold">Henok Eshetu</span>
        </Link>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Resume Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4 ml-auto">
          <Button variant="outline" className="hidden md:inline-flex pr-4">
            Resume
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Mobile Resume Button */}
          <Button variant="outline" className="md:hidden pr-2">
            Resume
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
