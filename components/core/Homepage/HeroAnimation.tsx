"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useState, useEffect } from "react";
import { Lock, Globe, MessageCircle, Rocket, Sparkles, Server, Check, Layers, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const SEO_DURATIONS = {
  monolith: 4000,
  decoupled: 3500,
  chat: 3500,
  preprod: 4000,
  deploy: 5000,
};

const STATES = Object.keys(SEO_DURATIONS) as Array<keyof typeof SEO_DURATIONS>;

const DatabaseBlock = ({ layoutId }: { layoutId: string }) => (
  <motion.div layoutId={layoutId} className="bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-orange-700 dark:text-orange-400 w-28 md:w-36 aspect-square shadow-sm z-10 transition-colors duration-500">
      <Server size={28} />
      <span className="text-[11px] md:text-xs font-bold text-center leading-tight">WP Backend<br/>(MySQL)</span>
  </motion.div>
);

const UnifiedUIBlock = ({ state, layoutId }: { state: "wp-frontend" | "frontend" | "preprod" | "deploy", layoutId: string }) => {
    return (
        <motion.div layoutId={layoutId} className={cn(
           "border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-2 w-28 md:w-36 aspect-square shadow-lg z-10 transition-colors duration-500 relative",
           state === "wp-frontend" && "bg-neutral-50 border-neutral-200 text-neutral-700 dark:bg-neutral-800/80 dark:border-neutral-700 dark:text-neutral-300",
           state === "frontend" && "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300",
           state === "preprod" && "bg-purple-50 border-purple-300 border-dashed text-purple-700 dark:bg-purple-900/30 dark:border-purple-800 dark:text-purple-300",
           state === "deploy" && "bg-emerald-50 border-emerald-400 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300"
        )}>
           {state === "wp-frontend" && <Globe size={28} className="opacity-60" />}
           {state === "frontend" && <Globe size={28} />}
           {state === "preprod" && <Sparkles size={28} className="animate-pulse" />}
           {state === "deploy" && <Check size={28} />}
           
           <span className="text-[11px] md:text-xs font-bold text-center leading-tight">
               {state === "wp-frontend" && <>WP Frontend<br/>(PHP Themes)</>}
               {state === "frontend" && <>Next.js<br/>Frontend</>}
               {state === "preprod" && <>Pre-prod<br/>Staging</>}
               {state === "deploy" && <>Production<br/>Deployed</>}
           </span>

           {state === "preprod" && (
              <motion.div initial={{scale: 0}} animate={{scale:1}} className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap shadow-sm">New feature</motion.div>
           )}
           {state === "deploy" && (
              <motion.div initial={{y: 10, opacity:0}} animate={{y:-15, opacity:1}} transition={{ delay: 0.5}} className="absolute -top-4 right-4 text-emerald-500"><Rocket size={20}/></motion.div>
           )}
        </motion.div>
    );
};

const ChatMsg = ({ text, sender, delay }: { text: string, sender: "ai" | "user", delay: number }) => (
    <motion.div 
       initial={{ opacity: 0, y: 10, scale: 0.95 }}
       animate={{ opacity: 1, y: 0, scale: 1 }}
       transition={{ delay, duration: 0.3 }}
       className={cn(
         "flex items-end gap-2 max-w-[95%]",
         sender === "user" ? "self-end flex-row-reverse" : "self-start"
       )}
    >
       <div className={cn(
           "p-1.5 rounded-full shrink-0 shadow-sm",
           sender === "user" ? "bg-[#d9fdd3] dark:bg-green-900 text-neutral-600 dark:text-neutral-300" : "bg-white dark:bg-neutral-800 border dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
       )}>
           {sender === "user" ? <User size={14} /> : <Bot size={14} />}
       </div>
       <div className={cn(
         "p-2 rounded-xl relative text-[12px] md:text-[13px] shadow-sm leading-snug",
         sender === "user" ? "bg-[#d9fdd3] dark:bg-green-900 text-neutral-900 dark:text-neutral-100 rounded-tr-sm" : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 rounded-tl-sm border border-neutral-200 dark:border-neutral-700"
       )}>
         {text}
       </div>
    </motion.div>
)


export const HeroAnimation = () => {
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
      const timer = setTimeout(() => {
        setIndex((v) => (v + 1) % STATES.length);
      }, SEO_DURATIONS[STATES[index]]);
      return () => clearTimeout(timer);
    }, [index]);
  
    const isDecoupled = index >= 1;
    const isChatting = index >= 2;
    const isPreProd = index >= 3;
    const isDeploying = index >= 4;

    if (!mounted) return null;

    return (
      <LayoutGroup>
        <div className="w-full h-[400px] md:h-[700px] relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 p-3 md:p-6 overflow-hidden flex flex-col md:flex-row shadow-sm">
           
           {/* Left Pane: Secure Legacy Environment */}
           <div className="flex-1 border-b md:border-b-0 md:border-r border-dashed border-neutral-300 dark:border-neutral-700 relative flex justify-center items-center p-4">
               <span className="text-xs font-semibold text-neutral-500 absolute top-3 left-3 flex gap-1.5 items-center bg-white/80 dark:bg-black/80 px-2 py-1 rounded-md backdrop-blur-sm z-10"><Lock size={14}/> Secure Legacy Hosting</span>
               <div className="w-full flex-1 flex items-center justify-center pt-8 md:pt-0">
                   {isDecoupled && <DatabaseBlock layoutId="db-block" />}
               </div>
           </div>
           
           {/* Right Pane: Modern Edge Network */}
           <div className="flex-1 relative flex justify-center items-center p-4 bg-blue-50/30 dark:bg-blue-900/10 overflow-hidden">
               <AnimatePresence>
                   {(isPreProd || isDeploying) && (
                       <motion.div 
                          key={`beam-${index}`}
                          initial={{ top: "-50%" }}
                          animate={{ top: "150%" }}
                          transition={{ duration: 1.5, ease: "linear" }}
                          className="absolute inset-x-0 w-full h-[150px] bg-gradient-to-b from-transparent via-blue-400/20 dark:via-blue-400/10 to-transparent blur-md z-0 pointer-events-none"
                       />
                   )}
               </AnimatePresence>
               <span className="text-xs font-semibold text-blue-500 absolute top-3 left-3 flex gap-1.5 items-center bg-white/80 dark:bg-black/80 px-2 py-1 rounded-md backdrop-blur-sm z-10"><Globe size={14}/> Modern Edge Network</span>
               <div className="w-full flex-1 flex items-center justify-center pt-8 md:pt-0 relative z-10">
                   {isDeploying ? (
                        <UnifiedUIBlock layoutId="ui-block" state="deploy" />
                   ) : isPreProd ? (
                        <UnifiedUIBlock layoutId="ui-block" state="preprod" />
                   ) : isDecoupled ? (
                        <UnifiedUIBlock layoutId="ui-block" state="frontend" />
                   ) : null}
               </div>
           </div>
        
           {/* The Center Monolith (When not decoupled) */}
           <AnimatePresence>
             {!isDecoupled && (
               <motion.div 
                   className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center pointer-events-none z-20" 
                   initial={{ opacity: 0, scale: 0.9 }} 
                   animate={{ opacity: 1, scale: 1 }} 
                   exit={{ opacity: 0, scale: 0.95 }}
                >
                 <div className="flex flex-col shadow-2xl bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 items-center gap-4 pointer-events-auto relative">
                     {/* Throbbing glow before decoupling */}
                     <AnimatePresence>
                        {index === 0 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.5, scale: 1.05 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                              className="absolute -inset-2 bg-blue-400/20 blur-xl rounded-full z-[-1]" 
                            />
                        )}
                     </AnimatePresence>
                     <span className="font-extrabold text-neutral-800 dark:text-neutral-200 flex items-center gap-2"><Layers size={18}/> WordPress Monolith</span>
                     <div className="flex gap-3">
                        <DatabaseBlock layoutId="db-block" />
                        <UnifiedUIBlock layoutId="ui-block" state="wp-frontend" />
                     </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        
           {/* Chat Widget Overlay */}
           <AnimatePresence>
             {isChatting && (
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: 200, opacity: 0 }}
                 className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-[50%] w-[90%] sm:w-[320px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-30"
               >
                 <div className="bg-[#25D366] p-2.5 text-white flex items-center gap-2 shadow-sm">
                    <MessageCircle size={18} fill="currentColor" strokeWidth={1} />
                    <span className="font-semibold text-[13px]">{process.env.NEXT_PUBLIC_APP_NAME} AI</span>
                 </div>
                 <div className="p-3 flex flex-col gap-2.5 min-h-[140px] text-xs bg-[#efeae2] dark:bg-[#1a1a1a]">
                     <ChatMsg text="'Hey! Can we update the hero text to say headless performance?'" sender="user" delay={0.2} key="msg-1"/>
                     
                     {(index >= 3) && (
                       <ChatMsg text="Working on it... 🪄" sender="ai" delay={0.2} key="msg-2"/>
                     )}
                     {(index >= 3) && (
                       <ChatMsg text={`Done! Preview is ready: preview.${process.env.NEXT_PUBLIC_APP_NAME}.app`} sender="ai" delay={1.4} key="msg-3"/>
                     )}
                     
                     {(index >= 4) && (
                         <ChatMsg text="Looks perfect, deploy it! 🚀" sender="user" delay={0.2} key="msg-4"/>
                     )}
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </LayoutGroup>
    );
};
