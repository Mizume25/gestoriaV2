
import { Home } from 'lucide-react';

// Componente Boton al Home Dashboard
function HomeBtn({children} : any) {
  return (
      <button
      
      className="flex items-center gap-2 px-6 py-3 bg-indigo-900 hover:bg-indigo-800 text-white font-medium rounded-xl shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
    >
      <Home size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
      <a className="tracking-wide" href={route('dashboard')}>Inicio</a>
    </button>
  )
}

export default HomeBtn