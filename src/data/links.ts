export interface LinkItem {
  id: string;
  label: string;
  url: string;
  description?: string;
  category: string;
  icon: string; // lucide icon name
  featured?: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", icon: "LayoutGrid" },
  { id: "portfolio", label: "Portfolio", icon: "Globe" },
  { id: "social", label: "Social", icon: "Users" },
  { id: "blog", label: "Blog", icon: "FileText" },
  { id: "coding", label: "Coding", icon: "Code2" },
  { id: "community", label: "Community", icon: "MessageSquare" },
];

export const LINKS: LinkItem[] = [
  {
    id: "portfolio",
    label: "Portfolio",
    url: "https://gouranga.eu.org",
    description: "My personal portfolio & projects showcase",
    category: "portfolio",
    icon: "Globe",
    featured: true,
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/GourangaDasSamrat",
    description: "Open-source code & repositories",
    category: "coding",
    icon: "Github",
    featured: true,
  },
  {
    id: "devto",
    label: "Dev.to",
    url: "https://dev.to/gouranga-das-khulna/",
    description: "Technical articles & tutorials",
    category: "blog",
    icon: "FileText",
    featured: true,
  },
  {
    id: "blog",
    label: "Blog",
    url: "https://blog.gouranga.eu.org",
    description: "Dev.to article aggregator — all posts in one place",
    category: "blog",
    icon: "Rss",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gouranga-das-samrat/",
    description: "Professional network & career updates",
    category: "social",
    icon: "Linkedin",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/gourangadassamrat/",
    description: "Personal Facebook page",
    category: "social",
    icon: "Facebook",
  },
  {
    id: "twitter",
    label: "Twitter / X",
    url: "https://x.com/Gouranga_Khulna/",
    description: "Tech thoughts & real-time updates",
    category: "social",
    icon: "Twitter",
  },
  {
    id: "bluesky",
    label: "Bluesky",
    url: "https://bsky.app/profile/gouranga-khulna.bsky.social",
    description: "Decentralised social — follow me on Bluesky",
    category: "social",
    icon: "CloudSun",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@GourangaDasSamrat",
    description: "Video tutorials & dev content",
    category: "social",
    icon: "Youtube",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    url: "https://leetcode.com/u/gourangadassamrat/",
    description: "DSA practice & problem-solving",
    category: "coding",
    icon: "BrainCircuit",
  },
  {
    id: "hackerrank",
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/gouranga_das_kh1",
    description: "Skills certification & challenges",
    category: "coding",
    icon: "Award",
  },
  {
    id: "discord",
    label: "Discord Server",
    url: "https://discord.gg/ByjVd6KZdV",
    description: "Join the community — chat, collaborate, grow",
    category: "community",
    icon: "MessageCircle",
    featured: true,
  },
  {
    id: "mail",
    label: "Email Me",
    url: "mailto:gouranga.samrat@gmail.com",
    description: "gouranga.samrat@gmail.com",
    category: "community",
    icon: "Mail",
  },
];

export const SITE_CONFIG = {
  name: "Zynkly",
  tagline: "All my links, one place.",
  description: "Developer · Creator · Problem Solver",
  username: "GourangaDasSamrat",
  location: "Khulna, Bangladesh",
  siteUrl: "https://bio.gouranga.eu.org",
  license: "MIT",
  avatarInitials: "GD",
};
