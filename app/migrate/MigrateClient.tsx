"use client";

import { useSearchParams } from "next/navigation";
import { WizardSidebar } from "@/components/core/Wizard/WizardSidebar";
import { Step1Connection } from "@/components/core/Wizard/Step1Connection";
import { Step2ContentMapping } from "@/components/core/Wizard/Step2ContentMapping";
import { Step3DesignSync } from "@/components/core/Wizard/Step3DesignSync";
import { Step4Deploy } from "@/components/core/Wizard/Step4Deploy";
import Scales from "@/components/ui/scales";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Check, Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "@/components/common/ThemeToggler";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MigrateClient() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const stepParam = searchParams.get("step");
  const step = stepParam ? parseInt(stepParam) : 1;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Connection />;
      case 2:
        return <Step2ContentMapping />;
      case 3:
        return <Step3DesignSync />;
      case 4:
        return <Step4Deploy />;
      default:
        return <Step1Connection />;
    }
  };

  const steps = [
    { id: 1, label: "Connection Hub" },
    { id: 2, label: "Content Mapping" },
    { id: 3, label: "Design Sync" },
    { id: 4, label: "Deploy" },
  ];

  return (
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
                      {process.env.NEXT_PUBLIC_APP_NAME}
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="px-2 w-full flex items-center">
            {open ? (
              <div className="flex items-center gap-3 w-full justify-between">
                <span className="text-sm font-semibold text-neutral-800 dark:text-[#F8FAFC] whitespace-nowrap">Appearance</span>
                <ThemeToggler />
              </div>
            ) : (
              <ThemeToggler />
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            {steps.map((s) => (
              <SidebarLink
                key={s.id}
                link={{
                  label: s.label,
                  href: `?step=${s.id}`,
                  active: step === s.id,
                  icon: (
                    <div className={`w-full h-full flex items-center justify-center rounded-full border-2 transition-colors ${step > s.id ? 'border-blue-500 bg-blue-500 text-white' : step === s.id ? 'border-blue-500 bg-transparent text-blue-500' : 'border-neutral-300 dark:border-neutral-600'}`}>
                      {step > s.id ? <Check className="w-3 h-3 text-white dark:text-[#0A0F1E]" /> : <span className="text-[10px] font-bold font-syne opacity-80">{s.id}</span>}
                    </div>
                  )
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Login & Theme Card Section */}
        <div className="flex flex-col gap-4 mt-auto pb-4 shrink-0 overflow-x-hidden w-full">
          {/* User Profile / Login Placeholder */}
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors cursor-pointer w-full overflow-hidden border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800">
            <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-[#00D9FF]">UI</span>
            </div>
            <AnimatePresence>
              {open && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col overflow-hidden whitespace-nowrap">
                  <span className="text-[13px] font-bold text-neutral-800 dark:text-[#F8FAFC]">User Setup</span>
                  <span className="text-[11px] text-neutral-500 dark:text-[#64748B]">Login via OAuth</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SidebarBody>
      <div className="overflow-hidden relative h-screen w-6 shrink-0 bg-white dark:bg-[#111827]">
        <Scales size={8} className="rounded-lg" />
      </div>

      <main className="flex-1 flex flex-col md:p-12 p-6 pb-24 overflow-y-auto w-full relative z-10 font-manrope">
        {renderStep()}
      </main>
    </Sidebar>
  );
}
