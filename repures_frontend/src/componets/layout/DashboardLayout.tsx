import Sidebar from "./Sidebar";
import Header from "./Header";
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
        <main className="p-[32px] space-y-6 bg-[#1F2937]/30">
          <Outlet />
        </main>

      </div>
    </div>
  );
}