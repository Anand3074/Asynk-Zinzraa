import React from 'react'
import WishItem from './WishItem.jsx'
// import { Link } from 'react-router-dom'
// import EmptyWish from './EmptyWish.jsx'
// import WishHead from './WishHead.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions.js'
import { addItemsToCart } from '../../Redux/cartActions.js'
    
    const WishProducts= () => {
        const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const removeWishlist = (itemId) =>{
      dispatch(removeItemFromWishlist(itemId))
      console.log('delete')
      // console.log(itemId) 
  }

  // console.log(Wishlist)
  const handleAddToCart = (item) => {
      // console.log(item)
      dispatch(addItemsToCart(item))
  }
 return(
    <div className='' >
         {Wishlist.map((item, index) => {          
            const { title, price, imageUrl, category, description, id } = item;
            return (        
              <WishItem 
                key={index}
                title={title}
                price={price}
                imageUrl={imageUrl}
                category={category}
                description={description}
                removeItemFromWishlist={ () => removeWishlist(id)}
                addCart={() => handleAddToCart(item)}
                // date={date}

              />

            );
          })}
    </div>
      )
    }
    
    export default WishProducts
 
    