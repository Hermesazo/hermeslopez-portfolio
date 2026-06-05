export interface Project {
  slug: string; title: string; subtitle: string; description: string;
  year: string; industry: string; client: string; coverImage: string;
  images: string[]; tags: string[]; externalUrl?: string;
  sections: {
    challenge?: string; hypothesis?: string;
    decisions: { title: string; content: string }[];
    results?: { area: string; improvement: string; outcome: string }[];
    learnings?: string[];
    links?: { label: string; url: string }[];
  };
}
export const projects: Project[] = [
  {
    slug:"fleet-defender",title:"Multi-Layer Cybersecurity Alert System",subtitle:"Fleet Defender",
    description:"Transforming fragmented telematics signals into a structured operational platform.",
    year:"Since 2025",industry:"Cybersecurity Logistics - B2B",client:"Fleet Defender",
    coverImage:"https://framerusercontent.com/images/3b06ohfGOrBjjsKS0bjYNniloeo.png",
    images:["https://framerusercontent.com/images/ZnQmOGKgoxulVbq1JTkAah3SE.png","https://framerusercontent.com/images/YtEhSL6ReLxh7G04NQJiIrOjl88.png","https://framerusercontent.com/images/WV8RhqpZHTj2zMwWTxAftlkBZQ.png"],
    tags:["UX Design","B2B","Cybersecurity","Data Visualization"],
    sections:{
      challenge:"Fleet telematics platforms generate massive operational signals yet most logistics software relies on historical reports. Fleet Defender needed a system to detect incidents quickly and resolve them through structured workflows.",
      hypothesis:"If telematics signals could be structured into a layered operational interface, fleet managers could move from detection to resolution significantly faster.",
      decisions:[
        {title:"Multi-Layer Progressive Disclosure",content:"Four-layer model: Map → Hover Card → Side Drawer → Incident Response. Each layer reveals context only when needed, reducing cognitive load."},
        {title:"Side Drawer Investigation Pattern",content:"Alert details open in a side drawer preserving map context during investigation. Became a system-wide standard across the platform."},
        {title:"Integrated Incident Response Workflow",content:"Structured resolution flow: device verification, signal analysis, investigation notes, escalation tiers, resolution reports. No more switching between 3+ tools."},
        {title:"Operational Pattern Detection Dashboard",content:"Command dashboard: alert severity distribution, time-to-resolution metrics, connection anomaly trends, geographic heatmaps."},
      ],
      results:[
        {area:"Tool switching",improvement:"3 tools → 1",outcome:"All investigation steps in single interface"},
        {area:"Investigation time",improvement:"8 min → 2 min",outcome:"75% faster incident investigation"},
        {area:"Resolution time",improvement:"20 min → 8 min",outcome:"60% faster incident resolution"},
      ],
      learnings:["Operational software should prioritize decision speed over visual simplicity.","Progressive disclosure is critical for high-density data systems."],
      links:[{label:"fleetdefender.com",url:"https://fleetdefender.com"},{label:"Request a Demo",url:"https://fleetdefender.com/demo-form/"}],
    },
  },
  {
    slug:"roadpact",title:"Driver Retention Early-Warning System",subtitle:"RoadPact",
    description:"Capturing daily driver signals through in-cab tablet surveys and transforming them into actionable retention insights.",
    year:"2026",industry:"HR Logistics - B2B",client:"Roadpact",
    coverImage:"https://framerusercontent.com/images/z8xPFaO75k7OGTqQBspYCb1YX4M.png",
    images:["https://framerusercontent.com/images/x4NW2V2DVWouAadR7ldLsBZ6lw.png","https://framerusercontent.com/images/kMBZ6z5XgI9IorSR0T9YVJRSyQU.png","https://framerusercontent.com/images/OZ5m2AFUcuXIA23bU835dOEvsI.png"],
    tags:["UX Design","HR Tech","B2B","Data Visualization"],
    sections:{
      challenge:"Fleet companies rarely lose drivers suddenly. They accumulate frustrations until leaving becomes inevitable through scheduling pressure, poor equipment, or dispatch conflicts.",
      hypothesis:"If fleets could capture daily driver sentiment and operational friction signals, they could detect early patterns of disengagement and intervene before drivers resign.",
      decisions:[
        {title:"Capture signals in an easy way",content:"Consolidated from multi-screen to 2-screen flow: (1) Boolean mood signal, (2) friction tags + optional voice/text. Completion dropped 40% — 3min to 1min50sec."},
        {title:"Transform friction into structured signals",content:"Dashboard aggregates driver mood trends, friction categories, severity scores by Wellbeing/Operations/Equipment/Environment areas. AI Sentiment Analysis processes text and speech."},
        {title:"Dashboards that reveal operational patterns",content:"Visualizes fleet health indicators, friction distribution, sentiment trends, and emerging risks. Validated: 90% SUS acceptance on perceived utility."},
        {title:"Incident-level auditing of driver signals",content:"Detailed inspection interface to audit responses, detect recurring signals from specific drivers, investigate critical incidents flagged by the system."},
        {title:"Build a prototype capable of selling",content:"Designed before backend existed. Fully navigable prototype with simulated datasets and role-based access simulation — enabled stakeholder buy-in before engineering investment."},
      ],
      results:[
        {area:"Raw data collection",improvement:"40% faster",outcome:"Redesigned form — same quality, faster completion"},
        {area:"Driver feedback structure",improvement:"90% SUS",outcome:"90% acceptance on perceived utility"},
        {area:"Product validation",improvement:"Pre-engineering",outcome:"AI prototype enabled stakeholder buy-in"},
      ],
      learnings:["AI-coded prototypes sell ideas faster by making systems tangible before engineering investment.","Low-friction inputs win adoption — daily signals outperform long surveys.","Value comes from transformation, not collection."],
      links:[{label:"roadpact.com",url:"https://roadpact.com"},{label:"Schedule a Demo",url:"https://roadpact.com/contact/"}],
    },
  },
  {
    slug:"now-task-manager",title:"NOW - Personal Task Manager",subtitle:"NOW",
    description:"A personal tool to capture ideas and tasks frictionlessly through voice-first input and real-time cross-device sync.",
    year:"2026",industry:"SaaS B2C - Productivity",client:"Side Personal Project",
    coverImage:"https://framerusercontent.com/images/AwGYmf8YoIiaieUhwpCDAahTaYA.png",
    images:["https://framerusercontent.com/images/ppqMVdCsSfHyV6Wyy1Pl1f0glzs.png","https://framerusercontent.com/images/2aiCQ504OxMqfjYGK3P3hGuHB8Q.png","https://framerusercontent.com/images/7Du77T8zzVSqyVCHPrDF1ck8quE.png"],
    tags:["Product Design","Mobile","Voice UI","Productivity"],
    sections:{
      challenge:"Making task lists helps create mental order, but existing workflows had too much friction. Capturing ideas required jumping between tools causing loss of focus.",
      hypothesis:"If I reduce friction of capturing information and centralize tasks in one system, planning time decreases and ability to focus on execution improves.",
      decisions:[
        {title:"Designing a cross-platform experience",content:"Mobile-first capture layer plus desktop workspace layer. Mobile for quick capture on the go; desktop as persistent active tab for planning."},
        {title:"Supporting voice-based project capture",content:"Whisper-large-v3 for speech-to-text; llama-3.3-70b-versatile structures transcripts into projects and tasks. Compares normalized names and asks for confirmation before saving."},
        {title:"Creating a flexible action system",content:"Task actions available across different modules. Users can update status or delete items from multiple parts of the product without jumping between modules."},
        {title:"Enabling instant synchronization",content:"Cross-device sync via realtime database events. Updates debounced 700ms. App auto-refreshes when returning to foreground."},
      ],
      learnings:["Shipping with embarrassment speeds everything up — first version launched when only ~30% existed.","Using your own product creates endless improvements — dogfooding exposed friction faster than planning."],
      links:[{label:"Try NOW →",url:"https://now-task-app.vercel.app"}],
    },
  },
  {slug:"campus-app",title:"University Campus App",subtitle:"Campus",description:"Unified campus experience app consolidating schedules, facilities, events, and student services.",year:"2023",industry:"EdTech",client:"Universidad",coverImage:"",images:[],tags:["UX Design","Mobile","EdTech"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"epr-design-system",title:"Design System",subtitle:"EPR",description:"Component library and design system for enterprise resource planning platform, enabling consistent UI across 12+ modules.",year:"2023",industry:"Enterprise Software",client:"EPR",coverImage:"",images:[],tags:["Design Systems","Enterprise","UI Components"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"ai-therapist",title:"AI Mental Health Companion",subtitle:"AI Therapist",description:"Conversational AI companion for mental health support, designed with safety, trust, and emotional accessibility as core principles.",year:"2024",industry:"HealthTech",client:"Research Project",coverImage:"",images:[],tags:["AI/UX","HealthTech","Conversational UI"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"tms-saas",title:"Transportation Management System",subtitle:"TMS SaaS",description:"Ground-up redesign of a transportation management platform serving mid-size carriers across North America.",year:"2024",industry:"Logistics - SaaS",client:"TMS Client",coverImage:"",images:[],tags:["UX Design","SaaS","Logistics"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"custom-erp",title:"Custom ERP Platform",subtitle:"Custom ERP",description:"Bespoke ERP design for manufacturing company, replacing legacy system with modern interface that reduced training time by 40%.",year:"2023",industry:"Manufacturing",client:"Enterprise Client",coverImage:"",images:[],tags:["Enterprise UX","ERP","Manufacturing"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"meli-pos",title:"Point of Sale System",subtitle:"MeLi POS",description:"POS system redesign for MercadoLibre ecosystem, optimizing checkout flows for high-volume retail environments.",year:"2023",industry:"Retail Tech",client:"MercadoLibre",coverImage:"",images:[],tags:["UX Design","POS","Retail"],sections:{challenge:"Coming soon.",decisions:[]}},
  {slug:"surgical-ar",title:"Surgical Procedures AR",subtitle:"Surgical AR",description:"Augmented reality UX/UI design for surgical procedure guidance system.",year:"2022",industry:"MedTech",client:"Research",coverImage:"",images:[],tags:["AR/VR","MedTech"],externalUrl:"https://www.behance.net/gallery/144638479/Surgical-Procedures-Augmented-Reality-UXUI-Design",sections:{decisions:[]}},
  {slug:"therapeutic-videogame",title:"Therapeutic Videogame",subtitle:"Therapeutic Game",description:"UX/UI design for a therapeutic videogame experience.",year:"2022",industry:"HealthTech / Gaming",client:"Research",coverImage:"",images:[],tags:["Game UX","HealthTech"],externalUrl:"https://www.behance.net/gallery/144542803/UXUI-Design-Therapeutic-videogame",sections:{decisions:[]}},
];

export const featuredProjects = projects.filter((p) =>
  ["fleet-defender","roadpact","now-task-manager","campus-app","epr-design-system","ai-therapist"].includes(p.slug)
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
