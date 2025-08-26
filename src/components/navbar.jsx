import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='contenedor-navbar'>
        <div className='icono'>
          🛍️ VirtualPadel
        </div>
        <div className='lista'>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>

        <div className='carrito'>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;