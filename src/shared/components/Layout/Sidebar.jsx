import { NavLink } from "react-router-dom";
import logo from "../../../assets/crm2-urbany.jpg";
import {
  FiHome,
  FiActivity,
  FiFileText,
  FiLayers,
  FiUsers,
  FiMessageSquare,
  FiShare2,
  FiMap,
  FiTrendingUp,
  FiUser,
  FiAlertCircle,
  FiSend,
  FiSettings,
} from "react-icons/fi";

import "./Sidebar.css";

export default function Sidebar() {
  const menu = [
    { icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FiActivity />, label: "Actividades", path: "/actividades" },
    { icon: <FiFileText />, label: "Tasaciones", path: "/tasaciones" },
    { icon: <FiLayers />, label: "Propiedades", path: "/propiedades" },
    { icon: <FiTrendingUp />, label: "Negocios", path: "/negocios" },
    { icon: <FiMessageSquare />, label: "Mensajes", path: "/mensajes" },
    { icon: <FiShare2 />, label: "Redes", path: "/redes" },
    { icon: <FiMap />, label: "Mapas", path: "/mapas" },
    { icon: <FiTrendingUp />, label: "Emprendimientos", path: "/emprendimientos" },
    { icon: <FiUsers />, label: "Contactos", path: "/contactos" },
    { icon: <FiAlertCircle />, label: "Reportes", path: "/reportes" },
    { icon: <FiSend />, label: "Enviar comentarios", path: "/comentarios" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} className="sidebar-logo" alt="CRM Urbany" />
      </div>

      <div className="sidebar-menu-title">Menu</div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/configuracion" className="sidebar-item">
          <FiSettings />
          <span>Configuración</span>
        </NavLink>
      </div>
    </aside>
  );
}
