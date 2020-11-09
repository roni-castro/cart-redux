import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  const catalog = useSelector(state => state)
  console.warn(catalog)
  return <div>Catalog</div>;
}

export default Catalog;
