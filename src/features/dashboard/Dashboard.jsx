import SalesCard from "./components/SalesCard";
import TasksCard from "./components/TasksCard";
import WalletCard from "./components/WalletCard";
import LeadsByOrigin from "./components/LeadsByOrigin";
import StageChartCard from "./components/StageChartCard";
import ZoneSalesCard from "./components/ZoneSalesCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">

      {/* TOP LEFT – Ventas concretadas */}
      <div className="col-span-8">
        <SalesCard />
      </div>

      {/* TOP RIGHT – Mis tareas + Valor de cartera */}
      <div className="col-span-4 flex flex-col gap-6">
        <TasksCard />
        <WalletCard />
      </div>

      {/* SECOND ROW */}
      <div className="col-span-4">
        <LeadsByOrigin />
      </div>

      <div className="col-span-5">
        <StageChartCard />
      </div>

      <div className="col-span-3">
        <ZoneSalesCard />
      </div>
    </div>
  );
}
