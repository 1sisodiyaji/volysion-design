"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Globe, AlertCircle, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Step1Connection = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const handleAnalyze = () => {
    if (!url) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    
    // Simulate detecting a failure first for the UI shake requirement,
    // or if the URL doesn't contain "wp"
    setTimeout(() => {
      if (!url.includes("wp") && !url.includes("wordpress") && url !== "test") {
        setStatus("error");
      } else {
        setStatus("success");
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto w-full pt-10">
      <span className="px-3 py-1 text-[12px] font-medium rounded-full border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 mb-6">
        Step 1 of 4 — Connect Your Site
      </span>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-[#F8FAFC] mb-3 text-center">
        Connect Your WordPress Website
      </h1>
      <p className="text-neutral-500 dark:text-[#64748B] text-[15px] text-center mb-10 max-w-lg">
        Enter your live WordPress site URL. We'll automatically verify REST APIs and WPGraphQL endpoints.
      </p>

      {/* URL Input Form */}
      <div className="w-full relative">
        <motion.div 
          animate={status === "error" ? { x: [-6, 6, -6, 6, 0] } : {}}
          transition={{ duration: 0.3 }}
          className={`flex items-center w-full h-[56px] rounded-xl border-2 bg-white dark:bg-[#111827] px-4 shadow-sm transition-colors ${
            status === "error" 
              ? "border-red-500 ring-4 ring-red-500/10" 
              : status === "success" 
                ? "border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
                : "border-neutral-200 dark:border-[#1E293B] focus-within:border-blue-500 dark:focus-within:border-[#00D9FF] focus-within:ring-4 focus-within:ring-blue-500/10 dark:focus-within:ring-[#00D9FF]/10"
          }`}
        >
          <Globe className={`w-5 h-5 mr-3 shrink-0 ${status === "error" ? "text-red-500" : "text-neutral-400 dark:text-[#475569]"}`} />
          <Input 
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if(status === "error") setStatus("idle");
            }}
            placeholder="https://yourwebsite.com"
            className="flex-1 bg-transparent border-none outline-none shadow-none focus-visible:ring-0 px-0 text-neutral-800 dark:text-[#F8FAFC] placeholder:text-neutral-400 dark:placeholder:text-[#475569] font-mono text-[14px]"
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
          />
          <Button 
            onClick={handleAnalyze}
            disabled={status === "loading"}
            className="ml-2 h-9"
          >
            {status === "loading" ? <><Loader2 className="w-4 h-4 mr-2 animate-spin"/>Scanning</> : "Analyze"}
          </Button>
        </motion.div>

        {/* Error Message */}
        {status === "error" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mt-3 text-red-500 text-[13px] font-medium px-1">
            <AlertCircle className="w-4 h-4" />
            Unable to connect. Please check the URL or ensure WordPress is publicly accessible. (Hint: Try adding 'wp' into URL to bypass)
          </motion.div>
        )}
      </div>

      {/* Detection Indicators */}
      {status !== "idle" && status !== "error" && (
        <div className="w-full mt-8 p-6 bg-white dark:bg-[#111827] border border-neutral-200 dark:border-[#1E293B] rounded-2xl flex flex-col gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
          <IndicatorRow 
            label="WordPress CMS Detected" 
            state={status === "loading" ? "loading" : "success"}
            delay={0}
          />
          <IndicatorRow 
            label="REST API Accessibility" 
            state={status === "loading" ? "loading" : "success"}
            delay={0.2}
          />
          <IndicatorRow 
            label="WPGraphQL Endpoint" 
            state={status === "loading" ? "pending" : "success"}
            delay={0.4}
            optional
          />
        </div>
      )}

      {/* Success State Overlay */}
      {status === "success" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full mt-8 p-6 bg-green-50 dark:bg-green-500/10 border-2 border-green-500/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
          </div>
          <h3 className="text-green-800 dark:text-green-400 font-bold text-lg mb-1">Site Ready to Migrate!</h3>
          <p className="text-green-600 dark:text-green-500/80 text-[14px] text-center mb-6">
            WordPress v6.4 • 142 Posts • 12 Pages
          </p>
          <Button 
            onClick={() => router.push('?step=2')}
            className="w-full max-w-[200px] h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-transform active:scale-95 shadow-md flex items-center justify-center"
          >
            Continue to Mapping
          </Button>
        </motion.div>
      )}
    </div>
  );
};

const IndicatorRow = ({ label, state, delay, optional = false }: { label: string; state: "pending" | "loading" | "success" | "error"; delay: number; optional?: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        {state === "pending" && <div className="w-5 h-5 rounded-full border-2 border-neutral-200 dark:border-[#374151]" />}
        {state === "loading" && <Loader2 className="w-5 h-5 text-blue-500 dark:text-[#00D9FF] animate-spin" />}
        {state === "success" && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay }}>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </motion.div>
        )}
        <span className={`text-[14px] font-medium ${state === "success" ? "text-neutral-900 dark:text-[#F8FAFC]" : "text-neutral-500 dark:text-[#94A3B8]"}`}>
          {label}
        </span>
      </div>
      {optional && <span className="text-[12px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-[#1E293B] text-neutral-500 dark:text-[#64748B]">Optional</span>}
    </motion.div>
  );
};
