import { ServiceItem, ProjectItem, TechCategory, ProcessStage } from "@/types";

export const BRAND_CONFIG = {
  name: "VenDeFi",
  tagline: "We build technology that moves businesses forward.",
  eyebrow: "SOFTWARE ENGINEERING · AI · AUTOMATION",
  heroTitle: "We Build Technology That Moves Businesses Forward.",
  heroDescription:
    "VenDeFi designs and develops software products, AI-powered systems, and intelligent automation that help businesses operate smarter, solve complex problems, and scale with confidence.",
  aboutHeading: "Technology is only valuable when it solves a real problem.",
  aboutCopy: [
    "VenDeFi exists to bridge the gap between business challenges and practical technology.",
    "We combine software engineering, AI, and automation to create digital systems that help businesses simplify operations, improve customer experiences, and build for the future.",
    "Our approach is straightforward: understand the problem, engineer the right solution, and build systems that create lasting value."
  ],
  contactHeading: "Have a Business Problem We Can Solve?",
  contactSupporting:
    "Let's discuss what you're building, the problem you're trying to solve, and how VenDeFi can help.",
  contact: {
    phone: "+234 913 025 2726",
    phoneTel: "tel:+2349130252726",
    whatsapp: "+234 802 535 1391",
    whatsappUrl: "https://wa.me/2348025351391",
    email: "Iamdele14@gmail.com",
    emailMailto: "mailto:Iamdele14@gmail.com"
  }
};

