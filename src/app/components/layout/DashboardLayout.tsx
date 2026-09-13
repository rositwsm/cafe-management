import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="mr-16 min-h-screen md:mr-64">
        <Navbar />
        <main className="min-w-0 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
