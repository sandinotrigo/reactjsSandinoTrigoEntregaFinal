//ejemplo del proyecto Js
/*import Navitem from "./Navitem";
function Navbar() {
    return(
        <header>
        <nav>
            <ul>
            <Navitem href="/">Logotuerca</Navitem>
            <Navitem href="/home">Inicio</Navitem>
            <Navitem href="/tornillos">Tornillos</Navitem>
            <Navitem href="/otros">otros</Navitem>
            </ul>
        </nav>
        </header>
    )
    
}
export default Navbar;*/


import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav-menu">
        <Link to="/"> Inicio </Link>
        
        <Link to="/Categoria/Motosierras">Motosierras</Link>
        <Link to="/Categoria/Taladros">Taladros</Link>
        <Link to="/Categoria/Otros">Otros</Link>
        {/* <CartWidget></CartWidget> */}
        <Link to="/Carrito">Carrito</Link>
        <li>
          Items: <span className="cart-count">0</span>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
    
