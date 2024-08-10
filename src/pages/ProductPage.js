import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="productPage">
      <img src={product.image} alt={product.title} className="productPage__image" />
      <h1 className="productPage__title">{product.title}</h1>
      <p className="productPage__price">${product.price}</p>
      <p className="productPage__description">{product.description}</p>
    </div>
  );
}

export default ProductPage;
