import { ServiceItem, ProjectItem, ProcessStage } from "@/types";

export const BRAND_CONFIG = {
  name: "VenDeFi",
  tagline: "We build technology that improves sales and reduces operating costs.",
  eyebrow: "SOFTWARE ENGINEERING · AI · AUTOMATION",
  heroTitle: "We Build Technology That Improves Sales and Reduces Operating Costs.",
  heroDescription:
    "We help businesses turn missed enquiries, repetitive tasks, and inefficient processes into opportunities for growth through custom software, AI agents, and intelligent automation.",
  aboutHeading: "Technology Should Solve Problems. Not Create More.",
  aboutCopy: [
    "VenDeFi is a software engineering and AI automation company focused on helping businesses solve operational problems through thoughtful technology.",
    "We design and build software products, intelligent systems, and connected workflows that make business operations simpler, more efficient, and easier to scale."
  ],
  mission:
    "Our mission is to help businesses move forward by turning complex problems into practical software, useful AI, and reliable automation.",
  contactHeading: "Let's Talk About What's Holding Your Business Back.",
  contactSupporting:
    "Tell us where your business is losing time, missing opportunities, or struggling with inefficient processes. We'll discuss whether software, AI, or automation can help.",
  contact: {
    phone: "+234 913 025 2726",
    phoneTel: "tel:+2349130252726",
    whatsapp: "+234 802 535 1391",
    whatsappUrl: "https://wa.me/2348025351391",
    email: "Iamdele14@gmail.com",
    emailMailto: "mailto:Iamdele14@gmail.com"
  }
};