export const TRUST_TECHNOLOGIES = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Type Safety" },
  { name: "Node.js", category: "Backend" },
  { name: "Supabase", category: "Database & Auth" },
  { name: "PostgreSQL", category: "Relational DB" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "AI & LLM APIs", category: "Intelligence" },
  { name: "Vercel", category: "Edge Cloud" },
  { name: "Paystack", category: "Payments" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "software-engineering",
    number: "01",
    title: "Software Engineering",
    description:
      "Custom digital products, business dashboards, and robust backend systems engineered for long-term scalability and performance.",
    capabilities: [
      "Web applications & platforms",
      "Custom business dashboards",
      "Backend systems & APIs",
      "Database-driven tools",
      "Internal operations software"
    ],
    icon: "Code2"
  },
  {
    id: "ai-solutions",
    number: "02",
    title: "AI Solutions & Integration",
    description:
      "Practical AI capabilities integrated into products and operations to automate retrieval, document handling, and decision flows.",
    capabilities: [
      "AI assistants & copilots",
      "Information retrieval systems",
      "Document processing & parsing",
      "Predictive recommendations",
      "Custom LLM API integrations"
    ],
    icon: "Cpu"
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Process Automation",
    description:
      "Intelligent automation workflows and conversational agents that eliminate repetitive tasks and streamline customer journeys.",
    capabilities: [
      "WhatsApp automated agents",
      "Customer enquiry routing",
      "Lead scoring & qualification",
      "Multi-step webhook workflows",
      "Cross-tool operations sync"
    ],
    icon: "Bot"
  },
  {
    id: "api-integration",
    number: "04",
    title: "API Integration & Systems",
    description:
      "Transforming, routing, and connecting disparate business tools, legacy backends, and modern third-party services.",
    capabilities: [
      "Custom API gateways",
      "Data payload transformations",
      "Payment gateway integrations",
      "Third-party CRM & ERP connections",
      "Real-time webhook orchestration"
    ],
    icon: "Network"
  },
  {
    id: "product-engineering",
    number: "05",
    title: "Digital Product Development",
    description:
      "Guiding software from early discovery and clickable prototypes through MVP architecture and production delivery.",
    capabilities: [
      "Rapid MVP development",
      "SaaS product architecture",
      "Interactive prototyping",
      "System refactoring & scaling",
      "Continuous technical delivery"
    ],
    icon: "Layers"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pharmachain-ai",
    slug: "pharmachain-ai",
    name: "Pharmachain AI",
    category: "AI · Health Technology · Pharmacy Discovery",
    tagline: "Making Medicine Discovery More Accessible",
    description:
      "An AI-powered pharmacy discovery platform designed to help people find medicines, explore pharmacy availability, and identify potential sources for their medication.",
    projectUrl: "https://pharmachains.ai/",
    challenge:
      "Finding specific medicines can require time-consuming searches and calls to multiple pharmacies.",
    approach:
      "A digital platform designed to simplify medicine discovery and connect users with relevant pharmacy information.",
    experience:
      "Explore the live platform to understand its search experience, product interface, and approach to pharmacy discovery.",
    technologies: ["Next.js", "AI Search", "Health Tech", "TypeScript", "Tailwind CSS"],
    scope: "Digital Platform Design & Pharmacy Discovery UX",
    keyFeatures: [
      "Natural language medicine and active ingredient search",
      "Real-time pharmacy availability and inventory indicator",
      "Geographic source mapping for nearby pharmacies",
      "Clean, patient-centric medicine information display"
    ],
    architectureDetails: {
      clientLayer: "Responsive search-first web interface with dynamic filtering",
      processingLayer: "AI medicine lookup and catalog aggregation pipeline",
      dataStore: "Verified pharmacy directory and availability indexes"
    },
    previewColor: "#0B63F6",
    statusBadge: "Live Platform",
    imageUrl: "/images/projects/pharmachain-ai.png",
    imageAlt: "Pharmachain AI platform interface — Find, Track & Verify Medicine in Seconds"
  },
  {
    id: "xform",
    slug: "xform",
    name: "Xform",
    category: "AI · Developer Tools · API Infrastructure",
    tagline: "Simplifying API Integration for AI Applications",
    description:
      "An API platform designed to help developers transform, route, and combine API operations using AI-generated logic and production-oriented tooling.",
    projectUrl: "https://xform.sh/",
    challenge:
      "Integrating multiple APIs can introduce unnecessary backend complexity and maintenance work.",
    approach:
      "A platform that streamlines API transformations and enables developers to create endpoints with generated logic.",
    experience:
      "Explore the live platform to understand its developer workflow, interface, and API integration capabilities.",
    technologies: ["API Transformation", "Developer Tooling", "TypeScript", "Rust Performance"],
    scope: "Developer Experience, UI Workflows & API Transformation",
    keyFeatures: [
      "Payload transformation using TypeScript and compiled execution",
      "Dynamic endpoint routing and multi-API composition",
      "Low-latency proxy execution for production workloads",
      "Interactive developer console and live schema validation"
    ],
    architectureDetails: {
      clientLayer: "Developer console and endpoint management interface",
      processingLayer: "Sub-millisecond low-latency proxy execution engine",
      dataStore: "Schema registry, route configurations, and pipeline rules"
    },
    previewColor: "#0B63F6",
    statusBadge: "Live Platform",
    imageUrl: "/images/projects/xform.png",
    imageAlt: "xform.sh platform interface — The API Platform for AI Agents"
  },
  {
    id: "foodnow",
    slug: "foodnow",
    name: "FoodNow",
    category: "Food Technology · Digital Products · Web Development",
    tagline: "A Digital Experience for Food Ordering",
    description:
      "A food-ordering project focused on presenting the service, helping customers understand the offering, and directing them toward the next step in the ordering journey.",
    projectUrl: "https://foodnow-landing-page.vercel.app/",
    challenge:
      "Presenting a food-ordering service clearly and making it easy for potential customers to understand how to use it.",
    approach:
      "A dedicated landing page designed to communicate the service and guide visitors through the customer journey.",
    experience:
      "Explore the live website to see the design, page structure, and calls to action.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp Workflow"],
    scope: "Landing Page Architecture, Customer Journey & Conversion UX",
    keyFeatures: [
      "Clear value proposition presentation for local food delivery",
      "Frictionless onboarding directing visitors into the WhatsApp ordering journey",
      "Showcase of trusted restaurant partnerships and popular menus",
      "Fast-loading, mobile-optimized digital experience"
    ],
    architectureDetails: {
      clientLayer: "Responsive Next.js web landing experience",
      processingLayer: "Customer journey funnels and WhatsApp entry points",
      dataStore: "Structured restaurant showcase and promotional content"
    },
    previewColor: "#0B63F6",
    statusBadge: "Live Landing Page",
    imageUrl: "/images/projects/foodnow.png",
    imageAlt: "FoodNow platform interface — Good Food. Right Now. Order on WhatsApp"
  }
];

