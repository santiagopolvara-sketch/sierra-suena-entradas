import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-sierra-dark border-b border-sierra-primary">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-sierra-primary font-bold text-xl">Sierra Suena</Link>
        <div className="flex gap-6">
          <Link to="/events" className="text-white hover:text-sierra-primary">Eventos</Link>
          <Link to="/cart" className="text-white hover:text-sierra-primary">Carrito</Link>
          <Link to="/profile" className="text-white hover:text-sierra-primary">Perfil</Link>
        </div>
      </div>
    </nav>
  )
}
