import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">

      <div className="flex items-center gap-10">
        <h1 className="text-[22px] font-bold text-gray-900">Dashboard</h1>

        <div className="flex items-center w-[420px] h-[42px] bg-white rounded-xl border border-gray-300 px-3">
          <FiSearch className="text-gray-400 text-[18px]" />
          <input
            type="text"
            placeholder="Buscar..."
            className="ml-2 w-full text-[15px] text-gray-600 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[#007BFF] font-medium hover:underline text-[15px]">
          Ser premium
        </button>

        <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <FiBell className="text-[20px] text-gray-600" />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="user"
            className="w-9 h-9 rounded-full object-cover"
          />

          <div className="flex flex-col leading-4">
            <span className="font-semibold text-[15px] text-gray-800">
              Maria
            </span>
            <span className="text-[12px] text-gray-500">Administrador</span>
          </div>

          <FiChevronDown className="text-gray-600 text-[18px]" />
        </div>
      </div>
    </header>
  );
}
