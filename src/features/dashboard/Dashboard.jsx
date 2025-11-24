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
    <div className="dashboard-layout">

      {/* HEADER */}
      <DashboardHeader />

      {/* GRID SUPERIOR */}
      <div className="dashboard-top-grid">
        <SalesCard />
        <TasksCard />
        <WalletCard />
      </div>

      {/* GRID INFERIOR */}
      <div className="dashboard-bottom-grid">
        <LeadsByOrigin />
        <StageChartCard />
        <ZoneSalesCard />
      </div>

    </div>
  );
}
