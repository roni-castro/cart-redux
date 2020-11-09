import React from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../services/getProducts';
import { ICartProduct } from '../store/modules/cart/types';
import { addProductToCart } from '../store/modules/cart/actions';

const Catalog: React.FC = () => {
  const disptach = useDispatch();
  const [catalog, setCatalog] = React.useState<ICartProduct[]>([]);

  React.useEffect(() => {
    getProducts().then(productsData => {
      setCatalog(productsData);
    });
  }, []);

  const handleAddProduct = (product: ICartProduct) => {
    disptach(addProductToCart(product));
  };

  return (
    <div>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> { " - "}
          <span>{product.price}</span> { " "}
          <button type="button" onClick={() => handleAddProduct(product)}>Comprar</button>
        </article>
      ))}
    </div>
  );
};

export default Catalog;;
