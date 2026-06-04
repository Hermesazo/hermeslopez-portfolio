"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import Footer from "./Footer";

interface CaseStudyLayoutProps {
  project: Project;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-0">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="text-sm text-[#555] hover:text-white transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm text-[#555] uppercase tracking-wider mb-3"
          >
            {project.subtitle}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          {/* Metadata row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 py-4 border-t border-b border-[#1f1f1f]"
          >
            <div>
              <p className="text-[11px] text-[#444] uppercase tracking-wider mb-1">
                Year
              </p>
              <p className="text-sm text-white">{project.year}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#444] uppercase tracking-wider mb-1">
                Industry
              </p>
              <p className="text-sm text-white">{project.industry}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#444] uppercase tracking-wider mb-1">
                Client
              </p>
              <p className="text-sm text-white">{project.client}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cover image */}
        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden border border-[#1f1f1f]"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        )}

        {/* Challenge */}
        {project.sections.challenge && (
          <Section title="The Challenge">
            <p className="text-[#888] leading-relaxed">
              {project.sections.challenge}
            </p>
          </Section>
        )}

        {/* Hypothesis */}
        {project.sections.hypothesis && (
          <Section title="Design Hypothesis">
            <blockquote className="border-l-2 border-white/20 pl-4">
              <p className="text-[#aaa] leading-relaxed italic">
                &quot;{project.sections.hypothesis}&quot;
              </p>
            </blockquote>
          </Section>
        )}

        {/* Key Decisions */}
        {project.sections.decisions.length > 0 && (
          <Section title="Key Design Decisions">
            <div className="flex flex-col gap-6">
              {project.sections.decisions.map((d, i) => (
                <DecisionItem key={i} index={i + 1} decision={d} />
              ))}
            </div>
          </Section>
        )}

        {/* Results */}
        {project.sections.results && project.sections.results.length > 0 && (
          <Section title="Results">
            <div className="overflow-hidden rounded-xl border border-[#1f1f1f]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1f1f1f] bg-[#111]">
                    <th className="text-left px-4 py-3 text-[#555] font-medium">
                      Area
                    </th>
                    <th className="text-left px-4 py-3 text-[#555] font-medium">
                      Improvement
                    </th>
                    <th className="text-left px-4 py-3 text-[#555] font-medium">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.sections.results.map((r, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#1f1f1f] last:border-0"
                    >
                      <td className="px-4 py-3 text-white">{r.area}</td>
                      <td className="px-4 py-3 text-emerald-400 font-medium">
                        {r.improvement}
                      </td>
                      <td className="px-4 py-3 text-[#888]">{r.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* Project images */}
        {project.images.length > 0 && (
          <Section title="Process & Screens">
            <div className="flex flex-col gap-4">
              {project.images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden border border-[#1f1f1f]"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screen ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* Learnings */}
        {project.sections.learnings && project.sections.learnings.length > 0 && (
          <Section title="Learnings">
            <ul className="flex flex-col gap-3">
              {project.sections.learnings.map((l, i) => (
                <li key={i} className="flex gap-3 text-[#888]">
                  <span className="text-white/20 shrink-0">—</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Links */}
        {project.sections.links && project.sections.links.length > 0 && (
          <Section title="Links">
            <div className="flex flex-wrap gap-3">
              {project.sections.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-[#1f1f1f] text-sm text-[#888] hover:text-white hover:border-white/20 transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </Section>
        )}

        {/* Bottom nav */}
        <div className="mt-20 pt-8 border-t border-[#1f1f1f] flex justify-between items-center mb-0">
          <Link
            href="/"
            className="text-sm text-[#555] hover:text-white transition-colors"
          >
            ← All Projects
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-[#555] hover:text-white transition-colors"
          >
            Next Project →
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <h2 className="text-xs text-[#444] uppercase tracking-widest mb-5">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function DecisionItem({
  index,
  decision,
}: {
  index: number;
  decision: { title: string; content: string };
}) {
  return (
    <div className="flex gap-4">
      <span className="text-[#333] text-sm font-mono shrink-0 mt-0.5">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-white text-sm font-semibold mb-1">
          {decision.title}
        </h3>
        <p className="text-[#666] text-sm leading-relaxed">{decision.content}</p>
      </div>
    </div>
  );
}
