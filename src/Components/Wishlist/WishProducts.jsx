import React from 'react'
import WishItem from './WishItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions.js'
import { addItemsToCart } from '../../Redux/cartActions.js'
    
  const WishProducts= () => {
  
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  const removeWishlist = (product) => {
      dispatch(removeItemFromWishlist(product.id))
      console.log('delete')
  }

  const handleAddToCart = (product) => {
      dispatch(addItemsToCart(product))
  }
 return(
    <div className='' >
         {Wishlist.map((product, index) => {          
            return (        
              <WishItem 
                key={index}
                product={product}
                removeItemFromWishlist={ () => removeWishlist(product)}
                addCart={() => handleAddToCart(product)}
                // date={date}

              />

            );
          })}
    </div>
      )
    }
    
    export default WishProducts
 
    