import React from 'react'
import Card2 from './Card2.jsx'
import { Link, useParams } from 'react-router-dom'
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import { ToastContainer, toast } from 'react-toastify';
// import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const ProductList = ({ products, maxPrice}) => {
  // console.log(products, maxPrice)
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
  const filteredProducts = products
  ? products
      .filter((item) => parseFloat(item.price) >= 0 && parseFloat(item.price) <= parseFloat(maxPrice))
      .reduce((uniqueProducts, item) => {
        // Check if item.id is not already present in uniqueProducts array
        if (!uniqueProducts.some((uniqueItem) => uniqueItem.id === item.id)) {
          uniqueProducts.push(item);
        }
        return uniqueProducts;
      }, [])
  : [];

  return (
    
    <div>
    <div className='flex justify-start items-start flex-grow-1'>
    {/* <Link to="/Cart">
      <div className=''><ToastContainer/></div>
    </Link> */}
    <div className='grid md:grid-cols-3 grid-cols-2 mx-[3vw]  md:mx-[1.5vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
    {
          // products && products
          // .filter((item) => parseFloat(item.price) >= 0 
          // && parseFloat(item.price) <= parseFloat(maxPrice))   
          filteredProducts.map((item , index) => {
            // const {id} = useParams()
            // console.log(item.price, maxPrice)
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === item.id);
            // console.log('isItemInWishlist', isItemInWishlist)
            // console.log(item.id)
{
    return(
        <div key={index}>
        <Card2 products={item}
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