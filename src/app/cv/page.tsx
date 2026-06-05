"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const LIME = "#CCFF33";

const experience = [
  {
    company: "Nebutek",
    role: "Senior Product Designer",
    period: "Aug 2024 – Apr 2026",
    location: "Remote · Omaha, USA",
    bullets: [
      "Led end-to-end design of Fleet Defender, AI-assisted fleet security platform supporting 60,000+ trucks",
      "Created Roadpact, AI-assisted HR platform — improved data collection speed ~40%",
      "Translated API specs into developer-ready dashboards, reducing engineering handoff cycles ~70%",
      "Built multi-brand design system with Figma Variable modes, design tokens, Tailwind CSS, WCAG 2.2 AA",
      "Integrated AI tools (LLMs, Figma Make, Claude, Cursor) — cut ideation-to-prototype time ~80%",
    ],
  },
  {
    company: "Universidad Industrial de Santander",
    role: "UX/UI Design Lead",
    period: "Jun 2022 – Jan 2024",
    location: "Colombia",
    bullets: [
      "Led UX for B2B ERP ecosystem serving 2,000+ administrative users",
      "Redesigned B2C mobile app (20k+ users) — 4.6 Play Store rating, ~70% reduction in task completion time",
      "Created design system from scratch with WCAG 2.1 AA/AAA — ~30% team efficiency gain",
      "Mentored junior designers, accelerated team ramp-up ~50%",
    ],
  },
  {
    company: "IncubAPP Venture Capital",
    role: "UX/UI Consultant",
    period: "Jun 2022 – May 2024",
    location: "Colombia · Freelance",
    bullets: [
      "Planned and developed MVPs across fintech, edtech, B2B/B2C SaaS (web & mobile)",
      "Ran generative research, heuristic reviews, card sorting, tree testing — ~25% conversion increase",
    ],
  },
  {
    company: "IncubAPP Venture Capital",
    role: "UX/UI Designer",
    period: "Nov 2020 – Jun 2022",
    location: "Colombia",
    bullets: [
      "Developed MVP products for early-stage startups, full-cycle design to developer handoff",
      "Delivered rapid prototypes using Figma and Framer, iterated on user feedback",
    ],
  },
];

