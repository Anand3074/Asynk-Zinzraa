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
import Filter2 from './filter2.jsx';
import elestar from '../../assets/ele1.png'
import { set } from 'lodash';
import { Checkbox } from '@material-tailwind/react';
// import ProductList from './productList2.jsx';
import { Link } from 'react-router-dom';


const ProductsAll = ({categoryToRender}) => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const initialSizes = ["S", "M", "L", "XL", "XXL"];
  const initialFabric = ["Silk", "Cotton",  "Linen", "Rayon"];
  const [fabric, setFabric] = useState(initialFabric)
  const [selectedFabric, setSelectedFabric] = useState(null);
  // const [open, setOpen] = React.useState(true);
  const [sizef, setSizef] = useState(initialSizes);
  const [selectedSize, setSelectedSize] = useState(null);
  
  // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
  // console.log(isItemInWishlist)
  const clearFilter = () => {
    setSizef(initialSizes)
    setFabric(initialFabric)
    setMaxPrice(9999)
  
    console.log(sizef)
  }
  const context = useContext(myContext);
  const { product } = context;
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);

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
      const searchTerm = useSelector((state) => state.filters.searchTerm);

  

  const handleCardDetail = (item) => {
    const { title, price, imageUrl, category, description, id , size } = item;
    const cardDetails = { title, price, imageUrl, category, description, id };
    dispatch(setSelectedProduct(cardDetails));
    // history.push('/');
  };
  const filteredProducts = product.filter((item) => {
    const isSizeMatch = sizef.length === 0 || sizef.some((size) => item.size === size);
    // console.log('1: ' , isSizeMatch, '2.' , sizef, '3.'  )
    const isFabricMatch = fabric.length === 0 || fabric.some((fabric) => item.fabric === fabric);
    const isSearchMatch =
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase());


  // console.log('item' + item.fabric)

  return isSizeMatch && isFabricMatch   &&  
  isSearchMatch && (item.category === categoryToRender || !categoryToRender);
    // const isPriceMatch = item.price <= maxPrice;
    // console.log('Item:', item);
    // console.log('isSizeMatch:', isSizeMatch);
    // console.log('isPriceMatch:', isPriceMatch);
    // return isSizeMatch && isFabricMatch && (item);


  });
// console.log(filteredProducts)


// 
  return (

    <div>
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
        <div className='md:mb-[5vw]'>
        <Fashion/>
        </div>
        <div className='flex flex-col justify-center items-center mt-[9vw] h-[2vw] ' >
                <img src={elestar} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            
            <div className='flex justify-center items-center font-lora text-[#875A33] 
            md:text-[3.5vw] 
            md:mb-[7vw] mb-[3vw]' >
                <span>Our Products</span>
            </div> 
            </div>
      <div className='flex flex-row gap-[2.5vw] justify-start items-start'>
        {/* <div className='w-[25vw] mt-[3vw] pl-[3vw]'> */}
        <div className='w-[25vw] mt-[3vw] pl-[3vw]'>
        <Filter2 size={sizef} setSize={setSizef} clearFilter={clearFilter} 
        maxPrice={maxPrice} setMaxPrice={setMaxPrice} fabric={fabric} 
        setFabric={setFabric} selectedFabric={selectedFabric} setSelectedFabric={setSelectedFabric}
         selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
        </div>
        {/* <div className='flex flex-col'>
        <div className='grid grid-cols-2 mx-[1vw] my-[3vw] gap-[1.5vw]
         px-[1.5vw] w-[60vw] justify-center items-center'>
       
            {filteredProducts
            .filter(item => 0 <= item.price && item.price <= parseFloat(maxPrice))
            .map((item, index) => {    
            // const [selectedSize, setSelectedSize] = useState(null);  
            console.log(maxPrice)    
            const { title, price, imageUrl, category, description, id , size} = item;

            // const isSizeMatch = selectedSize ? size.includes(selectedSize) : true;
            console.log(size)
            const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === id);
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
        </div> */}
        <div className='mt-[2.5vw]'>
        {/* <ProductList sizef={sizef} fabricm={fabric} maxPrice={maxPrice}/> */}

        </div>

      </div>
    </div>
  );
};

export default ProductsAll;


