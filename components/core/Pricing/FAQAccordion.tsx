"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqData = [
  {
    question: "Is my data safe during the migration?",
    answer: "Absolutely. We don't touch your production database directly. We securely read your content via the REST API or WPGraphQL and generate a decoupled frontend securely. Your original WordPress installation remains completely untouched.",
  },
  {
    question: "Do I still use WordPress after migrating?",
    answer: "Yes! Your editorial workflow doesn't change at all. You will continue to log into your standard WordPress dashboard, draft posts, and use your favorite plugins to manage content. The difference is only on the frontend.",
  },
  {
    question: "Do you support WooCommerce?",
    answer: "Yes, our Enterprise tier fully supports WooCommerce integrations. Since eCommerce workflows are heavily customized, we manually build out authentication and checkout API endpoints for Next.js to communicate with your precise WooCommerce configuration.",
  },
  {
    question: "Do I need development skills to use WPShift?",
    answer: "Not necessarily. Our standard templates require absolutely no coding knowledge — wait for the build to finish, and you're deployed. If you want a completely bespoke theme from scratch, having intermediate React knowledge is recommended but not required.",
  },
  {
    question: "Can I host this anywhere?",
    answer: "Yes. Because WPShift generates modern React-based architectures like Next.js and Astro, you can deploy your newly generated frontend directly to global edge networks like Vercel, Netlify, Cloudflare Pages, or on AWS.",
  },
  {
    question: "What if I want to rollback to my old theme?",
    answer: "Given that your headless frontend does not alter the actual WordPress instance or the database, rolling back is as simple as re-activating your original PHP theme from your WordPress Appearance panel and pointing your DNS back to your server.",
  },
];

export function FAQAccordion() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-[#F8FAFC]">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="border-b border-neutral-200 dark:border-[#1E293B]"
              >
                <AccordionTrigger className="text-left font-semibold text-base text-neutral-800 dark:text-[#F8FAFC] hover:no-underline hover:bg-neutral-50 dark:hover:bg-white/5 px-2 rounded-t-md transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.7] text-neutral-600 dark:text-[#94A3B8] px-2 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
