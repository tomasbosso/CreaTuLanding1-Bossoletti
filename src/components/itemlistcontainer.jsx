import React from 'react';

const ItemListContainer = ({ productos }) => {
  return (
    <section>
      <h2 className='bienvenido'>{productos}</h2>
      <div className='productos'>
      <p>Paleta royal padel</p>
      <p>Paleta bullpadel</p>
      <p>Paleta Nox</p>
      </div>
    </section>
  );
};

export default ItemListContainer;