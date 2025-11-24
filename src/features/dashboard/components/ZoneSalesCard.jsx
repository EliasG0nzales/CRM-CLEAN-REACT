export default function ZoneSalesCard() {
  return (
    <div className="card">
      <div className="zone-header">
        <div>
          <label style={{ fontSize: 11, color: "#6b7280" }}>Últ. trimestre</label>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Ventas por zona</div>
        </div>
        <span style={{ fontSize: 18 }}>📊</span>
      </div>

      <div className="zone-subheader">Viendo cant. de ventas ▾</div>

      <div className="zone-filters">
        <span>Por distrito ▾</span>
        <span>Por provincia ▾</span>
      </div>

      <div className="zone-placeholder">Aún no hay resultados</div>
    </div>
  );
}
