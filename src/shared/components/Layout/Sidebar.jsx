import { NavLink } from 'react-router-dom';
import { FiHome, FiBell, FiLayers, FiUsers, FiMessageSquare, FiSettings, FiMap } from 'react-icons/fi';

const menu = [
  { name: 'Dashboard', icon: <FiHome />, path: '/' },
  { name: 'Actividades', icon: <FiBell />, path: '/actividades' },
  { name: 'Tasaciones', icon: <FiLayers />, path: '/tasaciones' },
  { name: 'Propiedades', icon: <FiLayers />, path: '/propiedades' },
  { name: 'Negocios', icon: <FiUsers />, path: '/negocios' },
  { name: 'Mensajes', icon: <FiMessageSquare />, path: '/mensajes' },
  { name: 'Redes', icon: <FiUsers />, path: '/redes' },
  { name: 'Mapas', icon: <FiMap />, path: '/mapas' },
  { name: 'Emprendimientos', icon: <FiLayers />, path: '/emprendimientos' },
  { name: 'Contactos', icon: <FiUsers />, path: '/contactos' },
  { name: 'Reportes', icon: <FiLayers />, path: '/reportes' },
  { name: 'Configuración', icon: <FiSettings />, path: '/configuracion' },
];

export default function Sidebar() {
  return (
    <aside className='w-64 bg-white border-r h-screen p-4'>
      <h1 className='text-xl font-bold mb-6'>CRM Urbany</h1>
      <nav className='space-y-2'>
        {menu.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              \lex items-center gap-3 px-3 py-2 rounded-md \\
            }
          >
            {item.icon} {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
