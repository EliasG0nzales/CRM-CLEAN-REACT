export default function StageChartCard() {
  // Alturas aproximadas de las barras (%)
  const bars = [
    { label: "Nuevo", value: 70 },
    { label: "Contactado", value: 55 },
    { label: "Visita", value: 30 },
    { label: "En negociación", value: 50 },
    { label: "Nulo", value: 25 },
  ];

  return (
    <div className="card">
      <div className="stage-card-header">
        <h3>Negocio abierto por etapa</h3>

        <div>
          <label style={{ fontSize: 12, marginRight: 4 }}>Semanal</label>
          <select className="select-inline">
            <option>Semanal</option>
            <option>Mensual</option>
            <option>Trimestral</option>
            <option>Anual</option>
          </select>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-bars">
          {bars.map((b) => (
            <div
              key={b.label}
              className="chart-bar"
              style={{ height: `${b.value}%` }}
            />
          ))}
        </div>

        <div className="chart-labels">
          {bars.map((b) => (
            <span key={b.label}>{b.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
