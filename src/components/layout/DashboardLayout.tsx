import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex bg-[#000000] text-white min-h-screen">
      
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col ml-[255px]">
        
        {/* Header */}
        <div className="w-full">
          <Header />
        </div>

        {/* Main Content */}
        <main className="p-[32px] space-y-6 bg-[linear-gradient(118deg,_rgba(0,0,0,0.84)_0%,_rgba(23,33,52,0.84)_51.27%,_rgba(0,0,0,0.84)_101.57%)]">
          <Outlet />
        </main>

      </div>
    </div>
  );
}