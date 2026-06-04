import { notFound, redirect } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Hermes López`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects
    .filter((p) => !p.externalUrl)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  if (project.externalUrl) {
    redirect(project.externalUrl);
  }

  return (
    <>
      <Navbar />
      <CaseStudyLayout project={project} />
    </>
  );
}
