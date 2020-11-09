import React from 'react';
import { useDispatch } from 'react-redux';
import { ICartProduct } from '../store/modules/cart/types';
import { addProductToCart } from '../store/modules/cart/actions';

interface CartItemProps {
  product: ICartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const disptach = useDispatch();

  const handleAddProduct = () => {
    disptach(addProductToCart(product));
  };

  return (
    <div>
      <article key={product.id}>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span> {" "}
        <button type="button" onClick={handleAddProduct}>Comprar</button>
      </article>
    </div>
  );
};

export default CartItem;
