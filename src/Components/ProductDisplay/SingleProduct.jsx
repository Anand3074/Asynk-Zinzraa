import React from 'react'
import ProductChart from './ProductChart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'



const Productsize = (item) => {   
    const selectedProduct = useSelector((state) => state.product.selectedProduct)
        // console.log(selectedProduct)
        // console.log(isWishlistClicked)


        const dispatch = useDispatch()
        const handleAddToCart = (item) => {
            // console.log(item)
            toast("Product Added to Cart")
            dispatch(addItemsToCart(item))
        }
        
        const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
        const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === selectedProduct.id);
        // console.log('item', isItemInWishlist)
        const [isWishlistClicked, setIsWishlistClicked] = useState(isItemInWishlist);

        //console.log(isWishlistClicked)
        const handleAddToWishlist = () => {
            const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === selectedProduct.id);
            
            //  console.log(isItemInWishlist)
            
            if (isItemInWishlist) {
              dispatch(removeItemFromWishlist(selectedProduct.id));
            } else {
              dispatch(addToWishlist(selectedProduct));
            }
            setIsWishlistClicked(!isItemInWishlist);
          };
        //   console.log(isWishlistClicked)

  return (
    <div>
        <div className=''>
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
            <div className='flex sm:flex-row flex-col '>
                <div className='flex flex-row justify-center'>
                    <div>
                        <div className='flex flex-col mr-[1.2vw]'>
                            <div>
                                <img src={selectedProduct.imageUrl} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] mb-[2vw] '/>
                            </div>
                            <div>
                                <img src={selectedProduct.imageUrl} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] mb-[2vw]'/>
                            </div>
                            <div>
                                <img src={selectedProduct.imageUrl} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] '/>
                            </div>
                        </div>
                    </div> 
                    <div className='h-[83vw] sm:h-[55vw] sm:w-[50vw] w-[70vw]'>
                        <img src={selectedProduct.imageUrl} className='h-[81vw] sm:h-[55vw] sm:w-[50vw] w-[70vw]'/>
                    </div>
                </div>
{/* Image above1  */}
            <div><ProductChart         
            isWishlisted={isWishlistClicked}
             price={selectedProduct.price} Description={selectedProduct.description}
             addCart={ () => handleAddToCart(selectedProduct)} 
             addWish={() => handleAddToWishlist(selectedProduct)}/></div>
            </div>
        </div>
    </div>
  )
}

export default Productsize