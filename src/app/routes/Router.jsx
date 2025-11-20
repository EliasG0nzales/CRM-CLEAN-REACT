import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../shared/components/Layout/MainLayout.jsx';

// CRM modules
import Dashboard from '../../features/dashboard/Dashboard.jsx';
import Actividades from '../../features/actividades/Actividades.jsx';
import Tasaciones from '../../features/tasaciones/Tasaciones.jsx';
import Propiedades from '../../features/propiedades/Propiedades.jsx';
import Negocios from '../../features/negocios/Negocios.jsx';
import Mensajes from '../../features/mensajes/Mensajes.jsx';
import Redes from '../../features/redes/Redes.jsx';
import Mapas from '../../features/mapas/Mapas.jsx';
import Emprendimientos from '../../features/emprendimientos/Emprendimientos.jsx';
import Contactos from '../../features/contactos/Contactos.jsx';
import Reportes from '../../features/reportes/Reportes.jsx';
import Configuracion from '../../features/configuracion/Configuracion.jsx';

export default function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/tasaciones" element={<Tasaciones />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/negocios" element={<Negocios />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/mapas" element={<Mapas />} />
        <Route path="/emprendimientos" element={<Emprendimientos />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </MainLayout>
  );
}
