"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Rocket, Terminal, CheckCircle2, Package, Server, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Step4Deploy = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const buildLogs = [
    "> Initializing build environment...",
    "> Fetching WPGraphQL schema...",
    "> Resolving dependencies...",
    "> Generating static pages...",
    "> Optimizing 543 media assets...",
    "> Building serverless functions...",
    "> Compiling Next.js application...",
    "✓ Build success [32s]",
    "> Deploying to Edge Network...",
    "✓ Deployment live!"
  ];

  useEffect(() => {
    // Simulate streaming build logs and progress ring
    if (progress >= 100) return;

    const timer = setInterval(() => {
      setProgress(p => {
        const next = Math.min(p + (Math.random() * 8 + 2), 100);
        // Push a log roughly corresponding to progress
        const logIndex = Math.min(Math.floor((next / 100) * buildLogs.length), buildLogs.length - 1);
        
        if (logs.length < logIndex + 1) {
          setLogs(prev => [...prev, buildLogs[logIndex]]);
        }
        
        return next;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [progress, logs, buildLogs]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center w-full max-w-2xl mx-auto pt-6"
    >
      <span className="px-3 py-1 text-[12px] font-medium rounded-full border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 mb-6">
        Step 4 of 4 — Generate & Deploy
      </span>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-[#F8FAFC] mb-12 text-center">
        {progress >= 100 ? "Your Site is Live!" : "Building Production App..."}
      </h1>

      {/* Progress Ring */}
      <div className="relative flex items-center justify-center mb-12">
        <svg width="200" height="200" viewBox="0 0 200 200" className="rotate-[-90deg]">
          <circle 
            cx="100" cy="100" r="90" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            className="text-neutral-200 dark:text-[#1E293B]" 
          />
          <motion.circle 
            cx="100" cy="100" r="90" 
            fill="none" 
            stroke="url(#progressGradient)" 
            strokeWidth="8" 
            strokeLinecap="round"
            strokeDasharray="565.48"
            strokeDashoffset={565.48 - (565.48 * progress) / 100}
            className="transition-all duration-300 relative z-10"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          {progress >= 100 ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </motion.div>
          ) : (
            <>
              <span className="text-4xl font-extrabold text-neutral-900 dark:text-white font-syne opacity-90 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-[#00D9FF] dark:to-[#7C3AED]">
                {Math.floor(progress)}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Deployment Targets (Mocked) */}
      <div className="w-full grid grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-500/10 dark:border-[#00D9FF]">
          <Server className="w-6 h-6 text-neutral-800 dark:text-white mb-2" />
          <span className="text-[12px] font-bold text-neutral-800 dark:text-white">Vercel Edge</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 dark:border-white/10 dark:bg-white/[0.02] opacity-50 grayscale cursor-not-allowed">
          <Code className="w-6 h-6 text-neutral-800 dark:text-white mb-2" />
          <span className="text-[12px] font-bold text-neutral-800 dark:text-white">Netlify</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 dark:border-white/10 dark:bg-white/[0.02] opacity-50 grayscale cursor-not-allowed">
          <Package className="w-6 h-6 text-neutral-800 dark:text-white mb-2" />
          <span className="text-[12px] font-bold text-neutral-800 dark:text-white">Cloudflare</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="w-full bg-[#0A0F1E] border border-[#1E293B] rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B] bg-[#111827]">
          <Terminal className="w-4 h-4 text-[#94A3B8]" />
          <span className="text-[12px] font-medium text-[#94A3B8] font-mono">Build Console</span>
        </div>
        <div className="p-4 h-[180px] overflow-y-auto font-mono text-[13px] flex flex-col gap-1">
          {logs.map((log, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className={log.includes("✓") ? "text-[#10B981]" : log.includes("Error") ? "text-[#EF4444]" : "text-[#F8FAFC]"}
            >
              {log}
            </motion.div>
          ))}
          {progress < 100 && (
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="w-2 h-4 bg-[#00D9FF] mt-1"
            />
          )}
        </div>
      </div>
      
      {/* Final Action */}
      {progress >= 100 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
          <Button className="h-12 px-8 rounded-full font-bold text-[15px] shadow-[0_4px_24px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-transform hover:scale-105">
            View Live Site <Rocket className="w-4 h-4" />
          </Button>
        </motion.div>
      )}

    </motion.div>
  );
};
