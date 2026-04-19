"use client";

import { motion } from "motion/react";
import { Database, Server, MonitorSmartphone } from "lucide-react";

export function DocArchitecture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-4 text-[#7C3AED] text-sm font-bold uppercase tracking-widest">
        System Design
      </div>
      <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-[#F8FAFC] font-syne mb-6">
        Headless Architecture
      </h1>
      
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
        Understanding how data flows between your monolithic WordPress server and your
        edge-deployed client application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-[45%] left-0 w-full h-[2px] bg-gradient-to-r from-neutral-200 to-neutral-200 dark:from-neutral-800 dark:to-neutral-800 -z-10" />
        
        <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-200 dark:border-blue-500/30">
            <Database className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-white mb-2">WordPress DB</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manages your authors, posts, taxonomy, and plugins.
          </p>
        </div>

        <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex flex-col items-center text-center uppercase shadow-lg shadow-purple-500/10 border-t-4 border-t-[#7C3AED]">
          <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-500/30">
            <Server className="w-7 h-7 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-white mb-2">WPShift Edge</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 lowercase">
            Ingests API content, maps routes, and renders pages into HTML/JSON payloads.
          </p>
        </div>

        <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-500/30">
            <MonitorSmartphone className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Client Browser</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Receives ultra-fast edge files. No server generation delay.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
