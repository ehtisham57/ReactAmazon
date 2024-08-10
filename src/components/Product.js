import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product__image" />
      <h2 className="product__title">{product.title}</h2>
      <p className="product__price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="product__link">View Details</Link>
    </div>
  );
}

export default Product;
