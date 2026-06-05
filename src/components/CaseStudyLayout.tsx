"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Navbar from "./Navbar";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

export default function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="max-w-[780px] mx-auto px-5 md:px-8 pt-32 pb-24">

        {/* Back */}
        <motion.div {...fadeUp(0)}>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[#555] hover:text-[#CCFF33] transition-colors text-sm mb-10 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
          {project.title}
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="text-[#888] text-lg leading-relaxed mb-10">
          {project.description}
        </motion.p>

        {/* Metadata */}
        <motion.div {...fadeUp(0.12)} className="flex flex-wrap gap-x-10 gap-y-4 mb-14 pb-10 border-b border-[#1a1a1a]">
          {[
            { label: "Year", value: project.year },
            { label: "Industry", value: project.industry },
            { label: "Client", value: project.client },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[11px] text-[#555] uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-medium text-white">{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Cover image */}
        {project.coverImage && (
          <motion.div {...fadeUp(0.15)} className="rounded-2xl overflow-hidden mb-14 aspect-video w-full relative">
            <Image src={project.coverImage} alt={project.title} fill className="object-cover" sizes="780px" />
          </motion.div>
        )}

        {/* Strategic Challenge */}
        {project.sections.challenge && (
          <motion.section {...fadeUp(0.18)} className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#CCFF33] mb-4 font-semibold">Strategic Challenge</h2>
            <p className="text-[#aaa] leading-relaxed">{project.sections.challenge}</p>
            {project.sections.hypothesis && (
              <blockquote className="mt-6 border-l-2 border-[#CCFF33] pl-5 text-[#888] italic leading-relaxed">
                <strong className="text-white not-italic">Design hypothesis: </strong>
                {project.sections.hypothesis}
              </blockquote>
            )}
          </motion.section>
        )}

        {/* First batch of images */}
        {project.images.slice(0, 2).map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden mb-6 aspect-video w-full relative"
          >
            <Image src={img} alt={`${project.title} ${i + 2}`} fill className="object-cover" sizes="780px" />
          </motion.div>
        ))}

        {/* Critical Design Decisions */}
        {project.sections.decisions.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-xs uppercase tracking-widest text-[#CCFF33] mb-8 font-semibold">Critical Design Decisions</h2>
            <div className="flex flex-col gap-10">
              {project.sections.decisions.map((d, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#CCFF33]/40 flex items-center justify-center text-[#CCFF33] text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{d.title}</h3>
                    <p className="text-[#888] leading-relaxed">{d.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Remaining images */}
        {project.images.slice(2).map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden mb-6 aspect-video w-full relative"
          >
            <Image src={img} alt={`${project.title} ${i + 3}`} fill className="object-cover" sizes="780px" />
          </motion.div>
        ))}

        {/* Results */}
        {project.sections.results && project.sections.results.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-xs uppercase tracking-widest text-[#CCFF33] mb-6 font-semibold">Measurable Results</h2>
            <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    {["Area", "Improvement", "Outcome"].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-[#555] text-xs uppercase tracking-wider font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.sections.results.map((r, i) => (
                    <tr key={i} className={i < project.sections.results!.length - 1 ? "border-b border-[#111]" : ""}>
                      <td className="px-5 py-4 text-[#888]">{r.area}</td>
                      <td className="px-5 py-4 text-[#CCFF33] font-semibold">{r.improvement}</td>
                      <td className="px-5 py-4 text-white">{r.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        )}

        {/* Learnings */}
        {project.sections.learnings && project.sections.learnings.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-xs uppercase tracking-widest text-[#CCFF33] mb-6 font-semibold">Learnings</h2>
            <ul className="flex flex-col gap-4">
              {project.sections.learnings.map((l, i) => (
                <li key={i} className="flex gap-3 text-[#888] leading-relaxed">
                  <span className="text-[#CCFF33] mt-1 flex-shrink-0">→</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Links */}
        {project.sections.links && project.sections.links.length > 0 && (
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
            <h2 className="text-xs uppercase tracking-widest text-[#CCFF33] mb-5 font-semibold">Explore the Project</h2>
            <div className="flex flex-wrap gap-3">
              {project.sections.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a2a2a] text-sm text-white hover:border-[#CCFF33] hover:text-[#CCFF33] transition-colors">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footer */}
        <div className="border-t border-[#1a1a1a] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#444]">© Copyright 2025. All Rights Reserved by Hermes Lopez</p>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/hermeslopez1/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555] hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/hermeslpez" target="_blank" rel="noopener noreferrer" className="text-xs text-[#555] hover:text-white transition-colors">Behance</a>
          </div>
        </div>
      </main>
    </div>
  );
}
