import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#fafafa]">

      {/* SIDEBAR */}
      <div className="w-[260px] min-h-screen fixed left-0 top-0 border-r bg-white z-20">
        <Sidebar />
      </div>

      {/* CONTENIDO */}
      <div className="ml-[260px] w-full">

        {/* HEADER REUTILIZABLE */}
        <DashboardHeader />

        {/* CONTENIDO INTERNO */}
        <div className="px-10 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
