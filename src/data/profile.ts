export const siteConfig = {
  title: 'CHAOS',
  description: "Isaac Jin's personal website - Computer Science, Security Research, and More",
  author: 'Isaac Jin',
  url: 'https://isaacjin.com', // Update this with your actual domain
};

export const personalInfo = {
  name: 'Zhaoxuan (Isaac) Jin',
  bio: 'Control freak.',
  title: 'CTO & Founder @ Syntropix',
  email: 'isaac@syntropix.ai',
  avatar: '/images/avatar.jpg',
  cv: '/files/CV.pdf',
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
    period: 'Sept, 2023 - Jun, 2025',
    url: 'https://www.northwestern.edu/',
  },
  {
    degree: 'B.E. in Computer Science and Technology',
    institution: 'Southern University of Science and Technology',
    period: 'Sept, 2019 - Jun, 2023',
    url: 'https://www.sustech.edu.cn/',
  },
  {
    degree: 'Visiting International Student',
    institution: 'University of Wisconsin - Madison',
    period: 'Sept, 2022 - Jan, 2023',
    url: 'https://www.wisc.edu/',
  },
];

export const researchInterests = {
  description:
    "Now I'm mainly interested in some topics in the research fields of computer security, including system security, network security and cloud native security.",
  keywords: ['System Security', 'Network Security', 'Cloud Native Security'],
};

export const projects = [
  {
    name: 'MicroShield',
    url: 'https://github.com/WHALEEYE/MicroShield',
    descriptions: [
      'An East-West Traffic Capturing and Auto Policy Generating System for Kubernetes',
      'This is a cloud native security research project supervised by Prof. Yan Chen of NU.',
    ],
  },
  {
    name: 'SUSTech Store',
    url: 'https://github.com/WHALEEYE/SUSTech-Store-Backend',
    descriptions: [
      'A second-hand trading platform for SUSTech students.',
      'This is the course project of Object-Oriented Analysis and Design.',
    ],
  },
  {
    name: 'SPL Compiler',
    url: 'https://github.com/dandansamax/SPL-Compiler',
    descriptions: [
      'A compiler for SPL, which is short for SUSTech Programming Language.',
      'This is the course project of Compilers.',
    ],
  },
  {
    name: 'Hash Checker for Web Applications',
    url: 'https://github.com/WHALEEYE/Hash-Checker',
    descriptions: [
      'A lightweight plugin to detect pages containing Wasm and trace them to avoid threats like cryptocurrency mining.',
      'This is the course project of Computer Security.',
    ],
  },
];

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
  { name: 'Profile', href: '/profile' },
  // Hidden for now:
  // { name: "Articles", href: "/articles" },
  // { name: "Talks", href: "/talks" },
  // { name: "Friends", href: "/friends" },
];
