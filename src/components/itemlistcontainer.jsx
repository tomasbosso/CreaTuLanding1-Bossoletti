import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 80px)',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#333' }}>{greeting}</h2>
    </section>
  );
};

export default ItemListContainer;