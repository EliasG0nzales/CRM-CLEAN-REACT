export default function ZoneSalesCard() {
  return (
    <div className="card">
      <h3>Ventas por zona</h3>

      <select className="dash-select">
        <option>Último trimestre</option>
      </select>

      <div className="zone-content">
        <p>Viendo cant. de ventas ▼</p>
        <p>Por distrito ▼</p>
        <p>Aún no hay resultados</p>
      </div>
    </div>
  );
}
