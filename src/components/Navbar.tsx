"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
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
      {/* Floating pill navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`
            flex items-center justify-between gap-3
            border border-white/20 rounded-full px-2 py-2
            pointer-events-auto transition-all duration-300
            ${scrolled ? "bg-[#0a0a0a]/85 backdrop-blur-lg" : "bg-[#111]/60 backdrop-blur-sm"}
          `}
          style={{ width: "min(480px, calc(100vw - 32px))" }}
        >
          {/* Logo circle */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="4" y="4" width="6" height="6" rx="1" fill="black"/>
                <rect x="12" y="4" width="6" height="6" rx="1" fill="black"/>
                <rect x="4" y="12" width="6" height="6" rx="1" fill="black"/>
                <rect x="12" y="12" width="6" height="6" rx="1" fill="black"/>
              </svg>
            </div>
          </Link>

          {/* Available for work */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            <span className="text-sm text-white/80 font-medium whitespace-nowrap">Available for work</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF33] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
            </span>
          </div>

          {/* Hamburger / desktop links */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-5 mr-2">
              {links.map(l => (
                <Link key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/hermeslopez1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-[#CCFF33] text-black px-4 py-1.5 rounded-full hover:bg-[#d9ff66] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Hamburger button (mobile) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center md:hidden"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <rect width="18" height="2" rx="1" fill="black"/>
                <rect y="5" width="18" height="2" rx="1" fill="black"/>
                <rect y="10" width="18" height="2" rx="1" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu card */}
            <div
              className="relative w-full rounded-3xl border border-white/15 bg-[#0e0e0e] p-6 pt-5 z-10"
              style={{ maxWidth: "480px" }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-10">
                <div className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="4" y="4" width="6" height="6" rx="1" fill="black"/>
                    <rect x="12" y="4" width="6" height="6" rx="1" fill="black"/>
                    <rect x="4" y="12" width="6" height="6" rx="1" fill="black"/>
                    <rect x="12" y="12" width="6" height="6" rx="1" fill="black"/>
                  </svg>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#CCFF33] flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="black" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-2 mb-8">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
              </nav>

              {/* Contact button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="https://www.linkedin.com/in/hermeslopez1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center bg-[#CCFF33] text-black font-semibold text-lg py-4 rounded-full hover:bg-[#d9ff66] transition-colors"
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
