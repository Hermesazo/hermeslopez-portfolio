"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const slideRight: Variants = {
  hidden: { x: 44, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.78, ease } },
};
const slideLeft: Variants = {
  hidden: { x: -44, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.78, ease, delay: 0.1 } },
};
const flip3D: Variants = {
  hidden: { rotateY: 88, opacity: 0, scale: 0.96 },
  visible: {
    rotateY: 0, opacity: 1, scale: 1,
    transition: { duration: 0.72, ease, delay: 0.06 },
  },
};
const popIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1, opacity: 1,
    transition: { type: "spring", stiffness: 290, damping: 17, delay: 0.88 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-20 pb-10">
      {/* Consistent 20px padding matching Framer */}
      <div className="w-full" style={{ paddingLeft: "20px", paddingRight: "20px" }}>

        {/* ── MOBILE ── */}
        <div className="flex flex-col md:hidden">

          {/* HERMES LÓPEZ — right, small, lime */}
          <div className="overflow-hidden text-right">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="font-bold text-[#CCFF33] uppercase tracking-tight leading-tight"
              style={{ fontSize: "clamp(16px, 5.5vw, 22px)" }}
            >
              Hermes López
            </motion.p>
          </div>

          {/* PRODUCT — right, massive */}
          <div className="overflow-hidden text-right" style={{ marginTop: "-2px" }}>
            <motion.h1
              initial="hidden" animate="visible" variants={slideRight}
              className="font-black text-white uppercase leading-[0.86] tracking-[-0.04em]"
              style={{ fontSize: "clamp(60px, 18vw, 80px)" }}
            >
              Product
            </motion.h1>
          </div>

          {/* Photo — 70% screen width, centered, 3D flip */}
          <div
            className="flip-perspective mx-auto"
            style={{ width: "70vw", maxWidth: "290px", marginTop: "10px", marginBottom: "8px" }}
          >
            <motion.div
              initial="hidden" animate="visible" variants={flip3D}
              className="relative"
              style={{ paddingBottom: "128%", transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0">
                <Image
                  src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
                  alt="Hermes López"
                  fill priority
                  className="object-cover object-top rounded-2xl"
                />
                {/* Wave badge */}
                <motion.div
                  initial="hidden" animate="visible" variants={popIn}
                  className="absolute z-10"
                  style={{ bottom: "-14px", left: "-14px" }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#CCFF33] flex items-center justify-center shadow-lg">
                    <span className="wave-hand text-lg select-none">👋</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* DESIGNER — left, massive */}
          <div className="overflow-hidden text-left" style={{ marginTop: "8px" }}>
            <motion.h1
              initial="hidden" animate="visible" variants={slideLeft}
              className="font-black text-white uppercase leading-[0.86] tracking-[-0.04em]"
              style={{ fontSize: "clamp(60px, 18vw, 80px)" }}
            >
              Designer
            </motion.h1>
          </div>

          {/* Tagline — left */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.55 }}
            className="text-[#666] leading-relaxed"
            style={{ marginTop: "12px", fontSize: "14px", maxWidth: "340px" }}
          >
            I&apos;m <span className="line-through text-[#444]">passionate</span>{" "}
            obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block max-w-[1300px] mx-auto">

          {/* HERMES LÓPEZ — right */}
          <div className="text-right overflow-hidden">
            <motion.p
              initial="hidden" animate="visible" variants={slideRight}
              className="font-bold text-[#CCFF33] uppercase tracking-tight leading-none"
              style={{ fontSize: "clamp(20px, 2.4vw, 36px)" }}
            >
              Hermes López
            </motion.p>
          </div>

          {/* Main row */}
          <div className="flex items-center gap-0">
            {/* PRODUCT — right side of left flex */}
            <div className="overflow-hidden flex-1 text-right" style={{ paddingRight: "16px" }}>
              <motion.h1
                initial="hidden" animate="visible" variants={slideRight}
                className="font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
                style={{ fontSize: "clamp(80px, 11vw, 160px)" }}
              >
                Product
              </motion.h1>
            </div>

            {/* Photo — 3D flip */}
            <div
              className="flip-perspective flex-shrink-0"
              style={{ width: "clamp(150px, 17vw, 270px)" }}
            >
              <motion.div
                initial="hidden" animate="visible" variants={flip3D}
                className="relative"
                style={{ paddingBottom: "128%", transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
                    alt="Hermes López"
                    fill priority
                    className="object-cover object-top rounded-2xl"
                  />
                  <motion.div
                    initial="hidden" animate="visible" variants={popIn}
                    className="absolute z-10"
                    style={{ bottom: "-12px", left: "-18px" }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center">
                      <span className="wave-hand text-xl select-none">👋</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* DESIGNER — left side of right flex */}
            <div className="overflow-hidden flex-1 text-left" style={{ paddingLeft: "16px" }}>
              <motion.h1
                initial="hidden" animate="visible" variants={slideLeft}
                className="font-black text-white uppercase leading-[0.88] tracking-[-0.04em]"
                style={{ fontSize: "clamp(80px, 11vw, 160px)" }}
              >
                Designer
              </motion.h1>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.55 }}
            className="text-[#555] leading-relaxed"
            style={{ marginTop: "16px", fontSize: "14px", maxWidth: "220px" }}
          >
            I&apos;m <span className="line-through text-[#3a3a3a]">passionate</span>{" "}
            obsessed with creating products that simplify complex tasks.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-[#CCFF33]/20 to-transparent" />
      </motion.div>
    </section>
  );
}
