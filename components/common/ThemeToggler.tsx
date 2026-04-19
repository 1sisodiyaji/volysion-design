"use client";

import * as React from "react";
import { MoonStar, SunDimIcon, LaptopMinimal, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch logic and handle clicks outside dropdown
  useEffect(() => {
    setMounted(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <button 
        aria-label="Toggle Theme"
        title="Toggle Theme"
        className="border border-neutral-200 dark:border-neutral-800 p-2 rounded-full cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors opacity-50"
      >
        <span className="w-5 h-5 block"></span>
      </button>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Toggle Theme"
        title="Settings"
        className="border border-neutral-200 dark:border-neutral-800 p-2 rounded-full cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center text-neutral-600 dark:text-neutral-300 relative"
      >
        {resolvedTheme === "light" ? (
          <SunDimIcon className="w-5 h-5 text-yellow-500" />
        ) : (
          <MoonStar className="w-5 h-5 text-blue-600" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-[100] mt-2 w-40 origin-top-right rounded-xl border border-neutral-100 bg-white shadow-lg ring-1 ring-neutral-100 dark:ring-neutral-800 ring-opacity-5 focus:outline-none dark:border-white/10 dark:bg-neutral-900 overflow-hidden text-sm">
          <div className="py-1">
            <button
              onClick={() => { setTheme("light"); setIsOpen(false); }}
              className={`group flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${theme === "light" ? "text-blue-600 dark:text-[#00D9FF] font-medium" : "text-neutral-700 dark:text-neutral-200"}`}
            >
              <div className="flex items-center gap-2">
                <SunDimIcon className="w-4 h-4" />
                Light
              </div>
              {theme === "light" && <Check className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => { setTheme("dark"); setIsOpen(false); }}
              className={`group flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${theme === "dark" ? "text-blue-600 dark:text-[#00D9FF] font-medium" : "text-neutral-700 dark:text-neutral-200"}`}
            >
              <div className="flex items-center gap-2">
                <MoonStar className="w-4 h-4" />
                Dark
              </div>
              {theme === "dark" && <Check className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => { setTheme("system"); setIsOpen(false); }}
              className={`group flex w-full items-center justify-between px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${theme === "system" ? "text-blue-600 dark:text-[#00D9FF] font-medium" : "text-neutral-700 dark:text-neutral-200"}`}
            >
              <div className="flex items-center gap-2">
                <LaptopMinimal className="w-4 h-4" />
                System
              </div>
              {theme === "system" && <Check className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;