"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function DocDeployment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-4 text-[#10B981] text-sm font-bold uppercase tracking-widest">
        CI/CD & Delivery
      </div>
      <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-[#F8FAFC] font-syne mb-6">
        Deploying to Vercel
      </h1>
      
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
        Once WPShift compiles your React Next.js architecture, you're ready to deploy to Vercel
        to take advantage of their global edge networks.
      </p>

      <div className="bg-[#1E293B] border border-[#334155] rounded-lg overflow-hidden my-8">
        <div className="bg-[#0F172A] px-4 py-2 flex items-center gap-2 border-b border-[#334155]">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-neutral-400 text-xs ml-4 font-mono">terminal</span>
        </div>
        <div className="p-6 font-mono text-sm text-neutral-300">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-pink-500">$</span>
            <span className="text-white">npm run build</span>
          </div>
          <div className="text-neutral-500 mb-2"># WPShift checks WordPress endpoints...</div>
          <div className="text-emerald-400 mb-2">&gt; Fetched 252 posts in 0.4s</div>
          <div className="text-emerald-400 mb-2">&gt; Optimized 14 pages</div>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-pink-500">$</span>
            <span className="text-white">vercel --prod</span>
          </div>
          <div className="text-[#00D9FF] mt-2">Vercel CLI 32.0.0</div>
          <div className="text-white mt-1">Deploying wpshift-frontend to production...</div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-neutral-900 dark:text-[#F8FAFC]">
        Webhooks
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
        To keep your site completely autonomous, install the WPShift Webhook trigger in your WordPress backend.
        Whenever an author clicks "Publish" or "Update" on a blog post, a silent ping is sent to Vercel, securely rebuilding 
        only that specific page dynamically (ISR). Your frontend remains impossibly fast and perfectly synced.
      </p>
    </motion.div>
  );
}
