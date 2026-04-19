import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration Wizard | " + process.env.NEXT_PUBLIC_APP_NAME,
  description: "Guided migration flow for " + process.env.NEXT_PUBLIC_APP_NAME,
};

export default function MigrateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen bg-neutral-50 dark:bg-[#0A0F1E] text-neutral-900 dark:text-[#F8FAFC] font-manrope">
       {children}
    </div>
  );
}
