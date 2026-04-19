"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { Rocket, Box, CheckCircle2, LayoutTemplate, ShoppingCart, UserCheck, Megaphone, FileText, LayoutDashboard, Globe } from "lucide-react";

export const TechStackSection = () => {

  const nextJsFeatures = [
    "Server-side rendering for dynamic content",
    "Built-in image & font optimization",
    "Incremental static regeneration (ISR)",
    "Powerful backend API integrations",
    "Seamless deployment on global edge networks"
  ];

  const nextJsUseCases = [
    { label: "SaaS websites", icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: "Online stores", icon: <ShoppingCart className="w-4 h-4" /> },
    { label: "Interactive web apps", icon: <Box className="w-4 h-4" /> },
    { label: "Membership platforms", icon: <UserCheck className="w-4 h-4" /> }
  ];

  const astroFeatures = [
    "Zero JavaScript shipped to client by default",
    "Islands Architecture for partial hydration",
    "Extremely lightweight static HTML output",
    "Exceptional 100/100 Lighthouse scores",
    "Supports React, Vue, Svelte components"
  ];

  const astroUseCases = [
    { label: "Marketing websites", icon: <Megaphone className="w-4 h-4" /> },
    { label: "Content Blogs", icon: <FileText className="w-4 h-4" /> },
    { label: "Documentation sites", icon: <LayoutTemplate className="w-4 h-4" /> },
    { label: "Portfolio websites", icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#080808] text-white overflow-hidden font-manrope">
      
      {/* Sparkles Background for Title */}
      <div className="absolute inset-x-0 top-0 h-[400px] w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Fading mask so sparkles blend into the dark background */}
        <div className="absolute inset-0 bg-[#080808] [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 leading-tight pb-2">
            Modern Frontend Technologies <br className="hidden md:block"/> Built for Performance
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            We don't believe in one-size-fits-all. Choose the ultimate headless architecture that perfectly aligns with your website's goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Next.js Card */}
          <BackgroundGradient 
             containerClassName="h-full" 
             className="rounded-[22px] bg-neutral-900 border border-neutral-800 p-8 sm:p-10 h-full flex flex-col relative overflow-hidden"
             fromColor="#0070f3" /* Next.js typical blue accent */
             viaColor="#111111"
             toColor="#00c6ff"
          >
             {/* Decorative faint grid in background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

             <div className="flex items-center gap-4 mb-6 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-black border border-neutral-700 flex justify-center items-center shadow-[0_0_15px_rgba(0,112,243,0.3)]">
                 <svg aria-label="Next.js logomark" className="w-8 h-8" role="img" viewBox="0 0 180 180" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180ZM62.7766 53.0729C60.4027 53.0729 58.4786 54.997 58.4786 57.3709V124.965C58.4786 127.339 60.4027 129.263 62.7766 129.263C65.1505 129.263 67.0746 127.339 67.0746 124.965V64.0881L114.341 127.766C115.531 129.368 117.388 130.34 119.385 130.34C122.392 130.34 124.83 127.902 124.83 124.895V57.3709C124.83 54.997 122.906 53.0729 120.532 53.0729C118.158 53.0729 116.234 54.997 116.234 57.3709V116.326L70.8354 55.4497C69.6457 53.8475 67.7885 52.875 65.7915 52.875C64.7171 52.875 63.693 52.9463 62.7766 53.0729Z" fill="white"></path></svg>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white">Next.js</h3>
                  <p className="text-blue-400 font-medium text-sm">Dynamic Web Applications</p>
               </div>
             </div>

             <p className="text-neutral-400 mb-8 relative z-10 leading-relaxed">
               Perfect for websites that require advanced functionality, dynamic user states, and complex routing architectures.
             </p>

             <div className="mb-8 relative z-10">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">Technical Features</h4>
                <ul className="space-y-3">
                  {nextJsFeatures.map((feat, i) => (
                    <li key={`next-feat-${i}`} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-[15px]">{feat}</span>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="mt-auto relative z-10">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">Best Suited For</h4>
                <div className="grid grid-cols-2 gap-3">
                   {nextJsUseCases.map((useCase, i) => (
                     <div key={`next-use-${i}`} className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-400">
                       <span className="text-neutral-500">{useCase.icon}</span>
                       <span className="truncate">{useCase.label}</span>
                     </div>
                   ))}
                </div>
             </div>
          </BackgroundGradient>

          {/* Astro Card */}
          <BackgroundGradient 
             containerClassName="h-full" 
             className="rounded-[22px] bg-neutral-900 border border-neutral-800 p-8 sm:p-10 h-full flex flex-col relative overflow-hidden"
             fromColor="#ff5d01" /* Astro typical orange/purple accent */
             viaColor="#111111"
             toColor="#b235ff"
          >
             {/* Decorative faint grid in background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

             <div className="flex items-center gap-4 mb-6 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-black border border-neutral-700 flex justify-center items-center shadow-[0_0_15px_rgba(255,93,1,0.3)]">
                 <Rocket className="w-8 h-8 text-orange-500" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white">Astro</h3>
                  <p className="text-orange-400 font-medium text-sm">Ultra-Fast Static Websites</p>
               </div>
             </div>

             <p className="text-neutral-400 mb-8 relative z-10 leading-relaxed">
               Delivers extreme performance by generating optimized static pages and sending almost zero JavaScript to the browser.
             </p>

             <div className="mb-8 relative z-10">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">Technical Features</h4>
                <ul className="space-y-3">
                  {astroFeatures.map((feat, i) => (
                    <li key={`astro-feat-${i}`} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-[15px]">{feat}</span>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="mt-auto relative z-10">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">Best Suited For</h4>
                <div className="grid grid-cols-2 gap-3">
                   {astroUseCases.map((useCase, i) => (
                     <div key={`astro-use-${i}`} className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-400">
                       <span className="text-neutral-500">{useCase.icon}</span>
                       <span className="truncate">{useCase.label}</span>
                     </div>
                   ))}
                </div>
             </div>
          </BackgroundGradient>

        </div>
      </div>
    </section>
  );
};
