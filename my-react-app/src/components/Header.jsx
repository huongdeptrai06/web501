import { NavLink } from 'react-router-dom'

export default function Header() {
  const baseClasses = 'px-3 py-2'

  return (
    <nav className="my-2">
      <ul className="flex justify-around text-xl font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`
            }
          >
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}