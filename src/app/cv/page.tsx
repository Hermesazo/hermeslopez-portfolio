import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CV — Hermes López",
  description: "Product Designer curriculum vitae",
};

const experience = [
  {
    role: "Senior Product Designer",
    company: "Fleet Defender",
    period: "2025 — Present",
    description:
      "Leading UX for a cybersecurity telematics platform. Designed multi-layer alert system reducing incident resolution time by 60%.",
  },
  {
    role: "Product Designer",
    company: "Freelance",
    period: "2023 — Present",
    description:
      "UX/UI design for logistics, enterprise, and healthtech clients. Projects include TMS platforms, ERPs, POS systems, and mobile apps.",
  },
  {
    role: "UX/UI Designer",
    company: "Various Clients",
    period: "2021 — 2023",
    description:
      "Designed interfaces for AR surgical guidance, therapeutic videogames, campus applications, and MercadoLibre ecosystem tools.",
  },
];

const skills = [
  "Product Strategy",
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "Figma",
  "Framer",
  "Data Visualization",
  "B2B SaaS",
  "Mobile Design",
  "Information Architecture",
  "Usability Testing",
];

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 pt-8">
            <p className="text-sm text-[#555] uppercase tracking-wider mb-3">
              Curriculum Vitae
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hermes López
            </h1>
            <p className="text-[#888] text-lg mb-6">Product Designer</p>
            <p className="text-[#666] leading-relaxed max-w-xl">
              I&apos;m passionate about creating products that simplify complex
              tasks — from enterprise logistics platforms to consumer mobile apps.
              I operate at the intersection of user needs, business goals, and
              engineering reality.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/hermeslopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] hover:text-white transition-colors border-b border-[#333] hover:border-white pb-px"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.behance.net/hermeslopez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] hover:text-white transition-colors border-b border-[#333] hover:border-white pb-px"
              >
                Behance ↗
              </a>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-14">
            <h2 className="text-xs text-[#444] uppercase tracking-widest mb-8">
              Experience
            </h2>
            <div className="flex flex-col gap-10">
              {experience.map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8">
                  <div className="md:w-40 shrink-0">
                    <p className="text-xs text-[#444] mt-0.5">{exp.period}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#555] mb-2">{exp.company}</p>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-20">
            <h2 className="text-xs text-[#444] uppercase tracking-widest mb-8">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-[#666] border border-[#1f1f1f] rounded-full px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
