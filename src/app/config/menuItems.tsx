import { MenuItem } from "../../components/types";
import {
  AnnotationIcon,
  VideoCameraIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  ChatAlt2Icon,
  PresentationChartBarIcon,
  InformationCircleIcon,
  CogIcon,
  PencilAltIcon,
  ClipboardListIcon,
  MailIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

export const services: MenuItem[] = [
  {
    title: "Website Design",
    href: "/services/website-design",
    description: "Beautiful and functional website designs.",
    icon: <DeviceMobileIcon />,
  },
  {
    title: "SEO Optimization",
    href: "/services/seo-optimization",
    description: "Improve your website's search engine rankings.",
    icon: <ChartSquareBarIcon />,
  },
  {
    title: "Chat GPT Integration",
    href: "/services/chat-gpt-integration",
    description: "Integrate Chat GPT into your services.",
    icon: <ChatAlt2Icon />,
  },

  {
    title: "Social Media Management",
    href: "/services/social-media-management",
    description: "Effective management of your social media presence.",
    icon: <AnnotationIcon />,
  },
  // {
  //   title: "Video Production",
  //   href: "/services/video-production",
  //   description: "High-quality video production for your brand.",
  //   icon: <VideoCameraIcon />,
  // },
  {
    title: "A/B Testing & Ads Management",
    href: "/services/ab-testing-ads-management",
    description: "Optimize your ads with A/B testing.",
    icon: <PresentationChartBarIcon />,
  },
];

export const menuItems: MenuItem[] = [
  {
    title: "About Us",
    href: "/about-us",
    icon: <InformationCircleIcon />,
  },

  {
    title: "Blog",
    href: "/pages/blog-gallery/1",
    description: "Latest updates and stories.",
    icon: <PencilAltIcon />,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: <MailIcon />,
  },
];
