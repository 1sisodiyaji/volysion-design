"use client";

import Scales from "@/components/ui/scales";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import CommonBorder from "@/components/common/CommonBorder";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Migrating to a headless setup gave us the 100/100 Lighthouse score we thought was impossible for our content-heavy site. Our core web vitals are flawless.",
      name: "Sarah Jenkins",
      title: "CTO, TechDaily",
    },
    {
      quote: "We didn't want to retrain our editorial team. WPShift let us keep the familiar WordPress dashboard while entirely replacing the outdated PHP frontend.",
      name: "Marcus Aurelius",
      title: "Lead Developer, NovaLabs",
    },
    {
      quote: "The combination of static generation through Astro and edge caching has reduced our server costs by 70%, and TTFB is virtually instant everywhere.",
      name: "Elena Rodriguez",
      title: "Founder, Zenith Media",
    },
    {
      quote: "Our organic traffic has seen a massive 40% uplift simply because Google started scoring our Core Web Vitals as 'Good' across the board.",
      name: "David Chen",
      title: "VP of Engineering, MarketFlow",
    },
    {
      quote: "Going headless seemed daunting at first, but this migration platform basically automated the hardest parts. Incredible developer experience.",
      name: "Olivia Trent",
      title: "Freelance WordPress Developer",
    }
  ];

  return (
    <CommonBorder className="bg-neutral-50 dark:bg-[#080808] flex flex-col">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
          Trusted by Innovative Teams
        </h2>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
          Hear from the developers and technical leaders who have already made the switch.
        </p>
      </div>

      <div className="pt-10 max-w-7xl mx-auto flex justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </CommonBorder>
  );
};
