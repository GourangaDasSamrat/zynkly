import {
  Globe,
  GitBranch,
  FileText,
  Rss,
  Network,
  Share2,
  AtSign,
  BrainCircuit,
  Award,
  MessageCircle,
  Mail,
  Code2,
  Users,
  LayoutGrid,
  MessageSquare,
  CloudSun,
  ArrowUpRight,
  Search,
  Sun,
  Moon,
  Monitor,
  MapPin,
  ExternalLink,
  Feather,
  Video,
  Bird,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// Map the icon name strings used in links.ts → actual Lucide components
// (lucide-react v0.511 removed branded icons; using semantic equivalents)
const iconMap: Record<string, React.FC<LucideProps>> = {
  // brands → semantic equivalents
  Github: GitBranch,
  Linkedin: Network,
  Facebook: Share2,
  Twitter: Bird,
  Youtube: Video,

  // general
  Globe,
  FileText,
  Rss,
  AtSign,
  BrainCircuit,
  Award,
  MessageCircle,
  Mail,
  Code2,
  Users,
  LayoutGrid,
  MessageSquare,
  CloudSun,
  ArrowUpRight,
  Search,
  Sun,
  Moon,
  Monitor,
  MapPin,
  ExternalLink,
  Feather,

  // pass-through aliases
  GitBranch,
  Network,
  Share2,
  Bird,
  Video,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Globe;
  return <Icon {...props} />;
}
