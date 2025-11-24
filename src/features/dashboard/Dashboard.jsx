import DashboardHeader from "./components/DashboardHeader";
import SalesCard from "./components/SalesCard";
import TasksCard from "./components/TasksCard";
import WalletCard from "./components/WalletCard";
import LeadsByOrigin from "./components/LeadsByOrigin";
import StageChartCard from "./components/StageChartCard";
import ZoneSalesCard from "./components/ZoneSalesCard";

import "./styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* TOP BAR: título, buscador, perfil */}
      <DashboardHeader />

      {/* FILA SUPERIOR: ventas, tareas, valor de cartera */}
      <div className="dashboard-top-grid">
        <SalesCard />
        <TasksCard />
        <WalletCard />
      </div>

      {/* FILA INFERIOR: ¿Cómo obtienes negocios?, gráfico, ventas por zona */}
      <div className="dashboard-bottom-grid">
        <LeadsByOrigin />
        <StageChartCard />
        <ZoneSalesCard />
      </div>
    </div>
  );
}
