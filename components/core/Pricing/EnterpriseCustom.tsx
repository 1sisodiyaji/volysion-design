"use client";

import { motion } from "motion/react";
import { Check, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function EnterpriseCustom() {
  const customFeatures = [
    "WooCommerce Optimization",
    "Multisite Networks & Complex Taxonomies",
    "High-Traffic Enterprise Platforms",
    "Custom Platform Integrations",
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-[20px] p-8 md:p-12 items-center"
      >
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-[#7C3AED]/20 text-[#7C3AED] rounded-full text-xs font-bold uppercase tracking-wider">
            Enterprise
          </div>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#F8FAFC]">
            Custom Migration for Complex Sites
          </h2>
          <p className="text-neutral-600 dark:text-[#94A3B8] text-base leading-relaxed">
            Have a sprawling WooCommerce store or a dense Multisite network? 
            Our dedicated enterprise migration engineers will handle your complex requirements, 
            designing a custom headless architecture that scales effortlessly.
          </p>

          <ul className="space-y-4 pt-4">
            {customFeatures.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex flex-row items-center gap-3"
              >
                <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                <span className="text-neutral-800 dark:text-[#F8FAFC] font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-neutral-800 p-8 rounded-xl shadow-lg relative">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 relative">
              <Label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="bg-neutral-50 dark:bg-[#111827] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF] focus-visible:border-[#00D9FF]"
              />
            </div>
            
            <div className="space-y-2 relative">
              <Label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                className="bg-neutral-50 dark:bg-[#111827] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF] focus-visible:border-[#00D9FF]"
              />
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="details" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Tell us about your site</Label>
              <Textarea
                id="details"
                placeholder="We have a WooCommerce store with ~5k products..."
                rows={4}
                className="bg-neutral-50 dark:bg-[#111827] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF] focus-visible:border-[#00D9FF]"
              />
            </div>

            <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white hover:scale-[1.02] transition-transform h-12 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Talk to Our Team
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
