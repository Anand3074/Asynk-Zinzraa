import React, { useEffect,useState, useContext } from 'react';
import Cards from './Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector } from 'react-redux';


const ProductList = () => {
  const context = useContext(myContext);
  const { product } = context;
  // const[wishClick, setWishClick] = useState(0);

  const dispatch = useDispatch()
  const handleAddToCart = (item) => {
      // console.log(item)
      dispatch(addItemsToCart(item))
  }
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
  const [cardColors, setCardColors] = useState({});

  const handleAddToWishlist = (item) => {
    // Generate a unique key for each card based on the item's id
    // const cardKey = id;
    // // Toggle the color for the clicked card
    // setCardColors((prevCardColors) => ({
    //   ...prevCardColors,
    //   [cardKey]: !prevCardColors[cardKey] ? 'red' : 'none',
    // }));
    // Dispatch addToWishlist action
    dispatch(addToWishlist(item));
  };


    
// 
  return (
    <div>
      {/* <div className="relative overflow-x-auto"> */}
      <div className='flex justify-start items-start flex-grow-1'>
        <div className='grid grid-cols-2 m-[1vw] gap-[5vw]px-[3vw] justify-center items-center'>
         
          {product.map((item, index) => {          
            const { title, price, imageUrl, category, description, id } = item;
            // const cardKey = `card_${item.id}`;
            // console.log(`Item ${index + 1} Properties:`);
            // console.log('id:', item.id);

            return (        
              <Cards 
                key={index}
                title={title}
                price={price}
                imageUrl={imageUrl}
                category={category}
                description={description}
                // date={date}
                addCart={ () => handleAddToCart(item)}
                addWish={() => handleAddToWishlist(item)}
                // wishClick={cardColors[cardKey]} 
              />

              // wishClick={wishClick} 
            );
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
