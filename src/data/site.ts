export const site = {
  name: 'Vayki Studio',
  businessName: 'Vayki Studio',
  title: 'Independent Software & AI Studio',
  description:
    'Independent software and AI developer building custom software, AI systems, intelligent agents and business automation.',
  siteUrl: 'https://studio.vayki.com',
  email: 'studio@vayki.com',
  location: 'United Kingdom',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    {
      number: '01',
      title: 'Custom Software',
      description:
        'Design and development of web applications, internal tools, APIs and backend systems tailored to real business requirements.',
    },
    {
      number: '02',
      title: 'AI Systems',
      description:
        'Practical AI solutions including AI agents, retrieval-augmented generation, LLM integrations and intelligent assistants.',
    },
    {
      number: '03',
      title: 'Automation & Integration',
      description:
        'Automating repetitive workflows and connecting existing systems, APIs and third-party platforms.',
    },
    {
      number: '04',
      title: 'Technical Consulting',
      description:
        'Technical architecture, prototyping, feasibility analysis and practical advice for software and AI projects.',
    },
  ],
  problems: [
    'You have repetitive processes that should be automated.',
    "You want to use AI, but you're not sure where it genuinely adds value.",
    'Your existing tools do not communicate with each other.',
    'You need custom software, but hiring a full engineering team does not make sense.',
    'You have an idea and need someone who can turn it into a working system.',
  ],
  projects: [
    {
      number: '01',
      slug: 'ai-customer-support-agent',
      title: 'AI Customer Support Agent',
      introduction:
        'A RAG-powered customer support system that answers customer questions using documentation, service information and operational data.',
      problem:
        'Customer information is often spread across documentation and internal sources, making accurate answers slow to find.',
      approach:
        'Structure the source material for retrieval, define clear system boundaries and evaluate answers against the available evidence.',
      solution:
        'A FastAPI service combines vector search with an LLM to retrieve relevant context before producing a grounded response.',
      outcome:
        'A practical foundation for a support assistant that can be tested with real documentation before wider integration.',
      technologies: ['Python', 'FastAPI', 'LLMs', 'RAG', 'Vector Search'],
    },
    {
      number: '02',
      slug: 'vps-infrastructure-assistant',
      title: 'VPS Infrastructure Assistant',
      introduction:
        'An intelligent agent capable of retrieving infrastructure status and operational information through tool integrations.',
      problem:
        'Routine infrastructure checks require switching between tools and interpreting low-level system information.',
      approach:
        'Expose a small set of auditable infrastructure tools and give the agent only the access needed for each task.',
      solution:
        'An MCP-based assistant translates operational questions into structured tool calls and returns concise, traceable answers.',
      outcome:
        'A focused prototype for exploring safer, more accessible infrastructure operations without hiding the underlying data.',
      technologies: ['Python', 'MCP', 'APIs', 'Automation'],
    },
    {
      number: '03',
      slug: 'business-workflow-automation',
      title: 'Business Workflow Automation',
      introduction:
        'Automation connecting existing business tools and APIs to reduce repetitive administrative work.',
      problem:
        'Important information is repeatedly copied between systems, introducing delays and avoidable errors.',
      approach:
        'Map the current process, identify reliable integration points and keep exceptions visible to the people responsible.',
      solution:
        'A set of API-driven workflows moves and validates data between existing tools while preserving clear operational checkpoints.',
      outcome:
        'A maintainable automation pattern that can be extended as the business process becomes better understood.',
      technologies: ['Python', 'APIs', 'Automation', 'AI'],
    },
  ],
  background: {
    education: 'MSc Internet of Things with AI',
    institution: 'University of Bristol',
    focus: [
      'Computer Science',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Distributed Systems',
      'Cloud & Infrastructure',
    ],
  },
  principles: [
    {
      number: '01',
      title: 'Practical',
      description:
        'Technology should solve a real problem. I prioritise useful systems over unnecessary complexity.',
    },
    {
      number: '02',
      title: 'Independent',
      description:
        'No vendor-first recommendations. Technologies are selected based on what best fits the project.',
    },
    {
      number: '03',
      title: 'Transparent',
      description:
        'Clear communication about capabilities, limitations, costs and technical trade-offs.',
    },
    {
      number: '04',
      title: 'Built to last',
      description:
        'Solutions should be maintainable, understandable and usable beyond the initial implementation.',
    },
  ],
  technologies: [
    { category: 'Languages', items: ['Python', 'C++', 'TypeScript'] },
    { category: 'Web', items: ['React', 'Next.js', 'Astro', 'FastAPI'] },
    { category: 'AI', items: ['LLMs', 'RAG', 'MCP', 'OpenAI APIs'] },
    { category: 'Infrastructure', items: ['Docker', 'Linux', 'Cloudflare', 'PostgreSQL'] },
  ],
} as const;

export type Project = (typeof site.projects)[number];
