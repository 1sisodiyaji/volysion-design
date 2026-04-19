"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Layout, Briefcase, ShoppingBag, Tag, Image as ImageIcon, Info, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const Step2ContentMapping = () => {
  const router = useRouter();
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['posts', 'pages', 'media']);

  const toggleType = (id: string) => {
    if (selectedTypes.includes(id)) {
      setSelectedTypes(selectedTypes.filter(t => t !== id));
    } else {
      setSelectedTypes([...selectedTypes, id]);
    }
  };

  const postTypes = [
    { id: 'posts', label: 'Posts & Articles', icon: <FileText className="w-4 h-4" />, count: 142 },
    { id: 'pages', label: 'Static Pages', icon: <Layout className="w-4 h-4" />, count: 12 },
    { id: 'media', label: 'Media Library', icon: <ImageIcon className="w-4 h-4" />, count: 543 },
    { id: 'products', label: 'Products (WooCommerce)', icon: <ShoppingBag className="w-4 h-4" />, count: 0 },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" />, count: 24 },
    { id: 'categories', label: 'Categories & Tags', icon: <Tag className="w-4 h-4" />, count: 36 },
  ];

  const plugins = [
    { name: "Yoast SEO", status: "green", statusText: "Fully Supported (SEO migrated)" },
    { name: "ACF Pro", status: "green", statusText: "GraphQL Ready" },
    { name: "WooCommerce", status: "amber", statusText: "Requires Next.js Commerce template" },
    { name: "Elementor", status: "red", statusText: "Layouts mapped to raw HTML (Needs styling)" },
    { name: "Contact Form 7", status: "green", statusText: "Mapped to Serverless Forms" },
    { name: "WP Rocket", status: "amber", statusText: "Not needed (Next.js automatically caches)" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col w-full max-w-4xl mx-auto pt-6"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="px-3 py-1 text-[12px] font-medium rounded-full border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 mb-4 inline-block">
            Step 2 of 4 — Content Mapping
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-[#F8FAFC]">
            Map Content & Plugins
          </h1>
        </div>
        <Button 
          onClick={() => router.push('?step=3')}
          className="h-10 px-6"
        >
          Next Step
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Post Type Selector Card */}
        <div className="p-6 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] rounded-2xl flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[16px] font-bold text-neutral-800 dark:text-white">Select Content to Migrate</h3>
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTypes(postTypes.filter(p => p.count > 0).map(p => p.id))}
              className="text-[13px] font-medium text-blue-600 dark:text-[#00D9FF]"
            >
              Select Active
            </Button>
          </div>
          
          <div className="flex flex-col gap-3">
            {postTypes.map((type) => {
              const isSelected = selectedTypes.includes(type.id);
              const isEmpty = type.count === 0;

              return (
                <div 
                  key={type.id} 
                  onClick={() => !isEmpty && toggleType(type.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border ${isSelected ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-500/10' : 'border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20'} ${isEmpty ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'} transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-neutral-300 dark:border-white/20'}`}>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`flex items-center gap-2 ${isSelected ? 'text-blue-900 dark:text-blue-100' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      {type.icon}
                      <span className="text-[14px] font-medium">{type.label}</span>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-black/50 text-neutral-500 dark:text-[#64748B] text-[12px] font-mono">
                    {type.count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plugin Detection Panel */}
        <div className="p-6 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] rounded-2xl flex flex-col">
          <h3 className="text-[16px] font-bold text-neutral-800 dark:text-white mb-2">Detected Plugins</h3>
          <p className="text-[13px] text-neutral-500 dark:text-[#64748B] mb-6">
            We analyze your active plugins to suggest headless equivalents or port their exact data schemas.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {plugins.map((plugin, index) => (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 + (index * 0.05) }}
                key={plugin.name} 
                className="relative p-3 bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-[#1E293B] rounded-lg group"
              >
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${plugin.status === 'green' ? 'bg-[#10B981]' : plugin.status === 'amber' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'}`} />
                <div className="w-8 h-8 rounded bg-white dark:bg-[#1E293B] flex items-center justify-center mb-2 shadow-sm border border-neutral-100 dark:border-transparent">
                  {/* Pseudo logos */}
                  <div className="w-4 h-4 bg-neutral-300 dark:bg-[#475569] rounded-sm mask-squircle" />
                </div>
                <div className="text-[12px] font-semibold text-neutral-800 dark:text-[#F8FAFC]">
                  {plugin.name}
                </div>
                <div className="text-[10px] text-neutral-500 dark:text-[#64748B] mt-1 leading-tight">
                  {plugin.statusText}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};
