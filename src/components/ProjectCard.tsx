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
  const href = isExternal
    ? project.externalUrl!
    : `/projects/${project.slug}`;

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.1,
      }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#111] hover:border-white/10 transition-colors cursor-pointer"
    >
      {/* Cover image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d0d]">
        {project.coverImage ? (
          <>
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <span className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
                {isExternal ? "View on Behance →" : "View Case Study →"}
              </span>
            </motion.div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#333] text-sm">Coming soon</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-[#555] mb-1 uppercase tracking-wider">
              {project.client} · {project.year}
            </p>
            <h3 className="text-base font-semibold text-white leading-snug">
              {project.title}
            </h3>
          </div>
          {isExternal && (
            <span className="text-[10px] text-[#555] border border-[#1f1f1f] rounded px-1.5 py-0.5 ml-2 shrink-0">
              Behance
            </span>
          )}
        </div>

        <p className="text-sm text-[#666] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-[#555] bg-[#0a0a0a] border border-[#1f1f1f] rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
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
