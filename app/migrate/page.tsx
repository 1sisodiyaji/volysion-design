import { Suspense } from "react";
import MigrateClient from "./MigrateClient";

export default function MigratePage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-[#0A0F1E]">
        <div className="w-8 h-8 rounded-full border-4 border-blue-600 dark:border-[#00D9FF] border-t-transparent animate-spin" />
      </div>
    }>
       <MigrateClient />
    </Suspense>
  )
}
