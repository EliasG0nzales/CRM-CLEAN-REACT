export default function StageChartCard() {
  return (
    <div className="card">
      <h3>Negocio abierto por etapa</h3>

      <div className="chart-bar-container">
        {[
          { etapa: "Nuevo", value: 70 },
          { etapa: "Contactado", value: 55 },
          { etapa: "Visita", value: 30 },
          { etapa: "En Negociación", value: 50 },
          { etapa: "Nulo", value: 25 },
        ].map((bar, index) => (
          <div key={index} className="chart-bar">
            <div
              className="bar"
              style={{ height: bar.value + "%" }}
            ></div>
            <label>{bar.etapa}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
