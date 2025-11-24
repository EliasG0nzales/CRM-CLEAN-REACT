import Tabs from "./Tabs";

export default function SalesCard() {
  return (
    <div className="card">
      <div className="sales-card-header-row">
        <select className="select-inline">
          <option>USD</option>
          <option>PEN/S</option>
        </select>

        <select className="select-inline">
          <option>Elige un agente</option>
          <option>Todos</option>
          <option>Equipo 1</option>
        </select>

        <select className="select-inline">
          <option>Mostrar último trimestre</option>
          <option>Este mes</option>
          <option>Este año</option>
        </select>
      </div>

      <h3>Ventas concretadas</h3>

      <Tabs tabs={["Facturación", "Cantidad de operaciones"]} />

      <div className="sales-card-body">
        <p>Ventas concretadas</p>
        <div className="sales-card-amount">U$D 0</div>
      </div>
    </div>
  );
}
