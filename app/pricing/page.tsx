import CommonLayout from "@/layouts/CommonLayout";
import { PricingCards } from "@/components/core/Pricing/PricingCards";
import { EnterpriseCustom } from "@/components/core/Pricing/EnterpriseCustom";
import { FAQAccordion } from "@/components/core/Pricing/FAQAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | WPShift",
  description: "Transparent pricing for migrating your WordPress site to Next.js or Astro.",
};

export default function PricingPage() {
  return (
    <CommonLayout>
      <div className="flex flex-col w-full min-h-screen bg-white dark:bg-[#0A0F1E] font-manrope pt-20">
        <PricingCards />
        <EnterpriseCustom />
        <FAQAccordion />
      </div>
    </CommonLayout>
  );
}
