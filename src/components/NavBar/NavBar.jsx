import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <h1>🍷 VinoShop</h1>
      </div>

      <ul>
        <li>Tintos</li>
        <li>Blancos</li>
        <li>Rosados</li>
        <li>Espumantes</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
