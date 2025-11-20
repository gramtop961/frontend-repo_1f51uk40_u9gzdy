import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-blue-200/80 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30"></div>
          <span className="text-white font-semibold tracking-tight group-hover:text-blue-100">Boost AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItem('/', 'Home')}
          {navItem('/services', 'Services')}
          {navItem('/portfolio', 'Portfolio')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            Book a Free Consultation
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            <div className="flex flex-col">
              {navItem('/', 'Home')}
              {navItem('/services', 'Services')}
              {navItem('/portfolio', 'Portfolio')}
              {navItem('/about', 'About')}
              {navItem('/contact', 'Contact')}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors w-full"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
