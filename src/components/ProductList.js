import React from 'react';
import Product from './Product';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="productList">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
