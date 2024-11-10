import React from 'react';
import ProductList from '../components/ProductList'; 

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>The Clothing Co.</h1>
      <div className="container__products">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;