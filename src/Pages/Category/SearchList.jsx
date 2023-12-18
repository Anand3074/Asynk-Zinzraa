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

const ProductList = ({ products, maxPrice}) => {
  // console.log(products)
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
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  const filteredProducts = products
 ? products
      .filter((item) => {
        const isPriceMatch = parseFloat(item.price) >= 0 && parseFloat(item.price) <= parseFloat(maxPrice);
        const isSearchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return isPriceMatch && isSearchMatch;
      })
      .reduce((uniqueProducts, item) => {
        if (!uniqueProducts.some((uniqueItem) => uniqueItem.id === item.id)) {
          uniqueProducts.push(item);
        }
        return uniqueProducts;
      }, [])
 : [];


  return (
    
    <div>
    <div className='flex justify-start items-start flex-grow-1'>
    <Link to="/Cart">
      <div className=''><ToastContainer/></div>
    </Link>
    <div className='grid md:grid-cols-3 grid-cols-2 ml-[3vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
    {
          // products && products
          // .filter((item) => parseFloat(item.price) >= 0 
          // && parseFloat(item.price) <= parseFloat(maxPrice))   
          filteredProducts.map((item) => {
            // const {id} = useParams()
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === item.id);
            // console.log('isItemInWishlist', isItemInWishlist)
            // console.log(item.id)
{
    return(
        <div key={item.id}>
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