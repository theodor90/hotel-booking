import React from 'react';
import './ProductList.css';
import ProductCard from '../../components/productcard/ProductCard';

export default function Product() {
  return (
    <div>   
      <div>
      <h1 className="header">List of Hotels</h1>
      </div>  
      <ProductCard/>     
    </div>
  );
}

