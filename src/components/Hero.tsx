"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const slideRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.85, ease } },
};
const slideLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.85, ease, delay: 0.15 } },
};
const slideUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease, delay: 0.05 } },
};
const scaleIn: Variants = {
  hidden: { scale: 0.88, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease, delay: 0.1 } },
};
const popIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18, delay: 0.85 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      <div className="w-full px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

        {/* ── MOBILE layout ── */}
        <div className="flex flex-col md:hidden">

          {/* HERMES LÓPEZ — right aligned, lime */}
          <div className="overflow-hidden text-right">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="text-2xl font-bold text-[#CCFF33] uppercase tracking-tight leading-none"
            >
              Hermes López
            </motion.p>
          </div>

          {/* PRODUCT — right aligned, huge */}
          <div className="overflow-hidden text-right">
            <motion.h1
              initial="hidden" animate="visible" variants={slideRight}
              style={{ transitionDelay: "0.08s" } as React.CSSProperties}
              className="text-[22vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Product
            </motion.h1>
          </div>

          {/* Photo — centered, wide */}
          <motion.div
            initial="hidden" animate="visible" variants={scaleIn}
            className="relative mx-auto my-3"
            style={{ width: "72vw", maxWidth: "300px", height: "88vw", maxHeight: "370px" }}
          >
            <Image
              src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
              alt="Hermes López"
              fill
              priority
              className="object-cover object-top rounded-2xl"
            />
            {/* Hi badge */}
            <motion.div
              initial="hidden" animate="visible" variants={popIn}
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center z-10 shadow-xl"
            >
              <span className="text-black font-black text-sm">Hi</span>
            </motion.div>
          </motion.div>

          {/* DESIGNER — left aligned, huge */}
          <div className="overflow-hidden text-left">
            <motion.h1
              initial="hidden" animate="visible" variants={slideLeft}
              className="text-[22vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Designer
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-5 text-sm text-[#666] leading-relaxed max-w-[320px]"
          >
            I&apos;m <span className="line-through text-[#444]">passionate</span> obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">

          {/* Name + PRODUCT right side */}
          <div className="text-right overflow-hidden mb-1">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="text-3xl lg:text-4xl font-bold text-[#CCFF33] uppercase tracking-tight"
            >
              Hermes López
            </motion.p>
          </div>

          {/* PRODUCT | photo | DESIGNER row */}
          <div className="flex items-center gap-0">
            {/* PRODUCT — takes remaining left space */}
            <div className="overflow-hidden flex-1 text-right pr-4">
              <motion.h1
                initial="hidden" animate="visible" variants={slideRight}
                className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
              >
                Product
              </motion.h1>
            </div>

            {/* Photo */}
            <motion.div
              initial="hidden" animate="visible" variants={scaleIn}
              className="relative flex-shrink-0"
              style={{ width: "clamp(160px,17vw,280px)", height: "clamp(200px,21vw,340px)" }}
            >
              <Image
                src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
                alt="Hermes López"
                fill
                priority
                className="object-cover object-top rounded-2xl"
              />
              <motion.div
                initial="hidden" animate="visible" variants={popIn}
                className="absolute -bottom-3 -left-5 w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center z-10"
              >
                <span className="text-black font-black text-sm">Hi</span>
              </motion.div>
            </motion.div>

            {/* DESIGNER */}
            <div className="overflow-hidden flex-1 pl-4">
              <motion.h1
                initial="hidden" animate="visible" variants={slideLeft}
                className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
              >
                Designer
              </motion.h1>
            </div>
          </div>

          {/* Tagline desktop */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 text-sm text-[#666] max-w-[220px] leading-relaxed"
          >
            I&apos;m <span className="line-through text-[#444]">passionate</span> obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#CCFF33]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
