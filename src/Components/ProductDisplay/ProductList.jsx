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
  import { Link } from 'react-router-dom'; 


const ProductList = ({categoryToRender, sizef, fabric, maxPrice}) => {

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
  // const selectedSizes = useSelector((state) => state.filters.selectedSizes);
  //   const selectedFabrics = useSelector((state) => state.filters.selectedFabrics);
  //   const priceRange = useSelector((state) => state.filters.priceRange) || { min: 0, max: 9999 };
  //   const searchTerm = useSelector((state) => state.filters.searchTerm);


    // const priceRange = useSelector((state) => state.filters.priceRange);

  // const filteredProducts = product.filter((item) => {
  // //   // const { title, price, imageUrl, category, description, id, fabric, size  } = item;

  //   const isSizeMatch = selectedSizes.length === 0 || selectedSizes.some((size) => item.size == size);
  //   const isFabricMatch = selectedFabrics.length === 0 || selectedFabrics.includes(item.fabric);
  //   const isPriceMatch = item.price >= priceRange.min && item.price <= priceRange.max;
  //   const isSearchMatch =
  //     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.description.toLowerCase().includes(searchTerm.toLowerCase());


  //   // console.log('item' + item.fabric)

  //   return isSizeMatch && isFabricMatch && isPriceMatch  &&  isSearchMatch && (item.category === categoryToRender || !categoryToRender);
  //   // return isFabricMatch && (item.category === categoryToRender || !categoryToRender);
    
  // });
  const filteredProducts = product.filter((item) => {
    const isSizeMatch = sizef.length === 0 || sizef.some((size) => item.size === size);
    const isFabricMatch = fabric.length === 0 || fabric.some((fabric) => item.fabric === fabric);
    // const isPriceMatch = item.price <= maxPrice;
    // console.log('Item:', item);
    // console.log('isSizeMatch:', isSizeMatch);
    // console.log('isPriceMatch:', isPriceMatch);
    // return isSizeMatch && isFabricMatch && (item);
    return isSizeMatch && isFabricMatch && (item.category === categoryToRender || !categoryToRender);

  });


// 
  return (
    <div>
      <div className='flex justify-start items-start flex-grow-1'>
      <Link to="/Cart">
        <div className=''><ToastContainer/></div>
      </Link>
      <div className='grid grid-cols-3 ml-[3vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
         
          {filteredProducts
          .filter(item => 0 <= item.price && item.price <= parseFloat(maxPrice))
          .map((item, index) => {          
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
