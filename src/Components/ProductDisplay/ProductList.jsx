import React, { useEffect,useState, useContext } from 'react';
import Cards from './Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';


const ProductList = ({categoryToRender}) => {
  const context = useContext(myContext);
  const { product } = context;
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
  // console.log(isItemInWishlist)



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
      <div className='flex justify-start items-start flex-grow-1'>
        <div className='grid grid-cols-2 m-[1vw] gap-[5vw]px-[3vw] justify-center items-center'>
         
          {product.map((item, index) => {          
            const { title, price, imageUrl, category, description, id } = item;
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === id);
            if (category === categoryToRender || !categoryToRender) {
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
  );
};

export default ProductList;

{/* <div className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {index + 1}.
                    </div>
                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                        <img className='w-16' src={imageUrl} alt="img" />
                    </th>
                    <div className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {title}
                    </div>
                    <div className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        ₹{price}
                    </div>
                    <div className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {category}
                    </div>
                    <div className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {date}
                    </div> */}

  // const[wishClick, setWishClick] = useState(0);

  // const handleAddToWishlist = (item) => {
  //   dispatch(addToWishlist(item));
  //   // toggleColor();
  //   // // Dispatch addToWishlist action
  //   // You can also set some state to indicate that the item is in the wishlist
  //   // setWishClick((prevchangeWish) => !prevchangeWish);
  //     // console.log(item)
  //     // dispatch(addToWishlist(item))
  // }
  // State to keep track of the color for each card
   // Generate a unique key for each card based on the item's id
    // const cardKey = id;
    // // Toggle the color for the clicked card
    // setCardColors((prevCardColors) => ({
    //   ...prevCardColors,
    //   [cardKey]: !prevCardColors[cardKey] ? 'red' : 'none',
    // }));
    // Dispatch addToWishlist action
  // const [cardColors, setCardColors] = useState({});
