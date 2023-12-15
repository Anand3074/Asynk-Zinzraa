import React from 'react'
import CartItem from './CartItem'
import { Link, useParams } from 'react-router-dom'
import { removeItemsFromCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useSelector,useDispatch } from 'react-redux'


const CartList = () => {
  // Assuming the cart items are stored in the Redux store under the key 'cart'
  const {id} = useParams()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const removeItemFromCart = (id) =>{
    dispatch(removeItemsFromCart(id))
    // console.log('delete')
    // console.log(itemId) 
}

  const handleAddToWishlist = async (product) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === product.id);
    // console.log(isItemInWishlist)
    if (isItemInWishlist) {
      // console.log("")
      // dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

 
  // console.log(cartItems)

  return (
    <div>
      {cartItems.map((product, index) => {          
            // const { title, price, imageUrl, category, description, id } = item;
            return (        
              <CartItem 
                key={index}
                // title={title}
                // price={price}
                // imageUrl={imageUrl}
                // category={category}
                // description={description}
                product={product}
                removeItemFromCart={ () => removeItemFromCart(product.id)}
                moveToWishlist = {() =>handleAddToWishlist(product)}
                // date={date}

              />

            );
          })}

    </div>
  );
};

export default CartList
