"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function HLogo({ size = 22 }: { size?: number }) {
  return (
    <Image
      src="/favicon.svg"
      alt="H"
      width={size}
      height={size}
      className="object-contain"
      style={{ filter: "brightness(0)" }}
    />
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "CV", href: "/cv" },
  ];

  return (
    <>
      {/* Floating pill — auto width, centered */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div
          className={`
            inline-flex items-center gap-2 px-2 py-2
            border border-white/15 rounded-full
            pointer-events-auto transition-colors duration-300
            ${scrolled ? "bg-[#0f0f0f]/90 backdrop-blur-xl" : "bg-[#0f0f0f]/50 backdrop-blur-md"}
          `}
        >
          {/* Logo circle */}
          <Link href="/" className="flex-shrink-0 w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center">
            <HLogo size={22} />
          </Link>

          {/* Available for work text */}
          <div className="flex items-center gap-2 px-2">
            <span className="text-sm text-white/75 font-medium whitespace-nowrap">Available for work</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-4 pl-2 pr-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/hermeslopez1/"
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold bg-[#CCFF33] text-black px-4 py-1.5 rounded-full hover:bg-[#d9ff55] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect width="16" height="2" rx="1" fill="black"/>
              <rect y="5" width="16" height="2" rx="1" fill="black"/>
              <rect y="10" width="16" height="2" rx="1" fill="black"/>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-4 left-4 right-4 z-[100] rounded-3xl border border-white/12 bg-[#0d0d0d] p-5 pt-4"
              style={{ maxWidth: "440px", margin: "0 auto" }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center">
                  <HLogo size={22} />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1L11 11M11 1L1 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1 mb-7">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-center text-3xl font-light text-white/80 hover:text-white py-2 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.35 }}
                href="https://www.linkedin.com/in/hermeslopez1/"
                target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#CCFF33] text-black font-bold text-lg py-4 rounded-full hover:bg-[#d9ff55] transition-colors"
              >
                Contact
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