const skills = [
  {
    label: "Core Craft",
    items: [
      "End-to-end product design",
      "UX research",
      "Information architecture",
      "Interaction design",
      "High-fidelity prototyping",
      "Design systems",
      "Design tokens",
      "Design ops",
      "Service design",
      "Systems thinking",
      "A/B testing",
      "JTBD",
    ],
  },
  {
    label: "Accessibility",
    items: [
      "WCAG 2.2 AA/AAA compliance",
      "Inclusive design",
      "Contrast audits",
    ],
  },
  {
    label: "AI Tools",
    items: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "NotebookLM",
      "Figma Make",
      "v0",
      "Lovable",
      "Cursor",
    ],
  },
  {
    label: "Design Tools",
    items: [
      "Figma (Variables, Dev Mode, Auto Layout)",
      "FigJam",
      "Miro",
      "Framer",
      "Storybook",
      "Zeroheight",
    ],
  },
  {
    label: "Research & Analytics",
    items: [
      "Usability testing",
      "Tree testing",
      "Card sorting",
      "Dovetail",
      "PostHog",
      "Amplitude",
      "Maze",
    ],
  },
  {
    label: "Engineering",
    items: [
      "HTML/CSS",
      "Tailwind CSS",
      "React",
      "Flutter",
      "Angular",
      "Kotlin",
      "Swift",
      "Git",
      "Supabase",
      "Cursor",
    ],
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-0 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">

          {/* ─── HEADER ─── */}
          <motion.div {...fadeUp(0)} className="pt-12 pb-16 border-b border-[#1a1a1a]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#555] mb-4">
              Curriculum Vitae
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-3">
              Hermes López Alba
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: LIME }}>
              Senior Product Designer — B2B & B2C SaaS, Data-Driven UX, AI-Augmented Workflows
            </p>

            {/* Pills row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[#888]">
                📍 Bogotá, Colombia
              </span>
              <a
                href="mailto:hermeslopezalba@gmail.com"
                className="text-xs px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[#888] hover:border-[#CCFF33] hover:text-[#CCFF33] transition-colors"
              >
                hermeslopezalba@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/hermeslopezalba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[#888] hover:border-[#CCFF33] hover:text-[#CCFF33] transition-colors"
              >
                linkedin.com/in/hermeslopezalba ↗
              </a>
            </div>

            {/* Download button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#0a0a0a] transition-opacity hover:opacity-90"
              style={{ backgroundColor: LIME }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* ─── PROFILE ─── */}
          <motion.section {...fadeUp(0.1)} className="py-14 border-b border-[#1a1a1a]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#444] mb-6">Profile</h2>
            <p
              className="text-white text-lg leading-relaxed pl-5"
              style={{ borderLeft: `2px solid ${LIME}` }}
            >
              Obsessed with creating products that simplify complex tasks. 6+ years end-to-end
              across B2B and B2C SaaS, from early-stage products built from scratch and launched
              to design systems used by 100 engineers. Run AI-augmented workflows not because
              it&apos;s trendy — to spend more time on parts that still need a human, and
              occasionally write enough code to make a proof of concept without waiting on devs.
            </p>
          </motion.section>

          {/* ─── EXPERIENCE ─── */}
          <motion.section {...fadeUp(0.2)} className="py-14 border-b border-[#1a1a1a]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#444] mb-10">Experience</h2>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: `linear-gradient(to bottom, ${LIME}, transparent)` }}
              />

              <div className="flex flex-col gap-12 pl-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[2.15rem] top-1.5 w-2.5 h-2.5 rounded-full border-2"
                      style={{ borderColor: LIME, backgroundColor: "#0a0a0a" }}
                    />

                    {/* Card */}
                    <div className="rounded-2xl border border-[#1a1a1a] p-6 hover:border-[#2a2a2a] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                        <div>
                          <h3 className="text-white text-xl font-bold">{exp.company}</h3>
                          <p style={{ color: LIME }} className="text-sm font-medium mt-0.5">
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[#888] text-sm">{exp.period}</p>
                          <p className="text-[#555] text-xs mt-0.5">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="flex flex-col gap-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm text-[#888] leading-relaxed">
                            <span style={{ color: LIME }} className="shrink-0 mt-0.5">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ─── SKILLS ─── */}
          <motion.section {...fadeUp(0.3)} className="py-14 border-b border-[#1a1a1a]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#444] mb-10">Skills & Tools</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((group, i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: LIME }}>
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full border border-[#1f1f1f] text-[#aaa] hover:border-[#333] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ─── EDUCATION + LANGUAGES ─── */}
          <motion.section {...fadeUp(0.4)} className="py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Education */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#444] mb-8">Education</h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-white font-semibold">B.Sc. Industrial Design</h3>
                    <p className="text-[#888] text-sm mt-1">Universidad Industrial de Santander</p>
                    <p className="text-[#555] text-xs mt-0.5">2014 – 2022</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Continuous Learning</h3>
                    <p className="text-[#888] text-sm mt-1">Platzi · Product Design & UX/UI Courses</p>
                    <p className="text-[#555] text-xs mt-0.5">2020 – Present</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#444] mb-8">Languages</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { lang: "Spanish", level: "Native" },
                    { lang: "English", level: "C1" },
                    { lang: "Italian", level: "Conversational" },
                    { lang: "Portuguese", level: "Conversational" },
                  ].map(({ lang, level }) => (
                    <div key={lang} className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{lang}</span>
                      <span
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{ color: LIME, borderColor: LIME + "40" }}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.section>

        </div>
        <Footer />
      </main>
    </>
  );
}
