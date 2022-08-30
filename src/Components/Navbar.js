import React from "react";
import './Navbar.css';
import { FaLeaf } from "react-icons/fa";
import Cartwidget from './Cartwidget';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link className="OptionLogo" to='/'>
          <FaLeaf/> VeganShop
      </Link>
      <div className='Categorias'>
        <ul>
           <Link to='/category/Especias' className="OptionCategory">Especias</Link>
           <Link to='/category/Legumbres' className="OptionCategory">Legumbres</Link>
           <Link to='/category/Pastas' className="OptionCategory">Pastas</Link>
        </ul>
      </div>
      <Cartwidget/>
    </nav>
  )
}

export default Navbar;