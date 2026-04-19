"use client";

import Link from "next/link";

export const GlobalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-white dark:bg-neutral-950 w-full text-neutral-800 dark:text-white font-manrope">
      <div className="max-w-page mx-auto mx-6 md:mx-12 px-6 md:px-12 border-t border-l border-r border-neutral-200 dark:border-white/10 rounded-t-2xl pt-20 pb-0 relative z-10 space-y-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-8">
          {/* Logo & Copyright (Left Side) */}
          <div className="w-full lg:w-1/3 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              {/* Brand Icon SVG to emulate the DevStudio style logo */}
              <svg
                className="w-6 h-6 text-neutral-900 dark:text-white group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 22H6L12 10L18 22H22L12 2Z" fill="currentColor" />
              </svg>
              <span className="font-montserrat font-bold text-lg tracking-tight text-neutral-900 dark:text-[#F8FAFC]">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </span>
            </Link>
            <p className="text-neutral-500 dark:text-[#64748B] text-sm">
              &copy; copyright {process.env.NEXT_PUBLIC_APP_NAME} {currentYear}. All rights reserved.
            </p>
          </div>

          {/* Links Columns (Right Side) */}
          <div className="w-full lg:w-2/3 flex items-start justify-end gap-8 md:gap-16">

            {/* Pages / Product */}
            <div>
              <h4 className="text-neutral-800 dark:text-neutral-100 font-bold text-[14px] mb-6">Pages</h4>
              <ul className="space-y-4">
                <li><Link href="/docs" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Docs</Link></li>
                <li><Link href="/migrate" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Migrate</Link></li>
                <li><Link href="/pricing" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Pricing</Link></li>
                <li><Link href="/blog" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-neutral-800 dark:text-neutral-100 font-bold text-[14px] mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-neutral-500 dark:text-[#64748B] hover:text-neutral-800 dark:hover:text-[#F8FAFC] text-[14px] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>
        <div className="min-h-[45vh] w-full flex items-start
         justify-center pointer-events-none select-none overflow-hidden">
          <h1
            className="text-[18vw] leading-none font-bold text-neutral-100 dark:text-white/[0.2]"
            style={{ letterSpacing: "-0.04em" }}
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
        </div>
      </div>
    </footer>
  );
};