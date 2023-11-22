import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { removeItemsFromCart } from '../../Redux/cartActions'
import { useSelector,useDispatch } from 'react-redux'


const CartList = () => {
  // Assuming the cart items are stored in the Redux store under the key 'cart'
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const removeItemFromCart = (itemId) =>{
      dispatch(removeItemsFromCart(itemId))
      // console.log('delete')
      // console.log(itemId) 
  }
  // console.log(cartItems)

  return (
    <div>
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
                removeItemFromCart={ () => removeItemFromCart(id)}
                // date={date}

              />

            );
          })}

    </div>
  );
};

export default CartList
