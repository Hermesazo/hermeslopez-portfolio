export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  industry: string;
  client: string;
  coverImage: string;
  images: string[];
  tags: string[];
  externalUrl?: string;
  sections: {
    challenge?: string;
    hypothesis?: string;
    decisions: { title: string; content: string }[];
    results?: { area: string; improvement: string; outcome: string }[];
    tradeoffs?: { title: string; content: string }[];
    learnings?: string[];
    links?: { label: string; url: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "fleet-defender",
    title: "Multi-Layer Cybersecurity Alert System",
    subtitle: "Fleet Defender",
    description:
      "Transforming fragmented telematics signals into a structured operational platform that helps fleet managers detect, investigate, and resolve security incidents faster.",
    year: "Since 2025",
    industry: "Cybersecurity Logistics - B2B",
    client: "Fleet Defender",
    coverImage:
      "https://framerusercontent.com/images/3b06ohfGOrBjjsKS0bjYNniloeo.png",
    images: [
      "https://framerusercontent.com/images/ZnQmOGKgoxulVbq1JTkAah3SE.png",
      "https://framerusercontent.com/images/YtEhSL6ReLxh7G04NQJiIrOjl88.png",
      "https://framerusercontent.com/images/WV8RhqpZHTj2zMwWTxAftlkBZQ.png",
    ],
    tags: ["UX Design", "B2B", "Cybersecurity", "Data Visualization"],
    sections: {
      challenge:
        "Fleet telematics platforms generate massive volumes of operational signals—from GPS telemetry to device connectivity events—yet most logistics software still relies heavily on historical reports rather than real-time decision systems. Fleet Defender needed to transform fragmented telematics signals into a system that could help operators detect incidents quickly, investigate their causes, and resolve them through structured workflows.",
      hypothesis:
        "If telematics signals could be structured into a layered operational interface—progressively revealing context and resolution tools—fleet managers could move from detection to incident resolution significantly faster.",
      decisions: [
        {
          title: "Multi-Layer Progressive Disclosure",
          content:
            "Designed a four-layer interaction model: Map → Hover Card → Side Drawer → Incident Response. Each layer reveals more context only when needed, reducing cognitive load on operators monitoring dozens of vehicles simultaneously.",
        },
        {
          title: "Side Drawer Investigation Pattern",
          content:
            "Alert details open in a side drawer rather than navigating to a new page. This preserves map context during investigation. The pattern became a system-wide standard across the entire platform.",
        },
        {
          title: "Integrated Incident Response Workflow",
          content:
            "Built a structured resolution flow inside the drawer: device verification, signal analysis, investigation notes, escalation tiers, and resolution reports. Operators no longer need to switch between 3+ tools to close an incident.",
        },
        {
          title: "Operational Pattern Detection Dashboard",
          content:
            "Designed a command dashboard showing alert severity distribution, time-to-resolution metrics, connection anomaly trends, and geographic heatmaps. Enables supervisors to spot systemic issues before they become incidents.",
        },
      ],
      results: [
        {
          area: "Tool switching",
          improvement: "3 tools → 1",
          outcome: "All investigation steps in single interface",
        },
        {
          area: "Investigation time",
          improvement: "8 min → 2 min",
          outcome: "75% faster incident investigation",
        },
        {
          area: "Resolution time",
          improvement: "20 min → 8 min",
          outcome: "60% faster incident resolution",
        },
      ],
      learnings: [
        "Operational software should prioritize decision speed over visual simplicity.",
        "Progressive disclosure is critical for high-density data systems.",
        "Alerts alone are not valuable unless they connect to a structured response workflow.",
      ],
      links: [
        { label: "fleetdefender.com", url: "https://fleetdefender.com" },
        {
          label: "Request a demo",
          url: "https://fleetdefender.com/demo-form/",
        },
      ],
    },
  },
  {
    slug: "roadpact",
    title: "Fleet Management Platform",
    subtitle: "RoadPact",
    description:
      "End-to-end fleet management SaaS redesign focused on reducing dispatcher cognitive load and improving driver communication workflows.",
    year: "2024",
    industry: "Logistics - B2B",
    client: "RoadPact",
    coverImage: "",
    images: [],
    tags: ["UX Design", "SaaS", "Logistics", "B2B"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "now-task-manager",
    title: "Task Manager App",
    subtitle: "Now",
    description:
      "Minimalist task manager designed around focus and flow state, reducing friction between intention and action.",
    year: "2024",
    industry: "Productivity",
    client: "Side Project",
    coverImage: "",
    images: [],
    tags: ["Product Design", "Mobile", "Productivity"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "campus-app",
    title: "University Campus App",
    subtitle: "Campus",
    description:
      "Unified campus experience app consolidating schedules, facilities, events, and student services into a single mobile interface.",
    year: "2023",
    industry: "EdTech",
    client: "Universidad",
    coverImage: "",
    images: [],
    tags: ["UX Design", "Mobile", "EdTech"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "epr-design-system",
    title: "Design System",
    subtitle: "EPR",
    description:
      "Component library and design system for enterprise resource planning platform, enabling consistent UI across 12+ modules.",
    year: "2023",
    industry: "Enterprise Software",
    client: "EPR",
    coverImage: "",
    images: [],
    tags: ["Design Systems", "Enterprise", "UI Components"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "ai-therapist",
    title: "AI Mental Health Companion",
    subtitle: "AI Therapist",
    description:
      "Conversational AI companion for mental health support, designed with safety, trust, and emotional accessibility as core principles.",
    year: "2024",
    industry: "HealthTech",
    client: "Research Project",
    coverImage: "",
    images: [],
    tags: ["AI/UX", "HealthTech", "Conversational UI"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "tms-saas",
    title: "Transportation Management System",
    subtitle: "TMS SaaS",
    description:
      "Ground-up redesign of a transportation management platform serving mid-size carriers across North America.",
    year: "2024",
    industry: "Logistics - SaaS",
    client: "TMS Client",
    coverImage: "",
    images: [],
    tags: ["UX Design", "SaaS", "Logistics", "Enterprise"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "custom-erp",
    title: "Custom ERP Platform",
    subtitle: "Custom ERP",
    description:
      "Bespoke ERP design for manufacturing company, replacing legacy system with modern interface that reduced training time by 40%.",
    year: "2023",
    industry: "Manufacturing",
    client: "Enterprise Client",
    coverImage: "",
    images: [],
    tags: ["Enterprise UX", "ERP", "Manufacturing"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "meli-pos",
    title: "Point of Sale System",
    subtitle: "MeLi POS",
    description:
      "POS system redesign for MercadoLibre ecosystem, optimizing checkout flows for high-volume retail environments.",
    year: "2023",
    industry: "Retail Tech",
    client: "MercadoLibre",
    coverImage: "",
    images: [],
    tags: ["UX Design", "POS", "Retail", "FinTech"],
    sections: {
      challenge: "Coming soon.",
      decisions: [],
    },
  },
  {
    slug: "surgical-ar",
    title: "Surgical Procedures AR",
    subtitle: "Surgical AR",
    description:
      "Augmented reality UX/UI design for surgical procedure guidance system.",
    year: "2022",
    industry: "MedTech",
    client: "Research",
    coverImage: "",
    images: [],
    tags: ["AR/VR", "MedTech", "UX Design"],
    externalUrl:
      "https://www.behance.net/gallery/144638479/Surgical-Procedures-Augmented-Reality-UXUI-Design",
    sections: {
      decisions: [],
    },
  },
  {
    slug: "therapeutic-videogame",
    title: "Therapeutic Videogame",
    subtitle: "Therapeutic Game",
    description: "UX/UI design for a therapeutic videogame experience.",
    year: "2022",
    industry: "HealthTech / Gaming",
    client: "Research",
    coverImage: "",
    images: [],
    tags: ["Game UX", "HealthTech", "UX Design"],
    externalUrl:
      "https://www.behance.net/gallery/144542803/UXUI-Design-Therapeutic-videogame",
    sections: {
      decisions: [],
    },
  },
];

export const featuredProjects = projects.filter((p) =>
  [
    "fleet-defender",
    "roadpact",
    "now-task-manager",
    "campus-app",
    "epr-design-system",
    "ai-therapist",
  ].includes(p.slug)
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
