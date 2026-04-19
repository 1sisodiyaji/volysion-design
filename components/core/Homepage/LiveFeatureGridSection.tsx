"use client";

import CommonBorder from "@/components/common/CommonBorder";
import { HoverEffect } from "@/components/ui/hover-effect";
import Scales from "@/components/ui/scales";
import { Search, Image as ImageIcon, ShieldCheck, CheckCircle2, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export const LiveFeatureGridSection = () => {
  const features = [
    {
      id: "seo",
      title: "SEO Porting",
      description: "All major SEO settings are automatically migrated during the transformation process. Your search rankings remain intact.",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      iconBg: "bg-blue-100 dark:bg-blue-500/10",
      hoverBorder: "group-hover:border-blue-500/50",
      badges: ["Yoast SEO", "RankMath", "All in One SEO"],
      list: [
        "Meta titles & descriptions",
        "Open Graph tags",
        "Canonical URLs",
        "XML sitemap compatibility"
      ],
    },
    {
      id: "image",
      title: "Image Optimization",
      description: "Images are automatically optimized into modern formats, drastically reducing file size without losing quality.",
      icon: <ImageIcon className="w-8 h-8 text-yellow-500" />,
      iconBg: "bg-yellow-100 dark:bg-yellow-500/10",
      hoverBorder: "group-hover:border-yellow-500/50",
      badges: [],
      stat: "WebP + AVIF",
      list: [
        "Responsive image sizes",
        "Lazy loading support",
        "Global CDN delivery",
        "Improved page load speed"
      ],
    },
    {
      id: "security",
      title: "Hardened Security",
      description: "A headless architecture drastically reduces attack surfaces. Serving static files means no PHP exposure.",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      iconBg: "bg-green-100 dark:bg-green-500/10",
      hoverBorder: "group-hover:border-green-500/50",
      badges: [],
      stat: "Attack surface ↓ 90%",
      statColor: "text-green-600 dark:text-green-400",
      list: [
        "Isolated WordPress backend",
        "No direct PHP exposure",
        "CDN edge security layers",
        "Protection from plugin attacks"
      ],
    }
  ];

  return (
    <CommonBorder className="bg-neutral-50 dark:bg-[#080808] flex flex-col">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-neutral-800 dark:text-neutral-100">
          Everything Migrates.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Nothing Breaks.
          </span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mx-auto">
          Our migration system ensures that the most important elements of your WordPress site are preserved while seamlessly upgrading your architecture.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <HoverEffect items={features} />
      </div>
    </CommonBorder>
  );
};
