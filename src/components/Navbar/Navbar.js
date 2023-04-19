import Cartwidget from "../../Cartwidget/Cartwidget"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2 className="navbar-logo"> Pina Lenceria y Blanqueria</h2>
        <div>
            <button className="Button">Mujer</button>
            <button className="Button">Hombre</button>
            <button className="Button">Niños</button>

        </div>
        <Cartwidget/>


    </nav>
  )
}

export default Navbar