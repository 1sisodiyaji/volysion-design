"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Palette, Type, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Step3DesignSync = () => {
  const router = useRouter();
  const [primaryColor, setPrimaryColor] = useState("#00D9FF");
  const [headingFont, setHeadingFont] = useState("Syne");
  const [bodyFont, setBodyFont] = useState("DM Sans");

  const fontOptions = [
    "Syne",
    "DM Sans",
    "Inter",
    "Space Grotesk",
    "Playfair Display",
    "Use existing (Auto-detect)"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col w-full max-w-5xl mx-auto pt-6"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="px-3 py-1 text-[12px] font-medium rounded-full border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 mb-4 inline-block">
            Step 3 of 4 — Design & Brand Sync
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-[#F8FAFC]">
            Customize Frontend Theme
          </h1>
        </div>
        <Button 
          onClick={() => router.push('?step=4')}
          className="h-10 px-6"
        >
          Prepare Build
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        
        {/* Left Column Controls */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Colors Panel */}
          <div className="p-6 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] rounded-2xl flex flex-col gap-4">
            <h3 className="text-[16px] font-bold text-neutral-800 dark:text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-500" /> Brand Colors
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-neutral-500 dark:text-[#64748B]">Primary Accent</label>
                <div className="flex items-center gap-2">
                  <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-none bg-transparent" />
                  <span className="text-[13px] font-mono text-neutral-800 dark:text-[#F8FAFC]">{primaryColor}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-[12px] font-medium text-neutral-500 dark:text-[#64748B]">Secondary</label>
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#7C3AED] relative border border-neutral-200 dark:border-transparent"></div>
                    <span className="text-[13px] font-mono text-neutral-800 dark:text-[#F8FAFC]">#7C3AED</span>
                 </div>
              </div>
              {/* Other colors mocked out */}
            </div>
          </div>

          {/* Fonts Panel */}
          <div className="p-6 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] rounded-2xl flex flex-col gap-5">
            <h3 className="text-[16px] font-bold text-neutral-800 dark:text-white flex items-center gap-2">
              <Type className="w-5 h-5 text-blue-500" /> Typography
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-neutral-700 dark:text-[#F8FAFC]">Heading Font</label>
                <Select value={headingFont} onValueChange={setHeadingFont}>
                  <SelectTrigger className="w-full h-10 border-neutral-200 dark:border-[#1E293B] bg-neutral-50 dark:bg-[#111827]">
                    <SelectValue placeholder="Select heading font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontOptions.map(font => (
                      <SelectItem key={`h-${font}`} value={font}>{font}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-neutral-700 dark:text-[#F8FAFC]">Body Font</label>
                <Select value={bodyFont} onValueChange={setBodyFont}>
                  <SelectTrigger className="w-full h-10 border-neutral-200 dark:border-[#1E293B] bg-neutral-50 dark:bg-[#111827]">
                    <SelectValue placeholder="Select body font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontOptions.map(font => (
                      <SelectItem key={`b-${font}`} value={font}>{font}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Asset Panel */}
          <div className="p-6 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] rounded-2xl flex flex-col gap-4">
            <h3 className="text-[16px] font-bold text-neutral-800 dark:text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-500" /> Assets
            </h3>
            <div className="w-full h-24 rounded-xl border-2 border-dashed border-neutral-300 dark:border-[#1E293B] flex-col flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer group">
              <Upload className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 mb-2 transition-colors" />
              <span className="text-[13px] text-neutral-500 dark:text-[#64748B]">Upload Logo (SVG or PNG)</span>
            </div>
          </div>

        </div>

        {/* Right Column Output Preview */}
        <div className="p-6 bg-neutral-50 dark:bg-[#111827] border border-neutral-200 dark:border-[#1E293B] rounded-2xl flex flex-col sticky top-6 self-start min-h-[400px]">
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-neutral-500 mb-6">Live Preview</h3>
          
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 decoration-clone" style={{fontFamily: headingFont !== 'Use existing (Auto-detect)' ? headingFont : 'inherit'}}>
                Welcome to {process.env.NEXT_PUBLIC_APP_NAME}
              </h2>
              <p className="text-[15px] text-neutral-600 dark:text-[#94A3B8] leading-relaxed" style={{fontFamily: bodyFont !== 'Use existing (Auto-detect)' ? bodyFont : 'inherit'}}>
                This is a preview of your brand applied to the new headless frontend components. The architecture ensures 100/100 Lighthouse scores while preserving your design system constraints.
              </p>
            </div>
            
            <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
              <Button className="h-10 px-6 font-bold text-[14px] text-white shadow-md shadow-blue-500/20" style={{ backgroundColor: primaryColor }}>
                Primary Action
              </Button>
            </div>

            {/* Design Metrics */}
            <div className="mt-auto pt-6 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-transparent shadow-sm">
                <div className="text-[11px] text-neutral-500 uppercase font-medium">Headings</div>
                <div className="text-[13px] font-bold text-neutral-900 dark:text-white mt-0.5">{headingFont}</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-transparent shadow-sm">
                <div className="text-[11px] text-neutral-500 uppercase font-medium">Primary Hue</div>
                <div className="text-[13px] font-bold text-neutral-900 dark:text-white mt-0.5">{primaryColor}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
