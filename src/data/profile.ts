export const siteConfig = {
  title: 'CHAOS',
  description: "Isaac Jin's personal website - Computer Science, Security Research, and More",
  author: 'Isaac Jin',
  url: 'https://isaacjin.com',
};

export const personalInfo = {
  name: 'Zhaoxuan (Isaac) Jin',
  bio: 'Control freak.',
  title: 'CTO & Founder @ Syntropix',
  email: 'whale3ye@gmail.com',
  phone: '(608) 949-0667',
  avatar: '/images/2025.jpg',
  resume: '/files/resume.pdf',
  linkedin: 'https://linkedin.com/in/zhaoxuan-jin',
  github: 'https://github.com/WHALEEYE',
};

export const socialLinks = [
  {
    name: 'X',
    url: 'https://x.com/Whale__Eye',
    icon: 'x',
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/WHALEEYE',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/zhaoxuan-jin',
    icon: 'linkedin',
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/whaleeye/',
    icon: 'steam',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/whale.swaggy',
    icon: 'facebook',
  },
];

export const education = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'Northwestern University',
    location: 'Evanston, Illinois',
    period: 'Sep. 2023 - Jun. 2025',
    gpa: '4.00/4.00',
    url: 'https://www.northwestern.edu/',
  },
  {
    degree: 'B.E. in Computer Science and Technology',
    institution: 'Southern University of Science and Technology',
    location: 'Shenzhen, Guangdong, China',
    period: 'Sep. 2019 - Jun. 2023',
    gpa: '3.71/4.00',
    url: 'https://www.sustech.edu.cn/',
  },
];

export const workExperience = [
  {
    title: 'Founder & CTO',
    company: 'Syntropix',
    location: 'United States',
    period: 'Feb. 2025 - Present',
    url: 'https://syntropix.ai',
    highlights: [
      'Co-designed and built Syntropix DB, an AI-native ERP platform from the ground up, enabling first-class collaboration with LLM agents instead of retrofitting legacy ERP architectures.',
      'Architected a modular, plugin-based system to support rapid customization for small and mid-sized businesses with non-standard workflows.',
      'Worked directly with customers alongside the CEO, acting as a technical bridge to translate business workflows and edge cases into concrete system and architectural requirements.',
      'Collaborated in a lean two-engineer team, emphasizing UX-driven simplification and long-term code maintainability through refactoring, critical reviews, and consistent design patterns.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Eigent / Camel AI',
    location: 'United States',
    period: 'Jun. 2024 - Jan. 2025',
    url: 'https://github.com/camel-ai/camel',
    highlights: [
      'Core developer of the open-source LLM multi-agent framework CAMEL (15.1K stars).',
      'Led the design and implementation of Workforce, an agent orchestration system that has become one of the core architectures within CAMEL for coordinating multi-agent task execution.',
      'Refactored the core agent execution pipeline by replacing patch-based conditional logic with a polymorphic design, encapsulating agent-specific behaviors within agents and simplifying the shared runtime.',
      'Reduced core runtime code by over one-third (from ~1500 LOC to under 1000 LOC), significantly improving readability, maintainability, and the ease of extending new agent types without modifying shared execution logic.',
    ],
  },
];

export const publications = [
  {
    title: 'OWL: Optimized Workforce Learning for Multi-Agent Task Automation',
    venue: 'NeurIPS 2025',
    authors: null,
    description: null,
    url: null,
  },
  {
    title: 'AutoSeg: Automatic Micro-Segmentation Policy Generation',
    venue: 'Computers & Security, 2025',
    authors: null,
    description:
      'Contributed to system evaluation and large-scale experiments on real-world cloud-native applications, validating automated micro-segmentation policy generation under realistic deployment scenarios.',
    url: null,
  },
  {
    title:
      'Breaking the Bulkhead: Cross-Namespace Reference Vulnerabilities in Kubernetes Operators',
    venue: 'NDSS 2026',
    authors: null,
    description:
      'Performed vulnerability analysis and proof-of-concept exploitation on open-source Kubernetes Operators, uncovering real-world privilege escalation issues and contributing to responsible disclosure with 2 assigned CVEs.',
    url: null,
  },
];

export const projects = [
  {
    name: 'Multi-Layer Compiler',
    url: null,
    period: 'Jan. 2024',
    tech: 'C++',
    descriptions: [
      'Designed and implemented a multi-layer compiler end-to-end, independently completing a two-person course project using modern compiler architecture.',
      'Built a full compilation pipeline from source code to intermediate representation (IR) and assembly code generation.',
      'Implemented core data-flow analyses including reaching definitions and liveness analysis, and designed a graph-coloring-based register allocator.',
      'Applied performance optimizations such as dead code elimination and loop unrolling, achieving a top-5 ranking in the final compiler competition.',
    ],
  },
];

export const technicalSkills = {
  languages: ['Java', 'C/C++', 'Python', 'TypeScript'],
  backend: ['FastAPI', 'PostgreSQL', 'Next.js'],
  ai: ['LLM Agents', 'Prompt Engineering', 'RAG'],
  infrastructure: ['Docker', 'Kubernetes', 'GCP', 'AWS', 'Azure'],
  systems: ['Compiler Optimization', 'IR Design', 'Data-Flow Analysis'],
};

export const researchInterests = {
  description:
    "Now I'm mainly interested in some topics in the research fields of computer security, including system security, network security and cloud native security.",
  keywords: ['System Security', 'Network Security', 'Cloud Native Security'],
};

export const awards = [
  {
    title: 'SUSTech Outstanding Freshman Scholarship',
    subtitle: 'Second-class Award',
    date: 'Jun, 2019',
  },
  {
    title: 'USTC Hackergame 2021',
    subtitle: 'Rank: 44/2677',
    date: 'Oct, 2021',
  },
  {
    title: "Guangdong College Students' CTF Competition",
    subtitle: 'Rank: 37/504',
    date: 'May, 2022',
  },
  {
    title: 'SUSTech Outstanding Student Scholarship',
    subtitle: 'Third-class Award',
    date: 'Sept, 2022',
  },
];

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
];
