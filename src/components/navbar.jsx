import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      width: '100%',
      height: '80px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #ddd',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1, fontWeight: 'bold', fontSize: '1.8rem', textAlign: 'left' }}>
          🛍️ VirtualPadel
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;