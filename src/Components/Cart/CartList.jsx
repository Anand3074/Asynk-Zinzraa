import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const CartList = () => {
  // Assuming the cart items are stored in the Redux store under the key 'cart'
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems)

  return (
    <div>
      {/* Map through the cart items and render the CartItem component 
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))} */}
      {cartItems.map((item, index) => {          
            const { title, price, imageUrl, category, description, id } = item;
            return (        
              <CartItem 
                key={index}
                title={title}
                price={price}
                imageUrl={imageUrl}
                category={category}
                description={description}
                // date={date}

              />

            );
          })}

    </div>
  );
};

export default CartList
