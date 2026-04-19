"use client";

import CommonBorder from "@/components/common/CommonBorder";
import { NoiseBackground } from "@/components/ui/noise-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
export const FinalCTASection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
     <NoiseBackground
      containerClassName="max-w-page container mx-auto md:my-36 my-24"
      gradientColors={[
        "rgb(255, 100, 150)",
        "rgb(100, 150, 255)",
        "rgb(255, 200, 100)",
      ]}
    >
    <div className="bg-white dark:bg-black flex flex-col md:py-32 py-24 relative overflow-hidden">
      {/* Aceternity Sparkles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        {mounted && (
          <>
            {/* Light Mode Sparkles */}
            <div className="w-full h-full block dark:hidden absolute inset-0">
              <SparklesCore
                id="tsparticlesctaLight"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={15}
                className="w-full h-full"
                particleColor="#000000"
              />
            </div>
            {/* Dark Mode Sparkles */}
            <div className="w-full h-full hidden dark:block absolute inset-0">
              <SparklesCore
                id="tsparticlesctaDark"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={15}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
          </>
        )}
        {/* Fading mask so sparkles blend gracefully radially */}
        <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_0%,black_100%)]"></div>
        {/* Subtle colored glow overlay similar to previous glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-[#00D9FF]/10 dark:to-[#7C3AED]/15 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <span className="px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-blue-600 dark:text-[#00D9FF] text-sm font-bold tracking-wide uppercase mb-8 inline-block shadow-sm relative overflow-hidden">
          <span className="relative z-10">Start Your Migration</span>
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
          <span className="text-neutral-800 dark:text-white">Ready to go </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#00D9FF] dark:to-[#7C3AED]">
            headless?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-[#94A3B8] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Join thousands of modern technical teams who have upgraded their WordPress stack for extreme performance and uncompromised security.
        </p>

        <div className="flex items-center gap-4">
              <NoiseBackground
              containerClassName="w-fit p-1 rounded-full"
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <button className="h-full w-full flex items-center gap-2 cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-6 py-3 text-xl font-medium text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                Start Free Scan
              </button>
            </NoiseBackground>
            </div>

        <p className="mt-6 text-sm font-medium text-neutral-500 dark:text-[#64748B]">
          Free forever for solo developers. No credit card required.
        </p>
      </motion.div>

    </div>
    </NoiseBackground>
  );
};
