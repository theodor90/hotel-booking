import React from 'react';
import './Product.css';
import Grid from '../../components/grid/Grid';
import ProductCard from '../../components/productcard/ProductCard';

export default function Product() {
  return (
    <div>   
      <div>
      <h1 className="header">Hotels</h1>
      </div>                 
      <Grid/>
    </div>
  );
}

