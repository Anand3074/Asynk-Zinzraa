import React from 'react'
import Cards from '../../Components/ProductDisplay/Cards.jsx'
import { Link, useParams } from 'react-router-dom'
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import { ToastContainer, toast } from 'react-toastify';
// import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const ProductList = ({ products}) => {
  console.log(products)
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch()
  const handleAddToCart = (item) => {
    toast("Product Added to Cart")
      dispatch(addItemsToCart(item))
    // console.log(item)
  }
  
  const handleAddToWishlist = (item) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
    if (isItemInWishlist) {
      dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }

  };
  const handleCardDetail = (item) => {
    dispatch(setSelectedProduct(item));
    // console.log(item)
  };


  return (
    
    <div>
    <div className='flex justify-start items-start flex-grow-1'>
    <Link to="/Cart">
      <div className=''><ToastContainer/></div>
    </Link>
    <div className='grid md:grid-cols-3 grid-cols-2 ml-[3vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
    {
          products && products.map((item , index) => {
            // const {id} = useParams()
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === item.id);
            // console.log('isItemInWishlist', isItemInWishlist)
            // console.log(item.id)
{
    return(
        <div key={index}>
        <Cards products={item}
         isWishlisted={isItemInWishlist}
         addCart={ () => handleAddToCart(item)}
         addWish={() => handleAddToWishlist(item)}
         Detail={() => handleCardDetail(item)} />
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