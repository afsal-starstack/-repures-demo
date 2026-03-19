import Sidebar from "../componets/layout/Sidebar";
import Header from "../componets/layout/Header";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex bg-[#0B0F17] text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}