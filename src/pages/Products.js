import { Link } from 'react-router-dom'
import React from 'react';

const Products = () => {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        <li><Link to="/products/p1">Book</Link></li>
        <li><Link to="/products/p2">Chair</Link></li>
        <li><Link to="/products/p3">Shoe</Link></li>
      </ul>
    </>
  );
};

export default Products;
