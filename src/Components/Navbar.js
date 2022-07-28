import React from "react";
import './Navbar.css';
import { FaLeaf } from "react-icons/fa";
import Cartwidget from './Cartwidget';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        <p>
          <FaLeaf/> VeganShop
        </p>
      </div>
      <div className='boton'>
        <p>
           Inicio
        </p>
      </div>
      <div className='boton'>
        <p>
           Contacto
        </p>
      </div>
      <div className='boton'>
        <p>
           Ubicación
        </p>
      </div>
      <Cartwidget/>
      </nav>
  )
}

export default Navbar;