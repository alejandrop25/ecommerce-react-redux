import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

type ProductCardProps = {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  
const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <img src={image} width="200px" alt={name} />
       <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
   );
};
  
  export default ProductCard;