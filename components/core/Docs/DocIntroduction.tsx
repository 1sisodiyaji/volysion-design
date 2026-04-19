"use client";

import { motion } from "motion/react";
import { ArrowRight, LightbulbIcon } from "lucide-react";

export function DocIntroduction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-4 text-[#00D9FF] text-sm font-bold uppercase tracking-widest">
        Getting Started
      </div>
      <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-[#F8FAFC] font-syne mb-6">
        Introduction to WPShift
      </h1>
      
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
        Welcome to WPShift's documentation. Our engine transforms your legacy WordPress
        installation into a blazing-fast decoupled frontend powered by React (Next.js) or Astro.
      </p>

      <div className="bg-[#0A0F1E] border border-[#1E293B] p-6 rounded-xl flex gap-4 my-8 shadow-lg">
        <LightbulbIcon className="w-8 h-8 text-[#00D9FF] shrink-0" />
        <div>
          <h3 className="font-semibold text-white mb-2">Core Concept</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Headless WordPress means your CMS (WordPress) acts solely as a content database via APIs
            (REST/GraphQL). WPShift pulls this data during build-time or runtime to serve static or dynamic pages seamlessly without slow PHP renders.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-neutral-900 dark:text-[#F8FAFC]">
        Prerequisites
      </h2>
      <ul className="space-y-3 mb-8 text-neutral-700 dark:text-neutral-300">
        <li className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-[#00D9FF]" />
          A functioning WordPress installation (v5.8+)
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-[#00D9FF]" />
          Admin access to install the WPShift Bridge Plugin
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-[#00D9FF]" />
          Basic understanding of Node.js if utilizing custom templates
        </li>
      </ul>
    </motion.div>
  );
}
