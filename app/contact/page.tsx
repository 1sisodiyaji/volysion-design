import CommonLayout from "@/layouts/CommonLayout";
import { ContactHero } from "@/components/core/Contact/ContactHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | WPShift",
  description: "Get in touch with the WPShift team for enterprise migrations and setup assistance.",
};

export default function ContactPage() {
  return (
    <CommonLayout>
      <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white dark:bg-[#0A0F1E] font-manrope pt-20 pb-24">
        <ContactHero />
      </div>
    </CommonLayout>
  );
}
