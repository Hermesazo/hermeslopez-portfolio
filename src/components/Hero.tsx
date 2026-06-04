"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center px-6 pt-20">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Name in accent color */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#CCFF33] uppercase tracking-tight mb-2"
        >
          Hermes lópez
        </motion.p>

        {/* Main typographic display row */}
        <div className="relative flex items-center">
          {/* PRODUCT */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] font-black text-white uppercase leading-none tracking-tighter"
          >
            Product
          </motion.h1>

          {/* Portrait photo — positioned in center overlapping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0 mx-4 md:mx-8 z-10"
            style={{
              width: "clamp(160px, 18vw, 280px)",
              height: "clamp(200px, 22vw, 340px)",
            }}
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-[#CCFF33] flex items-center justify-center z-20"
            >
              <span className="text-black font-bold text-sm">Hi</span>
            </motion.div>
          </motion.div>

          {/* DESIGNER */}
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] font-black text-white uppercase leading-none tracking-tighter"
          >
            designer
          </motion.h1>

          {/* Tagline — floating bottom-right */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden lg:block absolute right-0 bottom-0 text-sm text-[#888] max-w-[180px] leading-relaxed"
          >
            I&apos;m passionate obsessed with creating products that simplify
            complex tasks.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
