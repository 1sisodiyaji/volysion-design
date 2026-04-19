"use client";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const WizardSidebar = ({ currentStep }: { currentStep: number }) => {
  const router = useRouter();
  
  const steps = [
    { id: 1, label: "Connection Hub" },
    { id: 2, label: "Content Mapping" },
    { id: 3, label: "Design Sync" },
    { id: 4, label: "Deploy" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[280px] bg-white dark:bg-[#111827] border-r border-neutral-200 dark:border-[#1E293B] shrink-0 sticky top-0 h-screen transition-colors">
      <div className="p-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
          <svg className="w-6 h-6 text-neutral-900 dark:text-white group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H6L12 10L18 22H22L12 2Z" fill="currentColor" />
          </svg>
          <span className="font-montserrat font-bold text-lg tracking-tight text-neutral-900 dark:text-[#F8FAFC]">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </span>
        </Link>

        <div className="flex flex-col gap-0 relative">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            const isPending = currentStep < step.id;

            return (
              <div 
                key={step.id} 
                className="relative flex items-start gap-4 pb-12 last:pb-0 cursor-pointer group" 
                onClick={() => router.push(`?step=${step.id}`)} 
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute top-8 left-4 w-[2px] h-[calc(100%-32px)] transform -translate-x-[1px] origin-top transition-all duration-500 ease-out ${isCompleted ? 'bg-blue-500 dark:bg-[#00D9FF]' : 'bg-neutral-200 dark:bg-[#1E293B]'}`} />
                )}
                
                {/* Step Circle */}
                <div className={`z-10 flex shrink-0 items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${isCompleted ? 'bg-blue-500 border-blue-500 dark:bg-[#00D9FF] dark:border-[#00D9FF]' : isActive ? 'bg-transparent border-blue-500 dark:border-[#00D9FF] scale-110' : 'bg-neutral-50 border-neutral-200 dark:bg-[#111827] dark:border-[#1E293B] group-hover:border-neutral-300 dark:group-hover:border-neutral-600'}`}>
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-white dark:text-[#0A0F1E] font-bold" />
                  ) : (
                    <span className={`text-[13px] font-bold ${isActive ? 'text-blue-600 dark:text-[#F8FAFC]' : 'text-neutral-500 dark:text-[#475569]'}`}>
                      {step.id}
                    </span>
                  )}
                </div>

                {/* Step Label */}
                <div className={`mt-1 font-medium transition-colors ${isCompleted ? 'text-neutral-500 dark:text-[#94A3B8] text-[14px]' : isActive ? 'text-neutral-900 dark:text-[#F8FAFC] font-extrabold text-[15px]' : 'text-neutral-400 dark:text-[#475569] text-[14px] group-hover:text-neutral-600 dark:group-hover:text-neutral-400'}`}>
                  {step.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
