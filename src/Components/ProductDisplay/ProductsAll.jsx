import React, { useEffect,useState, useContext } from 'react';
import Cards from './Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Fashion from '../../Components/Fashion';
import Filtersss from './Filtersss';
import elestar from '../../assets/ele1.png'


const ProductsAll = ({categoryToRender, size, fabric}) => {
  const context = useContext(myContext);
  const { product } = context;
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
  // console.log(isItemInWishlist)


  const dispatch = useDispatch()
  const handleAddToCart = (item) => {
    toast("Product Added to Cart")
      // console.log(item)
      dispatch(addItemsToCart(item))
  }
  
  const handleAddToWishlist = (item) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
    // console.log(isItemInWishlist)
    if (isItemInWishlist) {
      dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  // const handleAddToWishlist = (item) => {
  //   dispatch(addToWishlist(item));
  // };
  

  const handleCardDetail = (item) => {
    const { title, price, imageUrl, category, description, id } = item;
    const cardDetails = { title, price, imageUrl, category, description, id };
    dispatch(setSelectedProduct(cardDetails));
    // history.push('/');
  };
 



// 
  return (

    <div>
        <div className=''><ToastContainer/></div>
        <div>
        <Fashion/>
        </div>
      <div className='flex flex-row gap-[5vw] justify-start items-start'>
        <div><Filtersss/></div>
        <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
                <img src={elestar} alt='' className='w-[10px] md:w-auto '/>
            
            <div className='flex justify-center items-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Our Products</span>
            </div> 
            </div>
        <div className='grid grid-cols-2 m-[1vw] gap-[5vw]px-[3vw] justify-center items-center'>
       
                     {product.map((item, index) => {          
            const { title, price, imageUrl, category, description, id } = item;
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === id);
            // if (isFabricMatch && (category === categoryToRender || !categoryToRender))
             {
            return (        
              <Cards 
                key={index}
                title={title}
                price={price}
                imageUrl={imageUrl}
                category={category}
                description={description}
                isWishlisted={isItemInWishlist}
                // date={date}
                addCart={ () => handleAddToCart(item)}
                addWish={() => handleAddToWishlist(item)}
                // wishClick={cardColors[cardKey]} 
                Detail={() => handleCardDetail(item)}
                // root={id}
              />

              // wishClick={wishClick} 
            );
          }
          return null;
        })}
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProductsAll;


