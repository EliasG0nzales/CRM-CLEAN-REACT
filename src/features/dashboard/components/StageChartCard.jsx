import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function StageChartCard() {
  const data = {
    labels: ["Nuevo", "Contactado", "Visita", "Negociación", "Nulo"],
    datasets: [
      {
        label: "Negocios",
        backgroundColor: "#2D8CF0",
        data: [70, 55, 30, 50, 25],
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <h3 className="font-semibold mb-4">Negocio abierto por etapa</h3>
      <Bar data={data} />
    </div>
  );
}