export const BUSINESS_PROBLEMS = [
  {
    id: "missed-enquiries",
    number: "01",
    title: "Missed Customer Enquiries",
    description:
      "Customer enquiries go unanswered or receive delayed responses, allowing potential opportunities to slip away.",
    impact: "Lost sales & degraded buyer confidence",
    solution: "AI response agents & automated inbound routing"
  },
  {
    id: "repetitive-work",
    number: "02",
    title: "Repetitive Manual Work",
    description:
      "Staff spend valuable time on repetitive tasks that could be simplified or automated.",
    impact: "High overhead & staff burnout",
    solution: "End-to-end business process automation"
  },
  {
    id: "inconsistent-followups",
    number: "03",
    title: "Inconsistent Follow-Ups",
    description:
      "Potential customers are forgotten because follow-ups depend entirely on manual effort.",
    impact: "Leaking pipeline & abandoned leads",
    solution: "Triggered follow-up cadences & CRM handoffs"
  },
  {
    id: "disconnected-systems",
    number: "04",
    title: "Disconnected Business Systems",
    description:
      "Information is scattered across different tools, making business processes slower and harder to manage.",
    impact: "Duplicated data entry & operational delays",
    solution: "Unified API, payment & database integrations"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "customer-enquiries",
    number: "01",
    title: "Get More From Customer Enquiries",
    problem:
      "Prospects reach out on WhatsApp, email, or web channels, but delayed responses cause them to buy elsewhere.",
    description:
      "We build conversational AI agents and automated lead-qualification systems that respond immediately, qualify intent, and hand hot opportunities directly to your team.",
    value:
      "Helps your business respond consistently 24/7, capture every opportunity, and accelerate the sales cycle.",
    capabilities: [
      "AI customer agents",
      "Enquiry handling",
      "Lead qualification",
      "Customer follow-ups",
      "Sales workflow automation"
    ],
    icon: "Bot"
  },
  {
    id: "reduce-manual-work",
    number: "02",
    title: "Reduce Manual Work",
    problem:
      "Your team spends hours copying information between spreadsheets, documents, and administrative tools.",
    description:
      "We design automated workflows that eliminate repetitive data entry, orchestrate handoffs between departments, and process incoming documents without human intervention.",
    value:
      "Reclaims valuable team hours, eliminates human error, and delivers consistent operational turnaround.",
    capabilities: [
      "Business process automation",
      "Repetitive administrative tasks",
      "Document and information processing",
      "Workflow orchestration",
      "Connections between existing tools"
    ],
    icon: "Workflow"
  },
  {
    id: "custom-software",
    number: "03",
    title: "Build Software Around Your Business",
    problem:
      "Off-the-shelf software forces your company to fit into rigid, generic workflows that don't match your operations.",
    description:
      "We engineer custom web applications, internal tools, operational dashboards, and digital platforms tailored precisely to your business model.",
    value:
      "Gives your company software that fits your exact operating requirements, with full ownership and scalability.",
    capabilities: [
      "Custom web applications",
      "Internal business tools",
      "Dashboards",
      "Business platforms",
      "Digital product development"
    ],
    icon: "Code2"
  },
  {
    id: "connect-systems",
    number: "04",
    title: "Connect Your Business Systems",
    problem:
      "Your payments, database, CRM, and communication tools operate in silos, creating friction and blind spots.",
    description:
      "We build robust API integrations and middleware that bridge your disparate software tools, ensuring data synchronizes reliably and in real time.",
    value:
      "Eliminates duplicate data entry, speeds up cross-departmental operations, and keeps your data unified.",
    capabilities: [
      "API integrations",
      "Payment integrations",
      "Database-backed applications",
      "CRM and operational integrations",
      "Connections between business systems"
    ],
    icon: "Network"
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
      "An AI-powered pharmacy discovery platform designed to help people locate genuine medicines, check verified pharmacy availability, and eliminate manual phone calls during urgent health needs.",
    projectUrl: "https://pharmachains.ai/",
    challenge:
      "Finding specific or rare medications traditionally requires patients to visit or call multiple pharmacies in person, creating critical delays and risk of counterfeit drugs.",
    approach:
      "Engineered an intelligent discovery engine that indexes verified pharmacies, maps geographic availability, and allows users to search medicines in natural language.",
    experience:
      "Explore the live platform to see the search experience, structured catalog interface, and consumer discovery workflow.",
    technologies: ["Next.js", "AI Search", "Health Tech", "TypeScript", "Tailwind CSS"],
    scope: "Platform Architecture, Natural Language Search UX & Directory Systems",
    keyFeatures: [
      "Natural language medicine and ingredient search",
      "Real-time pharmacy availability indicator",
      "Location-based pharmacy mapping",
      "Patient-friendly verification and information display"
    ],
    architectureDetails: {
      clientLayer: "Responsive search-first web interface with dynamic filtering",
      processingLayer: "AI lookup and directory catalog aggregation pipeline",
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
    category: "Developer Tools · API Infrastructure · AI Agents",
    tagline: "Simplifying API Integration for AI Applications",
    description:
      "A developer platform engineered to transform, route, and combine API operations instantly, converting raw cURL commands into compiled, ultra-low-latency endpoints for AI agents.",
    projectUrl: "https://xform.sh/",
    challenge:
      "AI agents and modern apps need to consume diverse third-party APIs, but writing and maintaining bespoke backend proxy glue introduces heavy latency and maintenance overhead.",
    approach:
      "Architected a platform where developers deploy compiled logic endpoints with near-zero cold starts (~0.04ms overhead) and automated payload transformation.",
    experience:
      "Explore the live developer console to see the endpoint deployment workflow, live code compilation, and interactive transformation interface.",
    technologies: ["API Transformation", "Developer Tooling", "TypeScript", "Rust Performance"],
    scope: "Developer Console, Endpoint Transformation Engine & High-Performance Routing",
    keyFeatures: [
      "Instant cURL-to-endpoint deployment pipeline",
      "Compiled transformation logic with near-zero latency overhead",
      "Zero cold-start serverless architecture",
      "Interactive developer console and live schema inspection"
    ],
    architectureDetails: {
      clientLayer: "Developer console and endpoint management interface",
      processingLayer: "Low-latency compiled execution engine",
      dataStore: "Schema registry, route configurations, and transform rules"
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
    category: "Food Technology · Digital Products · Conversational Commerce",
    tagline: "A Digital Experience for Food Ordering",
    description:
      "A food ordering web platform that bridges online restaurant browsing with conversational WhatsApp order fulfillment, removing app-download friction for diners.",
    projectUrl: "https://foodnow-landing-page.vercel.app/",
    challenge:
      "Local restaurant delivery platforms struggle with high customer drop-off when forcing users to download heavy mobile apps and create accounts just to place a simple meal order.",
    approach:
      "Built a lightweight, responsive web showcase that guides customers through curated menus and transitions seamlessly into direct, automated WhatsApp ordering.",
    experience:
      "Explore the live web application to experience the menu discovery, local restaurant showcase, and conversion funnel into WhatsApp.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp Workflow"],
    scope: "Product Landing Experience, Restaurant Showcases & WhatsApp Conversion Funnel",
    keyFeatures: [
      "App-free food ordering journey directly on WhatsApp",
      "Curated local restaurant showcases and menu browsing",
      "Optimized mobile conversion funnels",
      "Instant restaurant and delivery courier routing"
    ],
    architectureDetails: {
      clientLayer: "Responsive Next.js web application with restaurant menus",
      processingLayer: "Customer onboarding funnels and WhatsApp intent triggers",
      dataStore: "Structured restaurant showcase and promotional content"
    },
    previewColor: "#0B63F6",
    statusBadge: "Live Web App",
    imageUrl: "/images/projects/foodnow.png",
    imageAlt: "FoodNow platform interface — Good Food. Right Now. Order on WhatsApp"
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    summary:
      "Understand the business problem, existing workflows, constraints, and desired outcomes.",
    deliverables: ["Problem Definition", "Workflow Audit", "Measurable Objectives"],
    focus: "Strategic alignment before writing any code"
  },
  {
    number: "02",
    title: "DESIGN",
    summary:
      "Define the solution, user experience, architecture, and implementation plan.",
    deliverables: ["Solution Architecture", "User Experience Plan", "Integration Blueprint"],
    focus: "Clarity of architecture and modular foundation"
  },
  {
    number: "03",
    title: "BUILD",
    summary:
      "Develop, integrate, and test the software, AI capabilities, or automated workflows.",
    deliverables: ["Production Codebase", "AI & Workflow Pipelines", "End-to-End Testing"],
    focus: "Rigorous engineering and clean maintainability"
  },
  {
    number: "04",
    title: "DEPLOY & IMPROVE",
    summary:
      "Launch the solution, verify that it works correctly, and make improvements based on operational needs.",
    deliverables: ["Live Production Release", "Operational Verification", "Ongoing Optimization"],
    focus: "Stable deployment and long-term value"
  }
];
