"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[#666] text-base leading-relaxed"
          >
            This is how I design in uncertainty environments, turning shifting
            priorities into clear, scalable solutions that balance user needs,
            business goals, and dev reality.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="text-sm text-[#555] hover:text-white transition-colors border-b border-[#333] hover:border-white pb-px"
          >
            More work available on request
          </a>
        </motion.div>
      </div>
    </section>
  );
}
