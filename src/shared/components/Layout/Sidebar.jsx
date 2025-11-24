import { NavLink } from "react-router-dom";
import logo from "../../../assets/crm2-urbany.jpg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="CRM Urbany" />
      </div>

      <p className="menu-title">Menu</p>

      <nav className="sidebar-menu">

        <NavLink to="/dashboard" className="item">
          <span>📊 Dashboard</span>
        </NavLink>

        <NavLink to="/actividades" className="item">
          <span>✔ Actividades</span>
        </NavLink>

        <NavLink to="/tasaciones" className="item">
          <span>💲 Tasaciones</span>
        </NavLink>

        <NavLink to="/propiedades" className="item">
          <span>🏢 Propiedades</span>
        </NavLink>

        <NavLink to="/negocios" className="item">
          <span>💼 Negocios</span>
        </NavLink>

        <NavLink to="/mensajes" className="item">
          <span>✉ Mensajes</span>
        </NavLink>

        <NavLink to="/redes" className="item">
          <span>📡 Redes</span>
        </NavLink>

        <NavLink to="/mapas" className="item">
          <span>🌍 Mapas</span>
        </NavLink>

        <NavLink to="/emprendimientos" className="item">
          <span>🤝 Emprendimientos</span>
        </NavLink>

        <NavLink to="/contactos" className="item">
          <span>👥 Contactos</span>
        </NavLink>

        <NavLink to="/reportes" className="item">
          <span>⚠ Reportes</span>
        </NavLink>

        <NavLink to="/comentarios" className="item">
          <span>💬 Enviar comentarios</span>
        </NavLink>

        <NavLink to="/configuracion" className="item">
          <span>⚙ Configuración</span>
        </NavLink>

      </nav>
    </aside>
  );
}
