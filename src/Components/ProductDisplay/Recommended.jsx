import _shuffle from 'lodash/shuffle';
import React, { useEffect,useState, useContext } from 'react';
import Cards from './Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import elestar from '../../assets/ele1.png'


// Assuming `products` is an array of items with a `category` property
const Recommended = ({group}) => {
    const context = useContext(myContext);
    const { product } = context;
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
const categories = ['Saree', 'Kurta', 'Dresses', 'Western', 'Ethnic'];
const maxItemsPerCategory = 1;

const shuffledProducts = _shuffle(product);
const dispatch = useDispatch()
    const handleAddToCart = (item) => {
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
    const handleCardDetail = (item) => {
        const { title, price, imageUrl, category, description, id } = item;
        const cardDetails = { title, price, imageUrl, category, description, id };
        dispatch(setSelectedProduct(cardDetails));
        // history.push('/');
      };

const renderRandomCards = () => {
    
    // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
    // console.log(isItemInWishlist)
  
  
  
    
  
    // const handleAddToWishlist = (item) => {
    //   dispatch(addToWishlist(item));
    // };
  const selectedCards = [];
  

  for (const category of categories.slice(0,3)) {
    const matchingProducts = shuffledProducts.filter((item) => item.category === category);
    const selectedProduct = matchingProducts.slice(0, maxItemsPerCategory)[0];
    
    if (selectedProduct) {
      selectedCards.push(
        <Cards
          key={selectedProduct.id}
          title={selectedProduct.title}
          price={selectedProduct.price}
          imageUrl={selectedProduct.imageUrl}
          category={selectedProduct.category}
          description={selectedProduct.description}
          isWishlisted={Wishlist.some((wishlistItem) => wishlistItem.id === selectedProduct.id)}
          addCart={() => handleAddToCart(selectedProduct)}
          addWish={() => handleAddToWishlist(selectedProduct)}
          Detail={() => handleCardDetail(selectedProduct)}
        />
      );
    }
  }

  return selectedCards;
};


return (
    
        <div className='ml-[8vw]'>
            <div className='flex justify-center items-center'>
                <img src={group.icon} alt='' className='w-[10px] md:w-auto '/>
            </div>
            <div className='flex justify-center items-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>{group.title}</span>
            </div>
            <div className=' '>
            <div className="flex flex-row  md:gap-[1vw] gap-[1vw] justify-center items-center">
                {renderRandomCards()}
            </div>
            </div>
        </div>
   
 
);
}
export default Recommended
