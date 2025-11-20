import Sidebar from './Sidebar.jsx';

export default function MainLayout({ children }) {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex-1 overflow-auto p-6'>
        {children}
      </div>
    </div>
  );
}
