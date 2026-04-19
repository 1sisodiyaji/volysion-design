"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  fromColor = "#00c6ff",
  viaColor = "#0072ff",
  toColor = "#12ECE5",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: `radial-gradient(circle farthest-side at 0 100%, ${fromColor}, transparent), radial-gradient(circle farthest-side at 100% 0, ${viaColor}, transparent), radial-gradient(circle farthest-side at 100% 100%, ${toColor}, transparent), radial-gradient(circle farthest-side at 0 0, ${fromColor}, #141316)`,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          backgroundImage: `radial-gradient(circle farthest-side at 0 100%, ${fromColor}, transparent), radial-gradient(circle farthest-side at 100% 0, ${viaColor}, transparent), radial-gradient(circle farthest-side at 100% 100%, ${toColor}, transparent), radial-gradient(circle farthest-side at 0 0, ${fromColor}, #141316)`,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
