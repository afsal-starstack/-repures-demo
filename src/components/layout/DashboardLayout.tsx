import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#000000] text-white min-h-screen">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-40 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col lg:ml-[255px]">

        {/* Mobile Top Bar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center gap-3 px-4 h-[60px] bg-[#13161C] border-b border-[#1F2937]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#161B22] text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-white font-bold text-lg">Repures</span>
        </div>

        {/* Header (desktop) */}
        <div className="hidden lg:block w-full">
          <Header />
        </div>

        {/* Main Content */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 mt-[60px] lg:mt-0
          bg-[linear-gradient(118deg,_rgba(0,0,0,0.84)_0%,_rgba(23,33,52,0.84)_51.27%,_rgba(0,0,0,0.84)_101.57%)]
          min-h-screen">
          <Outlet />
        </main>

      </div>
    </div>
  );
}