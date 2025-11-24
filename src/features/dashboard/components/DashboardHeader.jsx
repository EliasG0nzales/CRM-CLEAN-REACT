import logo from "../../../assets/crm2-urbany.jpg";
import { FiSearch, FiBell } from "react-icons/fi";

export default function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src={logo} className="header-logo" />
        <h1>Dashboard</h1>
      </div>

      <div className="header-center">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>

      <div className="header-right">
        <a className="premium-btn">Ser premium</a>
        <FiBell className="notif-icon" />

        <div className="profile-box">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="profile-img"
          />
          <div className="profile-info">
            <p className="name">María</p>
            <p className="role">Administrador</p>
          </div>
        </div>
      </div>
    </header>
  );
}
