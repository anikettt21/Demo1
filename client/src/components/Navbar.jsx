import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-900">TechFix <span className="text-brand">Hub</span></span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>Shop</NavLink>
          <NavLink to="/repair" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>Repairs</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>Contact</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive ? 'text-brand font-semibold' : 'text-slate-700 hover:text-brand'}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
