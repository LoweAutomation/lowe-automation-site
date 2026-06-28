import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Clock3,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MessageSquare,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Strategy", href: "/strategy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { value: "AI", label: "assistant systems" },
  { value: "24/7", label: "monitoring potential" },
  { value: "Custom", label: "software builds" },
  { value: "Fast", label: "automation wins" },
];

export const services = [
  {
    icon: Workflow,
    title: "Business Automation",
    tagline: "Turn repetitive work into reliable systems.",
    description:
      "Automate recurring workflows, reports, data entry, customer follow-ups, internal checklists, reminders, spreadsheets, and daily operations.",
    outcomes: ["Less manual work", "Faster operations", "Cleaner handoffs", "Consistent execution"],
    deliverables: ["Workflow maps", "Automation scripts", "Scheduled jobs", "Internal tools"],
  },
  {
    icon: BrainCircuit,
    title: "AI Assistants",
    tagline: "AI tools built around your actual workflow.",
    description:
      "Build assistants that summarize documents, answer business questions, draft responses, analyze information, and help your team complete tasks faster.",
    outcomes: ["Faster answers", "Better knowledge access", "Less context switching", "Smarter workflows"],
    deliverables: ["AI chat interfaces", "Knowledge tools", "Document workflows", "Team copilots"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    tagline: "Modern web apps and dashboards for your business.",
    description:
      "Design and build web apps, dashboards, admin panels, client portals, tracking systems, and tools that match the way your company actually operates.",
    outcomes: ["Better visibility", "Cleaner systems", "Fewer spreadsheets", "More control"],
    deliverables: ["Web apps", "Dashboards", "Admin portals", "Client-facing tools"],
  },
  {
    icon: Radar,
    title: "Monitoring Systems",
    tagline: "Track what matters without checking manually.",
    description:
      "Monitor competitor pricing, inventory, websites, product listings, restocks, market signals, and operational changes with alerts.",
    outcomes: ["Never miss changes", "Faster decisions", "Better market awareness", "Useful alerts"],
    deliverables: ["Price tracking", "Inventory checks", "Change detection", "Email/Discord alerts"],
  },
];

export const projects = [
  {
    title: "Jarvis AI Assistant",
    category: "AI Desktop System",
    icon: Bot,
    description:
      "A local AI assistant with voice control, memory, developer tools, project analysis, test generation, and desktop automation.",
    problem:
      "Developers and power users waste time switching between tools, searching project files, repeating commands, and explaining errors manually.",
    solution:
      "Jarvis combines voice commands, local AI, memory, developer copilot tools, reports, project review, and PC automation into one practical assistant.",
    features: ["Voice control", "Developer copilot", "Memory system", "Project analysis", "Local AI support", "Desktop automation"],
    businessUse:
      "The same architecture can become a private internal AI assistant for a business, trained around documents, processes, operations, and workflows.",
    outcome:
      "A flagship proof-of-work project showing AI automation, practical software architecture, and real developer tooling.",
  },
  {
    title: "Retail Intelligence Platform",
    category: "Inventory & Price Monitoring",
    icon: LineChart,
    description:
      "A monitoring platform that tracks inventory, pricing, availability, restocks, product signals, and alerts.",
    problem:
      "Retail teams, buyers, and operators often manually check websites, stores, pricing changes, and availability windows.",
    solution:
      "The platform tracks products, signals, price movement, restock windows, store availability, and alerts users when action is needed.",
    features: ["Inventory checks", "Price monitoring", "Restock windows", "Alert system", "Store intelligence", "Product tracking"],
    businessUse:
      "Useful for retail, procurement, ecommerce, competitor intelligence, limited inventory, and time-sensitive product categories.",
    outcome:
      "A business-ready monitoring concept that can be adapted for retail, procurement, ecommerce, and competitor intelligence.",
  },
  {
    title: "Competitor Monitoring Dashboard",
    category: "Business Intelligence",
    icon: BarChart3,
    description:
      "A dashboard that helps businesses monitor competitor prices, website changes, product listings, and market movement.",
    problem:
      "Small businesses rarely have the time or tooling to consistently watch competitors and react quickly.",
    solution:
      "A dashboard tracks competitor pages, products, prices, offers, positioning, and important updates with a clean intelligence interface.",
    features: ["Competitor tracking", "Dashboard UI", "Automated alerts", "Change detection", "Market snapshots", "Business reporting"],
    businessUse:
      "Useful for service businesses, ecommerce brands, local companies, agencies, and operators who need visibility without manual checking.",
    outcome:
      "A practical service offering for businesses that need better market awareness and faster response times.",
  },
];

export const benefits = [
  {
    icon: Clock3,
    title: "Save time every week",
    description: "Reduce repetitive work and free your team to focus on higher-value tasks.",
  },
  {
    icon: Gauge,
    title: "Increase operational speed",
    description: "Make common tasks faster, cleaner, and less dependent on manual effort.",
  },
  {
    icon: BellRing,
    title: "Never miss changes",
    description: "Monitor products, competitors, websites, inventory, and operational signals automatically.",
  },
  {
    icon: Database,
    title: "Organize scattered information",
    description: "Turn messy spreadsheets and disconnected data into clear dashboards and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce mistakes",
    description: "Automated systems follow the same rules every time and reduce human error.",
  },
  {
    icon: Sparkles,
    title: "Use AI practically",
    description: "Apply AI where it creates real value instead of adding random tools.",
  },
];

export const process = [
  {
    icon: Target,
    title: "Discover",
    description:
      "We identify where your business is losing time, what tasks repeat, and what system would create the highest return.",
  },
  {
    icon: Layers3,
    title: "Design",
    description:
      "We map the workflow, define the software, and make sure the system is simple to use and maintain.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "We develop the dashboard, AI assistant, automation, monitoring system, or custom web app.",
  },
  {
    icon: Zap,
    title: "Launch",
    description:
      "We test the system, launch it, and make sure it fits into the way your business actually works.",
  },
  {
    icon: Gauge,
    title: "Improve",
    description:
      "We refine the system, add valuable features, and turn it into a lasting operational advantage.",
  },
];

export const industries = [
  {
    icon: Building2,
    title: "Local service businesses",
    description: "Automate follow-ups, intake, reporting, quoting support, and admin workflows.",
  },
  {
    icon: Globe2,
    title: "Ecommerce and retail",
    description: "Track inventory, pricing, competitors, product availability, and market changes.",
  },
  {
    icon: Database,
    title: "Data-heavy teams",
    description: "Replace spreadsheets and manual reporting with dashboards, alerts, and workflows.",
  },
  {
    icon: Cpu,
    title: "AI-forward operators",
    description: "Turn AI into practical assistants, tools, and systems that actually help the business.",
  },
];

export const packages = [
  {
    name: "Automation Audit",
    bestFor: "Finding the fastest wins",
    description:
      "A structured review of your workflows, repetitive tasks, software stack, and automation opportunities.",
    items: ["Workflow review", "Bottleneck list", "Automation ideas", "Prioritized action plan"],
  },
  {
    name: "Custom Build Sprint",
    bestFor: "Creating one useful system",
    description:
      "A focused build for a dashboard, internal tool, AI assistant, report automation, or monitoring system.",
    items: ["Scope definition", "UI build", "Core automation", "Launch support"],
  },
  {
    name: "Automation Partner",
    bestFor: "Ongoing improvements",
    description:
      "Ongoing automation, software improvements, monitoring, and AI system development as your business grows.",
    items: ["Monthly improvements", "Monitoring support", "New automations", "System refinement"],
  },
];

export const faqs = [
  {
    q: "Do I need to know exactly what I want built?",
    a: "No. The best starting point is usually the annoying manual work you are already doing. From there, the system can be designed around the real workflow.",
  },
  {
    q: "Can this help a small business?",
    a: "Yes. Small businesses often benefit the most because a few automated workflows can save meaningful time every week.",
  },
  {
    q: "Is this just AI?",
    a: "No. AI is one tool. The goal is practical software: dashboards, workflows, alerts, monitoring, automations, and AI only where it helps.",
  },
  {
    q: "Can you build internal business tools?",
    a: "Yes. Internal dashboards, admin panels, monitoring systems, data tools, and workflow apps are a core focus.",
  },
];

export const contactOptions = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Talk through your workflow and identify automation opportunities.",
  },
  {
    icon: SearchCheck,
    title: "Automation Audit",
    description: "Find repetitive tasks, bottlenecks, and software opportunities.",
  },
  {
    icon: CheckCircle2,
    title: "Custom Build",
    description: "Plan a dashboard, AI assistant, monitoring system, or internal tool.",
  },
];

export const arrows = { ArrowRight };
