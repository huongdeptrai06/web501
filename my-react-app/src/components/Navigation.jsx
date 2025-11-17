import { NavLink } from 'react-router-dom'

const baseLinkClasses = 'px-3 py-2 font-semibold uppercase'

export default function Navigation() {
  return (
    <nav className="flex justify-center gap-4 bg-slate-100 py-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseLinkClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600'}`
        }
      >
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseLinkClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600'}`
        }
      >
      </NavLink>
    </nav>
  )
}