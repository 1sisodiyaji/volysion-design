"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Check, X, Zap, Building2, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Solo Developer",
    icon: Zap,
    description: "Best for freelancers and individual developers.",
    monthlyPrice: "$19",
    annualPrice: "$15",
    features: [
      { text: "1 WordPress site migration", included: true },
      { text: "Basic templates", included: true },
      { text: "Standard performance optimization", included: true },
      { text: "Community support", included: true },
      { text: "White-label dashboard", included: false },
      { text: "Dedicated engineers", included: false },
    ],
    ctaText: "Start Free",
    style: "border-[#1E293B]",
    ctaStyle: "border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10",
    isPopular: false,
  },
  {
    name: "Agency Pro",
    icon: Building2,
    description: "Designed for agencies managing multiple client websites.",
    monthlyPrice: "$99",
    annualPrice: "$79",
    features: [
      { text: "Unlimited migrations", included: true },
      { text: "White-label dashboard", included: true },
      { text: "Custom template support", included: true },
      { text: "Priority deployment infrastructure", included: true },
      { text: "Team collaboration tools", included: true },
      { text: "Dedicated engineers", included: false },
    ],
    ctaText: "Start Agency Trial",
    style: "border-[#00D9FF] border-2",
    ctaStyle: "bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] hover:opacity-90 text-white border-0",
    isPopular: true,
  },
  {
    name: "Enterprise",
    icon: Network,
    description: "For complex websites including multisite and WooCommerce.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      { text: "Custom architecture design", included: true },
      { text: "Dedicated support engineers", included: true },
      { text: "Advanced performance tuning", included: true },
      { text: "Security hardening", included: true },
      { text: "Service Level Agreement (SLA)", included: true },
      { text: "Custom integrations", included: true },
    ],
    ctaText: "Contact Sales",
    style: "border-[#7C3AED]",
    ctaStyle: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] border-0",
    isPopular: false,
  },
];

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Choose the right plan to modernize your WordPress stack. No hidden fees.
        </p>

        <div className="flex items-center justify-center gap-4 pt-8">
          <span className={cn("text-sm font-medium", !isAnnual ? "text-neutral-900 dark:text-white" : "text-neutral-500")}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-[#00D9FF]"
          />
          <span className={cn("text-sm font-medium", isAnnual ? "text-neutral-900 dark:text-white" : "text-neutral-500")}>
            Annually
          </span>
        </div>
        
        <div className="h-6 mt-2 relative overflow-hidden">
          <AnimatePresence>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#10B981]"
              >
                You save 20% with annual plans!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:gap-12">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const isCenter = index === 1;

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 10px 40px -10px rgba(0,217,255,0.15)" }}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl bg-white dark:bg-[#111827]/80 backdrop-blur-xl border transition-all duration-300",
                plan.style,
                isCenter ? "lg:scale-[1.04] z-10" : ""
              )}
            >
              {isCenter && (
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] rounded-t-2xl" />
              )}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00D9FF] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 flex items-center gap-3">
                <div className={cn("p-2 rounded-lg", plan.isPopular ? "bg-[#00D9FF]/10 text-[#00D9FF]" : "bg-neutral-100 dark:bg-[#1E293B] text-neutral-600 dark:text-neutral-300")}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{plan.name}</h3>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 h-10">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-neutral-900 dark:text-white relative">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                </span>
                {plan.name !== "Enterprise" && (
                  <span className="text-neutral-500 ml-2">/mo</span>
                )}
              </div>

              <Button
                variant={isCenter ? "default" : "outline"}
                className={cn("w-full mb-8 h-12 text-md font-semibold transition-transform hover:scale-[1.02]", plan.ctaStyle)}
              >
                {plan.ctaText}
              </Button>

              <div className="space-y-4 flex-1">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Features</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex flex-row items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
                    )}
                    <span className={cn("text-sm", feature.included ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-600")}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
