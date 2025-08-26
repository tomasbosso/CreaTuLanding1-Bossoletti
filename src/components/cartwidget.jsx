import React from 'react';

const CartWidget = () => {
  const cartItemCount = 3;

  return (
    <div>
      🛒
      <span>{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;