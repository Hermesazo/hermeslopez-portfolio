"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-16 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Huge heading — matches Framer */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] md:text-[9vw] font-black text-white uppercase leading-none tracking-[-0.03em] text-center"
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#666] text-base leading-relaxed max-w-lg mb-14 text-center mx-auto"
        >
          This is how I design in uncertainty environments, turning shifting
          priorities into clear, scalable solutions that balance user needs,
          business goals, and dev reality.
        </motion.p>

        {/* Single column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

