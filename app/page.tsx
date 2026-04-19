"use client"

import HeroSection from "@/components/core/Homepage/HeroSection";
import { PerformanceGapSection } from "@/components/core/Homepage/PerformanceGapSection";
import { TechStackSection } from "@/components/core/Homepage/TechStackSection";
import { LiveFeatureGridSection } from "@/components/core/Homepage/LiveFeatureGridSection";
import { TestimonialsSection } from "@/components/core/Homepage/TestimonialsSection";
import { FinalCTASection } from "@/components/core/Homepage/FinalCTASection";
import CommonLayout from "@/layouts/CommonLayout";

export default function Home() {
  return (
    <>
      <CommonLayout>
        <HeroSection />
        <PerformanceGapSection />
        <TechStackSection />
        <LiveFeatureGridSection />
        <TestimonialsSection />
        <FinalCTASection />
      </CommonLayout>
    </>
  );
}
