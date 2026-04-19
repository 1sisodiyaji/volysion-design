"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Menu, Database, Server, Compass } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "@/components/common/ThemeToggler";
import { motion, AnimatePresence } from "motion/react";
import Scales from "@/components/ui/scales";

import { DocIntroduction } from "@/components/core/Docs/DocIntroduction";
import { DocArchitecture } from "@/components/core/Docs/DocArchitecture";
import { DocDeployment } from "@/components/core/Docs/DocDeployment";

export default function DocsPage() {
  const [open, setOpen] = useState(true);
  const [activeChapter, setActiveChapter] = useState(1);

  const renderContent = () => {
    switch (activeChapter) {
      case 1: return <DocIntroduction />;
      case 2: return <DocArchitecture />;
      case 3: return <DocDeployment />;
      default: return <DocIntroduction />;
    }
  };

  const chapters = [
    { id: 1, label: "Introduction", icon: <Compass className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover/sidebar:text-[#00D9FF]" /> },
    { id: 2, label: "Architecture", icon: <Database className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover/sidebar:text-[#7C3AED]" /> },
    { id: 3, label: "Deployment", icon: <Server className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover/sidebar:text-[#10B981]" /> },
  ];

  return (
    <div className="flex  w-full min-h-screen bg-white dark:bg-[#0A0F1E] font-manrope">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-[95svh]">
          <div className="flex flex-col flex-1 gap-6 overflow-y-auto overflow-x-hidden">
            <div className="flex items-center gap-3 mb-10 px-2 mt-4">
              <button onClick={() => setOpen(!open)} className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white transition-colors shrink-0 flex items-center justify-center p-1 rounded-md">
                <Menu className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="overflow-hidden">
                    <Link href="/" className="inline-flex items-center gap-2 group font-manrope">
                      <span className="font-montserrat font-bold text-[18px] tracking-tight text-neutral-900 dark:text-[#F8FAFC] whitespace-nowrap">
                        {process.env.NEXT_PUBLIC_APP_NAME || "WPShift"}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-2 w-full flex items-center">
              {open ? (
                <div className="flex items-center gap-3 w-full justify-between">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-[#F8FAFC] whitespace-nowrap">Docs</span>
                  <ThemeToggler />
                </div>
              ) : (
                <ThemeToggler />
              )}
            </div>

            <div className="flex flex-col gap-2 relative mt-4">
              {chapters.map((chapter) => (
                <SidebarLink
                  key={chapter.id}
                  link={{
                    label: chapter.label,
                    href: "#", // Utilizing state instead of searchParams for client speed
                    active: activeChapter === chapter.id,
                    icon: chapter.icon,
                  }}
                  className={activeChapter === chapter.id ? "bg-neutral-100 dark:bg-white/4 text-neutral-900 dark:text-white" : ""}
                  onClick={(e) => { e.preventDefault(); setActiveChapter(chapter.id); }}
                />
              ))}
            </div>
          </div>
          
        </SidebarBody>
        <div className="overflow-hidden relative h-screen w-6 shrink-0 bg-white dark:bg-[#111827] hidden md:block">
          <Scales size={8} className="rounded-lg" />
        </div>

        <main className="flex-1 flex flex-col md:p-12 p-6 pb-24 overflow-y-auto w-full relative z-10 font-manrope bg-white dark:bg-[#0A0F1E] min-h-screen">
          {renderContent()}
        </main>
      </Sidebar>
    </div>
  );
}
