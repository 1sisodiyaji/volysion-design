"use client";

import CommonBorder from "@/components/common/CommonBorder";
import { HoverEffect } from "@/components/ui/hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Blocks, Zap, ShieldAlert, Activity, CheckCircle, FileCode2, GaugeCircle, Cloud, ArrowRight, LayoutTemplate, Box } from "lucide-react";

export const PerformanceGapSection = () => {

  const problemItems = [
    {
      title: "Plugin Overload",
      description: "Third-party plugins dramatically increase script execution and external database calls, crippling load times.",
      icon: <Blocks className="w-8 h-8 opacity-80" />
    },
    {
      title: "Slow Server Response (TTFB)",
      description: "Heavy PHP rendering and synchronous database queries must execute sequentially before a single pixel loads.",
      icon: <GaugeCircle className="w-8 h-8 opacity-80" />
    },
    {
      title: "Security Vulnerabilities",
      description: "Exposing the entire frontend and backend publicly makes traditional WordPress a prime target for automated attacks.",
      icon: <ShieldAlert className="w-8 h-8 opacity-80 text-orange-500" />
    },
    {
      title: "Poor Core Web Vitals",
      description: "Heavy legacy themes negatively impact crucial Google ranking signals, reducing your organic search visibility.",
      icon: <Activity className="w-8 h-8 opacity-80 text-red-500" />
    },
    {
      title: "Security Vulnerabilities here",
      description: "Exposing the entire frontend and backend publicly makes traditional WordPress a prime target for automated attacks.",
      icon: <ShieldAlert className="w-8 h-8 opacity-80 text-orange-500" />
    },
    {
      title: "Poor Core Web Vitals here",
      description: "Heavy legacy themes negatively impact crucial Google ranking signals, reducing your organic search visibility.",
      icon: <Activity className="w-8 h-8 opacity-80 text-red-500" />
    }
  ];

  const solutionSteps = [
    {
      title: "WordPress Stays as Your CMS",
      description: "You keep the familiar dashboard. Your marketing and editorial teams continue publishing content exactly the way they do today, with zero new learning curves.",
      icon: <LayoutTemplate className="w-6 h-6 text-green-500" />
    },
    {
      title: "Frontend Rebuilt as Static/Hybrid",
      description: "Instead of rendering pages via slow PHP paths, your site becomes a lightning-fast modern application powered by Next.js or Astro.",
      icon: <FileCode2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Content Handled via Native APIs",
      description: "Data is securely fetched from WordPress in the background using REST API or WPGraphQL, fully abstracting your database from public access.",
      icon: <Box className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Global Edge Network Deployment",
      description: "Your modern frontend is compiled and deployed across global edge networks (like Vercel), serving instant cached pages to visitors anywhere in the world.",
      icon: <Cloud className="w-6 h-6 text-cyan-500" />
    }
  ];

  return (
    <CommonBorder className="bg-neutral-50 dark:bg-[#080808] flex flex-col">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100 leading-tight">
          Why Traditional WordPress Sites Are <span className="text-red-500">Slower</span> Than They Should Be
        </h2>
        <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Many websites suffer from performance, caching, and security issues caused by architectural limitations of the legacy stack.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <HoverEffect items={problemItems} />
      </div>

      {/* Transition Spacer */}
      <div className="text-center flex flex-col items-center">
        <div className="h-48 w-px bg-gradient-to-b from-transparent via-neutral-400 dark:via-neutral-600 to-transparent"></div>
        <div className="inline-flex items-center justify-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-8 py-4 rounded-full mt-4 shadow-xl">
          <span className="font-bold text-lg text-neutral-800 dark:text-neutral-100 flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            The Solution: Decouple Your Frontend <ArrowRight className="w-5 h-5 ml-2 text-green-500" />
          </span>
        </div>
        <div className="h-48 w-px bg-gradient-to-b from-transparent via-neutral-400 dark:via-neutral-600 to-transparent"></div>
      </div>

      {/* Solution Tracing Beam */}
      <TracingBeam className="px-2 md:px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 pb-12 relative">
          {solutionSteps.map((item, index) => (
            <div key={`step-${index}`} className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-neutral-900 shadow-sm rounded-xl border border-neutral-200 dark:border-neutral-800 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-[17px] md:text-lg leading-relaxed md:ml-[72px]">
                {item.description}
              </p>
            </div>
          ))}

          <div className="md:ml-[72px] mt-16 p-8 bg-green-500/10 border border-green-500/20 rounded-2xl relative overflow-hidden backdrop-blur-sm">
            {/* Subtle glow inside the result box */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-green-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <h4 className="text-green-800 dark:text-green-400 font-extrabold text-xl mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> The Result
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-neutral-800 dark:text-neutral-200 font-semibold text-lg">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Faster Load Times</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Enhanced Security</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> Easier to Scale</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> SEO Optimized</li>
            </ul>
          </div>
        </div>
      </TracingBeam>
    </CommonBorder>
  );
};