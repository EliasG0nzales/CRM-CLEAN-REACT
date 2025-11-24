import {
  FiHome,
  FiCalendar,
  FiFileText,
  FiMessageSquare,
  FiMap,
  FiTrendingUp,
  FiSettings,
  FiUsers,
  FiSend,
  FiActivity,
  FiFolder,
} from "react-icons/fi";

import logo from "../../../assets/crm2-urbany.jpg";

const menuItems = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Actividades", icon: <FiActivity />, path: "/actividades" },
  { name: "Tasaciones", icon: <FiFileText />, path: "/tasaciones" },
  { name: "Propiedades", icon: <FiFolder />, path: "/propiedades" },
  { name: "Negocios", icon: <FiTrendingUp />, path: "/negocios" },
  { name: "Mensajes", icon: <FiMessageSquare />, path: "/mensajes" },
  { name: "Redes", icon: <FiSend />, path: "/redes" },
  { name: "Mapas", icon: <FiMap />, path: "/mapas" },
  { name: "Emprendimientos", icon: <FiTrendingUp />, path: "/emprendimientos" },
  { name: "Contactos", icon: <FiUsers />, path: "/contactos" },
  { name: "Reportes", icon: <FiFileText />, path: "/reportes" },
  { name: "Enviar comentarios", icon: <FiMessageSquare />, path: "/feedback" },
  { name: "Configuración", icon: <FiSettings />, path: "/config" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-full p-4 flex flex-col">
      {/* LOGO */}
      <div className="mb-6 flex flex-col items-center">
        <img src={logo} className="w-36 mb-2" />
        <p className="text-sm text-gray-600 font-medium">Menu</p>
      </div>

      {/* MENÚ */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
