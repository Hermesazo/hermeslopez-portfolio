"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Hi label above image */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-4"
        >
          <span className="text-lg text-[#888] font-light tracking-widest uppercase">
            Hi
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-white/10">
            <Image
              src="https://framerusercontent.com/images/QfImz8pV7G88zFaARXo4w2TU528.png"
              alt="Hermes López"
              width={144}
              height={144}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Main heading — stacked */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white"
          >
            Hermes
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white/20">
              Product
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white/20">
              designer
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-base md:text-lg text-[#888] max-w-md leading-relaxed"
        >
          I&apos;m passionate obsessed with creating products that simplify
          complex tasks.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/hermeslopez/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-[#1f1f1f] text-white text-sm font-medium hover:border-white/30 transition-colors"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#444] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent" />
      </motion.div>
    </section>
  );
}
