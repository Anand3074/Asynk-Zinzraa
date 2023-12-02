import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { removeItemsFromCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useSelector,useDispatch } from 'react-redux'


const CartList = () => {
  // Assuming the cart items are stored in the Redux store under the key 'cart'
  const cartItems = useSelector((state) => state.cart.cartItems);
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const removeItemFromCart = (itemId) =>{
    dispatch(removeItemsFromCart(itemId))
    // console.log('delete')
    // console.log(itemId) 
}

  const handleAddToWishlist = async (item) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
    // console.log(isItemInWishlist)
    if (isItemInWishlist) {
      console.log("")
      // dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

 
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
                moveToWishlist = {() =>handleAddToWishlist(item)}
                // date={date}

              />

            );
          })}

    </div>
  );
};

export default CartList
