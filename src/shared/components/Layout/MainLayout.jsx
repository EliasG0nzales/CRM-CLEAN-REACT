import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* SIDEBAR - Desktop */}
      <div className="hidden lg:block w-[260px] min-h-screen fixed left-0 top-0 border-r bg-white z-20">
        <Sidebar />
      </div>

      {/* SIDEBAR - Mobile */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-30">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-40 w-[280px] h-full bg-white">
            <Sidebar />
          </div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 lg:ml-[260px] w-full min-w-0">
        
        {/* HEADER FIJADO */}
        <div className="fixed top-0 right-0 lg:left-[260px] left-0 z-10 bg-white border-b border-gray-200">
          <DashboardHeader 
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>

        {/* CONTENIDO INTERNO CON MARGEN SUPERIOR */}
        <main className="mt-[80px] px-4 lg:px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}