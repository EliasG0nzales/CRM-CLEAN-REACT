import Sidebar from "../shared/components/Layout/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* HEADER */}
        <header className="w-full h-16 border-b bg-white flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar…"
              className="border px-3 py-2 rounded-lg w-64"
            />

            <select className="border px-2 py-2 rounded-lg">
              <option>USD</option>
              <option>PEN</option>
            </select>

            <div className="flex items-center gap-3">
              <img
                src="/user.png"
                className="w-10 h-10 rounded-full"
                alt="profile"
              />
              <div>
                <p className="text-sm font-medium">Maria</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
