"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-8 hidden md:flex md:flex-col bg-white dark:bg-[#111827] w-[280px] flex-shrink-0 border-r border-neutral-200 dark:border-[#1E293B]",
        className
      )}
      animate={{
        width: animate ? (open ? "280px" : "80px") : "280px",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-14 px-4 flex flex-row md:hidden items-center justify-between bg-white dark:bg-[#111827] w-full border-b border-neutral-200 dark:border-[#1E293B]",
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <button onClick={() => setOpen(!open)} className="text-neutral-800 dark:text-neutral-200">
            <Menu />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-[#111827] p-6 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-6 top-6 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

type SidebarLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  link: {
    label: string | React.ReactNode;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
    active?: boolean;
  };
  className?: string;
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: SidebarLinkProps) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-4 group/sidebar py-3 relative rounded-lg px-2 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors overflow-hidden",
        link.active ? "bg-neutral-100 dark:bg-white/[0.08]" : "",
        className
      )}
      {...props}
    >
      {link.active && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute left-0 w-1 h-full bg-blue-500 rounded-r-md"
        />
      )}
      <div className={cn("text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 relative z-10", link.active && "text-blue-500 dark:text-[#00D9FF]")}>
        {link.icon}
      </div>

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn("text-neutral-700 dark:text-neutral-200 text-[14px] transition duration-150 whitespace-pre !p-0 !m-0 z-10", link.active && "text-blue-600 dark:text-white font-bold")}
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
