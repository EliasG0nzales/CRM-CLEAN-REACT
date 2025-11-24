export default function DashboardHeader() {
  return (
    <header className="dash-header">
      <h2>Dashboard</h2>

      <div className="dash-header-actions">
        <input
          type="text"
          placeholder="Buscar..."
          className="dash-search"
        />
        <select className="dash-select">
          <option>USD</option>
          <option>EUR</option>
          <option>PEN</option>
        </select>
      </div>
    </header>
  );
}
