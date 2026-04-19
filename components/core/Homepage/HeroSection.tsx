"use client"
import { CanvasText } from "@/components/ui/canvas-text";
import { Button } from "@/components/ui/stateful-button";
import { cn } from "@/lib/utils";
import { HeroAnimation } from "./HeroAnimation";
import CommonBorder from "@/components/common/CommonBorder";

export default function HeroSection() {

    const handleClick = () => {
        return new Promise((resolve) => {
            setTimeout(resolve, 4000);
        });
    };
    return (
        <>
            <CommonBorder className="bg-white font-manrope dark:bg-black">
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full mx-auto z-10 px-6 sm:px-8 md:px-12 lg:px-16">
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 lg:gap-8">

                        <h1 className={cn("group relative max-w-3xl text-left text-4xl leading-[1] font-bold tracking-tight text-balance text-neutral-800 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-200")}>
                            WordPress at the speed of modern {" "}
                            <CanvasText
                                text="websites demand."
                                backgroundClassName="bg-green-600 dark:bg-green-700"
                                colors={[
                                    "rgba(77, 255, 0, 1)",
                                    "rgba(77, 255, 0, 0.9)",
                                    "rgba(77, 255, 0, 0.8)",
                                    "rgba(77, 255, 0, 0.7)",
                                    "rgba(77, 255, 0, 0.6)",
                                    "rgba(77, 255, 0, 0.5)",
                                    "rgba(77, 255, 0, 0.4)",
                                    "rgba(77, 255, 0, 0.3)",
                                    "rgba(77, 255, 0, 0.2)",
                                    "rgba(77, 255, 0, 0.1)",
                                ]}
                                lineGap={4}
                                animationDuration={20}
                            />
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl text-balance">
                            Upgrade to a blazing-fast headless frontend using Next.js or Astro. Keep the dashboard you know, get the performance you need.
                        </p>

                        <Button onClick={handleClick}>See How Migrations Works</Button>
                    </div>

                    <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center w-full">
                        <HeroAnimation />
                    </div>
                </div>
            </CommonBorder>
        </>
    );
}
