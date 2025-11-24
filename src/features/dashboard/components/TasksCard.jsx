export default function TasksCard() {
  return (
    <div className="card">
      <h3>Mis tareas de hoy</h3>

      <div className="tasks-list">
        <div className="tasks-check">✓</div>
        <p>No hay actividades pendientes</p>
        <p className="tasks-link">Ir a mi calendario</p>
      </div>
    </div>
  );
}
