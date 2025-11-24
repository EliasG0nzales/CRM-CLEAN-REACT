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
    <div className="dashboard">

      <DashboardHeader />

      <div className="dashboard-grid-top">
        <SalesCard />
        <TasksCard />
        <WalletCard />
      </div>

      <div className="dashboard-grid-bottom">
        <LeadsByOrigin />
        <StageChartCard />
        <ZoneSalesCard />
      </div>

    </div>
  );
}
