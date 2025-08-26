import React from 'react';

const CartWidget = () => {
  const cartItemCount = 3; // Esto puede venir luego del contexto o props

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      🛒
      <span>{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;