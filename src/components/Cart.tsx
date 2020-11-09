import React from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cartItems = useSelector<IStoreState, ICartItem[]>(state => state.cart.items);

  return (
    <table style={{ textAlign: "left", marginTop: 20 }}>
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(({ product, quantity }) => (
          <tr key={product.id} test-id="cart-item">
            <th>{product.title}</th>
            <th>{product.price}</th>
            <th>{quantity}</th>
            <th>{(quantity * product.price).toFixed(2)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
