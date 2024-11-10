import React from 'react';
import ProductCard from './ProductCard'; 
import '../styles/ProductList.css';


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 10.0, image: 'https://cdn.vnda.com.br/694x/brutalkill/2024/08/01/09_31_25_556_9_8_1_148_camisetacandlegoatfrente19d693eff0581351b181622567576709010241024.jpg?v=1722515488' },
  { id: '2', name: 'Product 2', price: 20.0, image: 'https://cdn.vnda.com.br/694x/brutalkill/2024/08/01/09_31_25_556_9_8_1_148_camisetacandlegoatfrente19d693eff0581351b181622567576709010241024.jpg?v=1722515488' },
  { id: '3', name: 'Product 3', price: 30.0, image: 'https://cdn.vnda.com.br/694x/brutalkill/2024/08/01/09_31_25_556_9_8_1_148_camisetacandlegoatfrente19d693eff0581351b181622567576709010241024.jpg?v=1722515488' },
  { id: '4', name: 'Product 1', price: 10.0, image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/aolqgkgz/camiseta-carnan-rose-heavy-tshirt-off.jpg' },
  { id: '5', name: 'Product 2', price: 20.0, image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/aolqgkgz/camiseta-carnan-rose-heavy-tshirt-off.jpg' },
  { id: '6', name: 'Product 3', price: 30.0, image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/aolqgkgz/camiseta-carnan-rose-heavy-tshirt-off.jpg' }
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;