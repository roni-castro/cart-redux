import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartProduct } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IStoreState } from '../store';

interface CartItemProps {
  product: ICartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const disptach = useDispatch();
  const isProductOutOfStock = useSelector<IStoreState, boolean>(
    state => !!state.cart.failureProductIds.find(id => id === product.id)
  );

  const handleAddProduct = () => {
    disptach(addProductToCartRequest(product));
  };

  return (
    <div>
      <article key={product.id}>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span> {" "}
        <button type="button" onClick={handleAddProduct}>Comprar</button>
        {isProductOutOfStock &&
          <span role="alert" style={{ color: 'red', fontWeight: 'bold' }}> Falta de estoque</span>
        }
      </article>
    </div>
  );
};

export default CartItem;
