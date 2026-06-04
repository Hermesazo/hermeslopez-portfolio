"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 h-[68px] flex items-center justify-between">

        {/* Avatar */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/6iGNEBE9caxS2L2mhh4PSunegwA.png"
              alt="Hermes López"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors hidden sm:block">
            Hermes López
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-5 md:gap-7">
          {[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "CV", href: "/cv" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#777] hover:text-white transition-colors hidden sm:block"
            >
              {link.label}
            </Link>
          ))}

          {/* Contact — lime button */}
          <a
            href="https://www.linkedin.com/in/hermeslopez1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-[#CCFF33] text-black px-4 py-1.5 rounded-full hover:bg-[#d9ff66] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
