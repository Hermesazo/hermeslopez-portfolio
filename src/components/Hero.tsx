"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const slideUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.9, duration: 0.5, type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-20">
      <div className="w-full px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

        {/* Name in lime */}
        <div className="overflow-hidden mb-1">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#CCFF33] uppercase tracking-tight leading-none"
          >
            Hermes lópez
          </motion.p>
        </div>

        {/* ── DESKTOP: PRODUCT | PHOTO | DESIGNER ── */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <div className="overflow-hidden flex-1 min-w-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ delay: 0.1 }}
              className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
            >
              Product
            </motion.h1>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative flex-shrink-0 mx-2 lg:mx-6"
            style={{ width: "clamp(140px,16vw,260px)", height: "clamp(180px,20vw,320px)" }}
          >
            <Image
              src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
              alt="Hermes López"
              fill
              priority
              className="object-cover object-top rounded-2xl"
            />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={popIn}
              className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-[#CCFF33] flex items-center justify-center z-20"
            >
              <span className="text-black font-black text-xs">Hi</span>
            </motion.div>
          </motion.div>

          <div className="overflow-hidden flex-1 min-w-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ delay: 0.1 }}
              className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
            >
              designer
            </motion.h1>
          </div>
        </div>

        {/* ── MOBILE: stacked ── */}
        <div className="flex flex-col md:hidden">
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ delay: 0.1 }}
              className="text-[20vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Product
            </motion.h1>
          </div>

          <div className="flex items-end gap-4 my-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative flex-shrink-0"
              style={{ width: "40vw", height: "50vw", maxWidth: "160px", maxHeight: "200px" }}
            >
              <Image
                src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
                alt="Hermes López"
                fill
                priority
                className="object-cover object-top rounded-xl"
              />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={popIn}
                className="absolute -bottom-2 -left-2 w-9 h-9 rounded-full bg-[#CCFF33] flex items-center justify-center z-20"
              >
                <span className="text-black font-black text-[10px]">Hi</span>
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[13px] text-[#666] leading-relaxed flex-1 pb-2"
            >
              I&apos;m passionate obsessed with creating products that simplify complex tasks.
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ delay: 0.15 }}
              className="text-[20vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              designer
            </motion.h1>
          </div>
        </div>

        {/* Tagline desktop */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hidden md:block mt-6 text-sm text-[#666] max-w-[200px] leading-relaxed"
        >
          I&apos;m passionate obsessed with creating products that simplify complex tasks.
        </motion.p>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#CCFF33]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
