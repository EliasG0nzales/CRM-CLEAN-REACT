import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import profileImg from "../../../assets/maria.jpg"; // Cambia por tu imagen real

export default function DashboardTopbar() {
  return (
    <div className="w-full h-[70px] bg-white border-b flex items-center justify-between px-6">
      
      {/* LEFT — TITLE */}
      <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>

      {/* CENTER — SEARCH INPUT */}
      <div className="flex items-center w-1/3 min-w-[250px] relative">
        <FiSearch className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* RIGHT — PREMIUM + NOTIFICATIONS + PROFILE */}
      <div className="flex items-center gap-6">
        {/* Premium link */}
        <button className="text-blue-500 hover:underline text-sm font-medium">
          Ser premium
        </button>

        {/* Notifications */}
        <button className="relative">
          <FiBell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></span>
        </button>

        {/* USER */}
        <div className="flex items-center gap-2">
          <img
            src={profileImg}
            className="w-8 h-8 rounded-full object-cover"
            alt="profile"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-gray-700">Maria</p>
            <p className="text-gray-400 text-xs">Administrador</p>
          </div>
          <FiChevronDown size={18} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}
