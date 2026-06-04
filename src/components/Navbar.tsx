"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "CV", href: "/cv" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Avatar + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-white/30 transition-all">
            <Image
              src="https://framerusercontent.com/images/6iGNEBE9caxS2L2mhh4PSunegwA.png"
              alt="Hermes López"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            Hermes López
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/hermeslopez1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#CCFF33] text-black font-semibold px-4 py-1.5 rounded-full hover:bg-[#CCFF33]/90 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Available badge */}
        <div className="flex items-center gap-2 bg-[#111] border border-[#1f1f1f] rounded-full px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF33] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF33]" />
          </span>
          <span className="text-xs text-[#888]">Available for work</span>
        </div>
      </div>
    </motion.nav>
  );
}
