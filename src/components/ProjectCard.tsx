"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isExternal = Boolean(project.externalUrl);
  const href = isExternal ? project.externalUrl! : `/projects/${project.slug}`;

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: (index % 2) * 0.1,
      }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#111]"
    >
      {/* Full-bleed image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
        {project.coverImage ? (
          <>
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark overlay on hover — reveals title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-[#CCFF33] uppercase tracking-wider mb-1">
                {project.client} · {project.year}
              </p>
              <h3 className="text-white font-semibold text-lg leading-snug mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-black bg-[#CCFF33] rounded-full px-2.5 py-0.5 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-white font-medium">
                {isExternal ? "View on Behance" : "View Case Study"}
                <span>→</span>
              </span>
            </div>
          </>
        ) : (
          /* Placeholder for projects without cover */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
            <p className="text-xs text-[#CCFF33] uppercase tracking-wider">
              {project.client} · {project.year}
            </p>
            <h3 className="text-white font-semibold text-center leading-snug">
              {project.title}
            </h3>
            <span className="text-[#333] text-xs">Coming soon</span>
          </div>
        )}
      </div>

      {/* Persistent bottom info strip (visible without hover) */}
      {project.coverImage && (
        <div className="px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#555] mb-0.5">
              {project.client} · {project.year}
            </p>
            <h3 className="text-sm font-semibold text-white leading-snug">
              {project.title}
            </h3>
          </div>
          {isExternal && (
            <span className="text-[10px] text-[#555] border border-[#1f1f1f] rounded px-1.5 py-0.5 shrink-0 ml-3">
              Behance
            </span>
          )}
        </div>
      )}
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return <Link href={href}>{CardContent}</Link>;
}
