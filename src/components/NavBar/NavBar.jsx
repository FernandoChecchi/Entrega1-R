import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <img src="/favicon.png" alt="VinoShop" className="nav-logo" />
        <h1>VinoShop</h1>
      </Link>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/tinto"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Tintos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/blanco"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Blancos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/rosado"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Rosados
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/espumante"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Espumantes
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
