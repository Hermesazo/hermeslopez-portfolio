"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const slideRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease } },
};
const slideLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease, delay: 0.12 } },
};
const flip3D: Variants = {
  hidden: { rotateY: 90, opacity: 0, scale: 0.95 },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease, delay: 0.08 },
  },
};
const popIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 16, delay: 0.9 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-24 pb-16">
      <div className="w-full px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

        {/* ── MOBILE ── */}
        <div className="flex flex-col md:hidden">
          {/* HERMES LÓPEZ — right */}
          <div className="overflow-hidden text-right">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="text-[6.5vw] font-bold text-[#CCFF33] uppercase tracking-tight leading-tight"
            >
              Hermes López
            </motion.p>
          </div>

          {/* PRODUCT — right */}
          <div className="overflow-hidden text-right -mt-1">
            <motion.h1
              initial="hidden" animate="visible" variants={slideRight}
              className="text-[22vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Product
            </motion.h1>
          </div>

          {/* Photo with 3D flip */}
          <div className="flip-perspective mx-auto my-3" style={{ width: "72vw", maxWidth: "290px" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={flip3D}
              className="relative"
              style={{
                width: "100%",
                paddingBottom: "124%",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
                  alt="Hermes López"
                  fill
                  priority
                  className="object-cover object-top rounded-2xl"
                />
                {/* Hi badge with wave */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={popIn}
                  className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center z-10 shadow-xl cursor-pointer"
                >
                  <span className="wave-hand text-xl select-none">👋</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* DESIGNER — left */}
          <div className="overflow-hidden text-left mt-5">
            <motion.h1
              initial="hidden" animate="visible" variants={slideLeft}
              className="text-[22vw] font-black text-white uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Designer
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-5 text-sm text-[#666] leading-relaxed"
          >
            I&apos;m <span className="line-through text-[#444]">passionate</span> obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block">
          {/* Name — right */}
          <div className="text-right overflow-hidden mb-0">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="text-3xl lg:text-4xl font-bold text-[#CCFF33] uppercase tracking-tight leading-none"
            >
              Hermes López
            </motion.p>
          </div>

          {/* PRODUCT | photo | DESIGNER */}
          <div className="flex items-center">
            <div className="overflow-hidden flex-1 text-right pr-3">
              <motion.h1
                initial="hidden" animate="visible" variants={slideRight}
                className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
              >
                Product
              </motion.h1>
            </div>

            {/* Photo — 3D flip */}
            <div className="flip-perspective flex-shrink-0" style={{ width: "clamp(150px,16vw,270px)" }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={flip3D}
                className="relative"
                style={{
                  paddingBottom: "124%",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0">
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
                    className="absolute -bottom-3 -left-5 w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center z-10 cursor-pointer"
                  >
                    <span className="wave-hand text-xl select-none">👋</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden flex-1 pl-3">
              <motion.h1
                initial="hidden" animate="visible" variants={slideLeft}
                className="text-[11vw] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
              >
                Designer
              </motion.h1>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-5 text-sm text-[#555] max-w-[220px] leading-relaxed"
          >
            I&apos;m <span className="line-through text-[#3a3a3a]">passionate</span> obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#CCFF33]/25 to-transparent" />
      </motion.div>
    </section>
  );
}
