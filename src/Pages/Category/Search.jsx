import React, { useEffect,useState, useContext } from 'react';
import Cards from '../../Components/ProductDisplay/Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch , useSelector  } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import { setSearchTerm } from '../../Redux/Product/filter';
import Poster from '../../Components/HomePage/Modern.jsx'
import elestar from '../../assets/ele1.png'
import Filter2 from '../../Components/ProductDisplay/filter2.jsx'
import { useNavigate } from 'react-router-dom';


const Category = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(5);
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const [maxPrice, setMaxPrice] = useState(10000);
  const initialSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const initialFabric = ['Silk', 'Cotton',  'Linen', 'Rayon'];
  const [fabric, setFabric] = useState(initialFabric)
  const [selectedFabric, setSelectedFabric] = useState(null);
  // const [open, setOpen] = React.useState(true);
  const [sizef, setSizef] = useState(initialSizes);
  const [selectedSize, setSelectedSize] = useState(null);
  // const [searchTerm, setSearchTerm] = useState(null);
  
  
  // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
  // console.log(isItemInWishlist)
  const clearFilter = () => {
    setSizef(initialSizes)
    setFabric(initialFabric)
    setMaxPrice(9999)
  
    console.log(sizef)
  }


  const handleClick = (index) => {
dispatch(setSearchTerm(""));
// console.log(searchTerm)

navigate('/Category')  };

  const tabStyles = (index) => {
    return `cursor-pointer ${
      index === activeTab ? 'underline text-[#875A33]' : 'hover:text-[#875A33]'
    } flex justify-center items-center w-[13vw] h-[4vw] font-[poppins]`;
  };

  // Update activeTab when the defaultTab prop changes
  useEffect(() => {
    setActiveTab(defaultTab || 5);
  }, [defaultTab]);

  const SProduct = ({categoryToRender, }) => {
    const context = useContext(myContext);
    const { product } = context;
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addItemsToCart(item))
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
      const { title, price, imageUrl, category, description, id } = item;
      const cardDetails = { title, price, imageUrl, category, description, id };
      dispatch(setSelectedProduct(cardDetails));
    };
    // const selectedSizes = useSelector((state) => state.filters.selectedSizes);
    //   const selectedFabrics = useSelector((state) => state.filters.selectedFabrics);
    //   const priceRange = useSelector((state) => state.filters.priceRange) || { min: 0, max: 9999 };
      const searchTerm = useSelector((state) => state.filters.searchTerm);
      
    const filteredProducts = product.filter((item) => {
      // const isSizeMatch = selectedSizes.length === 0 || selectedSizes.some((size) => item.size == size);
      // const isFabricMatch = selectedFabrics.length === 0 || selectedFabrics.includes(item.fabric);
      // const isPriceMatch = item.price >= priceRange.min && item.price <= priceRange.max;
      // const isSearchMatch =
      // item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // item.description.toLowerCase().includes(searchTerm.toLowerCase());
      //   return isSizeMatch && isFabricMatch && isPriceMatch  && isSearchMatch &&  (item.category === categoryToRender || !categoryToRender);
      console.log('Saerch word', searchTerm , 'hello')
      const isSizeMatch = sizef.length === 0 || sizef.some((size) => item.size === size);
      const isFabricMatch = fabric.length === 0 || fabric.some((fabric) => item.fabric === fabric);
      const isSearchMatch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
      console.log('Search:',  isSearchMatch)
  
  
    // console.log('item' + item.fabric)
  
    return isSizeMatch && isFabricMatch  && isSearchMatch && (item.category === categoryToRender || !categoryToRender);
    })
    console.log(filteredProducts);
      
  
  
  // 
    return (
      <div>
        <div className='flex justify-start items-start flex-grow-1 mx-[7vw]'>
          <div className='grid grid-cols-2 m-[1vw] gap-[5vw]px-[3vw] justify-center items-center'>
           
            {filteredProducts
            .filter(item => 0 <= item.price && item.price <= parseFloat(maxPrice))
            .map((item, index) => {          
              const { title, price, imageUrl, category, description, id } = item;
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
                  addCart={ () => handleAddToCart(item)}
                  addWish={() => handleAddToWishlist(item)}
                  Detail={() => handleCardDetail(item)}
                />
                );
            }
            return null;
          })}
          </div>
  
        </div>
      </div>
    );
  };
  const tabComponents = {
    // 0: <Western />,
    // 1: <Dresses />,
    // 2: <Saree />,
    // 3: <Kurtas />,
    // 4: <Ethnic />,
    5: <SProduct/>
  };
  return (
    <div>
      <div>
          <Poster/>
      </div>
      <div className='mt-[0vw]'>
        <div className='flex justify-center '>
                <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/>
            </div>
            <div className='flex justify-center text-[#875A33] font-lora text-[3vw]' >
                <span>Our Products</span>
            </div>
        </div>
    <div className='my-[1vw]' id='NavforProducts'> 
         <div id='navbar' className='flex justify-center mx-[17vw] mt-[0.5vw] text-[2.2vw]'>
        <nav>
          <ul className='flex flex-row font-poppins text-[#454545] gap-[3vw]'>
          <li onClick={() => handleClick()} className={tabStyles(0)}>
              WESTERN
            </li>
            <li onClick={() => handleClick()} className={tabStyles(1)}>
              DRESSES
            </li>
            <li onClick={() => handleClick()} className={tabStyles(2)}>
              SAREE
            </li>
            <li onClick={() => handleClick()} className={tabStyles(3)}>
              KURTA
            </li>
            <li onClick={() => handleClick()} className={tabStyles(4)}>
              ETHNIC
            </li>
          </ul>
        </nav>
      </div>
    </div>
        <div id='products-container-parent' className='flex flex-row'>
          <div className='w-[25vw] ' id='left'>
            <Filter2 size={sizef} setSize={setSizef} clearFilter={clearFilter} 
        maxPrice={maxPrice} setMaxPrice={setMaxPrice} fabric={fabric} 
        setFabric={setFabric} selectedFabric={selectedFabric} setSelectedFabric={setSelectedFabric}
         selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
          </div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-start items-start gap-[5vw]  my-[3vw]'>
              {activeTab !== null && tabComponents[activeTab]}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category