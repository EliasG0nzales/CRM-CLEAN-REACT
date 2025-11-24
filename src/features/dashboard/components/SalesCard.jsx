export default function SalesCard() {
  return (
    <div className="card">
      <h3>Ventas concretadas</h3>

      <div className="sales-tabs">
        <button className="tab active">Facturación</button>
        <button className="tab">Cantidad de operaciones</button>
      </div>

      <p className="sales-amount">U$D0</p>
    </div>
  );
}
