import React from 'react'
import Cards from './Cards.jsx'
import { Link, useParams } from 'react-router-dom'
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import { ToastContainer, toast } from 'react-toastify';
// import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const ProductList = ({ products}) => {
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    toast("Product Added to Cart")
      dispatch(addItemsToCart(product))
    console.log(product)
  }
  
  const handleAddToWishlist = (product) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === product.id);
    if (isItemInWishlist) {
      dispatch(removeItemFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }

  };
  const handleCardDetail = (product) => {
    dispatch(setSelectedProduct({product}));
    // console.log(product)
  };


  return (
    
    <div>
    <div className='flex justify-start items-start flex-grow-1'>
    <Link to="/Cart">
      <div className=''><ToastContainer/></div>
    </Link>
    <div className='grid md:grid-cols-3 grid-cols-2 ml-[3vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
    {
          products && products.map((product , index) => {
            // const {id} = useParams()
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === product.id);
            // console.log('isItemInWishlist', isItemInWishlist)
            // console.log(product.id)
{
    return(
        <div key={index}>
        <Cards products={product}
         isWishlisted={isItemInWishlist}
         addCart={ () => handleAddToCart(product)}
         addWish={() => handleAddToWishlist(product)}
         Detail={() => handleCardDetail(product)} />
      </div>
             )
        }
    })              
        }
      </div>

    </div>
  </div>

  )
}

export default ProductList