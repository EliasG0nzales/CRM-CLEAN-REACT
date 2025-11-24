import { useState } from "react";

const TABS = ["Todos", "Portales pagos", "Portales gratuitos"];

export default function LeadsByOrigin() {
  const [active, setActive] = useState("Todos");

  return (
    <div className="card">
      <div className="leads-header-row">
        <h3>¿Cómo obtienes negocios?</h3>
        <span style={{ fontSize: 18 }}>☰</span>
      </div>

      <div className="leads-filter-row">
        <label style={{ fontSize: 12, color: "#6b7280" }}>Últ. trimestre</label>
        <br />
        <select className="select-inline">
          <option>Últ. trimestre</option>
          <option>Esta semana</option>
          <option>Este mes</option>
          <option>Este trimestre</option>
          <option>Este año</option>
        </select>
      </div>

      <div className="leads-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={
              active === tab ? "leads-tab leads-tab-active" : "leads-tab"
            }
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, fontSize: 13, color: "#4b5563" }}>
        <p>Negocios creados</p>
        <p style={{ fontWeight: 600 }}>0</p>
      </div>
    </div>
  );
}
