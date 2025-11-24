import Tabs from "./Tabs";

export default function SalesCard() {
  return (
    <div className="card">
      <h3>Ventas concretadas</h3>

      <Tabs tabs={["Facturación", "Cantidad de operaciones"]} />

      <p className="mt-2 text-gray-600">Ventas concretadas</p>
      <h1 className="text-4xl font-bold">U$D 0</h1>
    </div>
  );
}
