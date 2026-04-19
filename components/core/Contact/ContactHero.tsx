"use client";

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="py-24 px-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-[#F8FAFC] font-syne mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-neutral-600 dark:text-[#94A3B8] leading-relaxed">
              Whether you're exploring headless architecture for the first time, or looking for 
              enterprise migration assistance, our engineering team is here to help.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-neutral-200 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center shrink-0 border border-[#00D9FF]/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Sales & Enterprise</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                  Discuss custom architecture and multi-site licensing.
                </p>
                <a href="mailto:sales@wpshift.dev" className="text-[#00D9FF] hover:underline text-sm font-medium mt-1 inline-block">
                  sales@wpshift.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0 border border-[#7C3AED]/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Technical Support</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                  Assistance with API connection issues or deployment bugs.
                </p>
                <a href="mailto:support@wpshift.dev" className="text-[#7C3AED] hover:underline text-sm font-medium mt-1 inline-block">
                  support@wpshift.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Headquarters</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                  100 Edge Network Blvd<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-[#111827] border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl shadow-xl relative"
        >
          {/* subtle glow behind form */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00D9FF]/20 to-[#7C3AED]/20 rounded-2xl blur-xl opacity-50 -z-10" />

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Jane"
                  className="bg-neutral-50 dark:bg-[#0A0F1E] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="bg-neutral-50 dark:bg-[#0A0F1E] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@company.com"
                className="bg-neutral-50 dark:bg-[#0A0F1E] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Topic</Label>
              <Select>
                <SelectTrigger className="bg-neutral-50 dark:bg-[#0A0F1E] border-neutral-300 dark:border-[#1E293B] focus:ring-[#00D9FF] w-full">
                  <SelectValue placeholder="How can we help?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Enterprise & Sales</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">Agency Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us a bit about your current WordPress setup..."
                rows={5}
                className="bg-neutral-50 dark:bg-[#0A0F1E] border-neutral-300 dark:border-[#1E293B] focus-visible:ring-[#00D9FF] resize-none"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] hover:opacity-90 text-white border-0 h-12 text-md font-semibold transition-transform hover:scale-[1.02]">
              Send Message
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