export const TECHNOLOGIES: TechCategory[] = [
  {
    id: "frontend",
    category: "Frontend Engineering",
    description: "Modern, type-safe, and accessible interfaces built for speed and responsiveness.",
    items: [
      { name: "TypeScript", role: "Type Safety & Architecture", featured: true },
      { name: "React", role: "Component Systems", featured: true },
      { name: "Next.js", role: "App Router & SSR", featured: true },
      { name: "Tailwind CSS", role: "Utility Design Tokens", featured: true },
      { name: "HTML / CSS", role: "Semantic Foundation" },
      { name: "JavaScript", role: "Modern Runtime" }
    ]
  },
  {
    id: "backend",
    category: "Backend & Systems",
    description: "Reliable API endpoints, routing engines, and server architectures.",
    items: [
      { name: "Node.js", role: "Server Runtime", featured: true },
      { name: "Next.js APIs", role: "Route Handlers & Edge", featured: true },
      { name: "PostgreSQL", role: "Relational Persistence", featured: true },
      { name: "Supabase", role: "Database & Backend as a Service", featured: true }
    ]
  },
  {
    id: "ai-integrations",
    category: "AI & Integrations",
    description: "Intelligent language models, automated pipelines, and communication gateways.",
    items: [
      { name: "LLM APIs", role: "Reasoning & Inference", featured: true },
      { name: "Webhooks", role: "Event-driven Triggers", featured: true },
      { name: "WhatsApp APIs", role: "Conversational Workflows", featured: true },
      { name: "Paystack", role: "Payment Processing", featured: true }
    ]
  },
  {
    id: "deployment",
    category: "Deployment & Infrastructure",
    description: "Automated continuous delivery, version management, and edge hosting.",
    items: [
      { name: "Git & GitHub", role: "Version Control & CI/CD", featured: true },
      { name: "Vercel", role: "Global Edge Infrastructure", featured: true },
      { name: "Render", role: "Cloud Services" }
    ]
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the core business problem, workflows, users, and tangible success metrics.",
    deliverables: ["Scope Definition", "Business Objectives", "Technical Feasibility"],
    focus: "Strategic alignment before writing any code"
  },
  {
    number: "02",
    title: "Design",
    summary: "Plan the user journey, system architecture, database schema, and integration topology.",
    deliverables: ["System Schematics", "Component Systems", "API Contracts"],
    focus: "Clarity of architecture and modular foundation"
  },
  {
    number: "03",
    title: "Build",
    summary: "Develop type-safe software, configure AI models, and assemble automated workflow pipelines.",
    deliverables: ["Production Codebase", "API Integration", "Automated Pipelines"],
    focus: "Rigorous engineering and clean maintainability"
  },
  {
    number: "04",
    title: "Deploy & Improve",
    summary: "Launch the solution with verified telemetry, ensure smooth operations, and iterate on feedback.",
    deliverables: ["Production Release", "Monitoring Setup", "Continuous Iteration"],
    focus: "Stable deployment and long-term value"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Practical Problem-Solving",
    description:
      "We design systems around concrete operational goals, ensuring every feature directly moves the business forward."
  },
  {
    title: "Thoughtful Engineering",
    description:
      "Clean separation of concerns, strict type safety, and predictable error handling keep systems dependable over time."
  },
  {
    title: "Useful AI Integration",
    description:
      "We implement AI where it delivers measurable efficiency — automating data extraction, routing, and customer response."
  },
  {
    title: "Reliable Automation",
    description:
      "Automating repetitive workflows reduces operational overhead, eliminates human error, and accelerates response cycles."
  }
];
