import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/components/Layout/MainLayout";
import Dashboard from "./features/dashboard/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Agrega más rutas aquí según vayas creando las páginas */}
          <Route path="actividades" element={<div>Página de Actividades</div>} />
          <Route path="propiedades" element={<div>Página de Propiedades</div>} />
          <Route path="contactos" element={<div>Página de Contactos</div>} />
          {/* ... otras rutas */}
        </Route>
        
        {/* Ruta 404 */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}