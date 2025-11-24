export default function LeadsByOrigin() {
  return (
    <div className="card">
      <h3>¿Cómo obtienes negocios?</h3>

      <select className="dash-select">
        <option>Último trimestre</option>
      </select>

      <div className="tabs-row">
        <button className="tab active">Todos</button>
        <button className="tab">Portales pagos</button>
        <button className="tab">Portales gratuitos</button>
      </div>

      <p>Negocios creados</p>
    </div>
  );
}
