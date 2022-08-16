import React from "react";
import './Navbar.css';
import { FaLeaf } from "react-icons/fa";
import Cartwidget from './Cartwidget';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
          <FaLeaf/> VeganShop
      </Link>
      <div className='Categorias'>
        <ul>
           <Link to='/category/Especias' className="Option">Especias</Link>
           <Link to='/category/Legumbres' className="Option">Legumbres</Link>
           <Link to='/category/Pastas' className="Option">Pastas</Link>
        </ul>
      </div>
      <Cartwidget/>
    </nav>
  )
}

export default Navbar;