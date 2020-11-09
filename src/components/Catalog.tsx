import React from 'react';
import { getProducts } from '../services/getProducts';
import { ICartProduct } from '../store/modules/cart/types';
import CartItem from '../components/CartItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = React.useState<ICartProduct[]>([]);

  React.useEffect(() => {
    getProducts().then(productsData => {
      setCatalog(productsData);
    });
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalog;
