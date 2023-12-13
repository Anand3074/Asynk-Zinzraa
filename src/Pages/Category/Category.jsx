import {useState, useEffect} from 'react'
import Poster from '../../Components/HomePage/Modern.jsx'
import elestar from '../../assets/ele1.png'
import Filter2 from '../../Components/ProductDisplay/filter2.jsx'
import Western from './Western'
// import Saree from './Saree'
import Saree from './Saree.jsx'
import Kurtas from './Kurtas'
import Dresses from './Dresses'
import Ethnic from './Ethnic'
import { max } from 'lodash'
import ProductsAll from '../../Components/ProductDisplay/ProductsAll.jsx'

// import ProductList from '../Components/ProductDisplay/ProductList.jsx'

const Category = ({ defaultTab }) => {
  const [maxPrice, setMaxPrice] = useState(10000);
  const initialSizes = ["S", "M", "L", "XL", "XXL"];
  const initialFabric = ["Silk", "Cotton",  "Linen", "Rayon"];
  const [fabric, setFabric] = useState(initialFabric)
  const [selectedFabric, setSelectedFabric] = useState(null);
  // const [open, setOpen] = React.useState(true);
  const [sizef, setSizef] = useState(initialSizes);
  const [selectedSize, setSelectedSize] = useState(null);
  
  console.log(sizef)
  // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
  // console.log(isItemInWishlist)
  const clearFilter = () => {
    setSizef(initialSizes)
    setFabric(initialFabric)
    setMaxPrice(9999)
  
    console.log(sizef)
  }
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  const handleClick = (index) => {
    setActiveTab(index === activeTab ? activeTab : index);
  };

  const tabStyles = (index) => {
    return `cursor-pointer ${
      index === activeTab ? 'underline text-[#875A33]' : 'hover:text-[#875A33]'
    } flex justify-center items-center w-[13vw] h-[4vw] font-[poppins]`;
  };

  // Update activeTab when the defaultTab prop changes
  useEffect(() => {
    setActiveTab(defaultTab || 0);
  }, [defaultTab]);

  const tabComponents = {
    // 0: <Saree size1={sizef} 
    // maxPrice1={maxPrice}  fabric1={fabric} 
    // />,

    0: <Western size1={sizef} maxPrice1={maxPrice}  fabric1={fabric}  />,
    1: <Dresses size1={sizef} maxPrice1={maxPrice}  fabric1={fabric} />,
    2: <Saree size1={sizef}   maxPrice1={maxPrice}  fabric1={fabric}/>,
    3: <Kurtas size1={sizef}  maxPrice1={maxPrice}  fabric1={fabric}/>,
    4: <Ethnic size1={sizef}  maxPrice1={maxPrice}  fabric1={fabric}/>,
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
            <li onClick={() => handleClick(0)} className={tabStyles(0)}>
              WESTERN
            </li>
            <li onClick={() => handleClick(1)} className={tabStyles(1)}>
              DRESSES
            </li>
            <li onClick={() => handleClick(2)} className={tabStyles(2)}>
              SAREE
            </li>
            <li onClick={() => handleClick(3)} className={tabStyles(3)}>
              KURTA
            </li>
            <li onClick={() => handleClick(4)} className={tabStyles(4)}>
              ETHNIC
            </li>
          </ul>
        </nav>
      </div>
    </div>
        <div id='products-container-parent' className='flex flex-row'>
          <div className='w-[25vw] ' id='left'>
            {/* <ProductsAll/> */}
            <div className='w-[25vw] mt-[3vw] pl-[3vw]'>
            <Filter2 size={sizef} setSize={setSizef} clearFilter={clearFilter} 
        maxPrice={maxPrice} setMaxPrice={setMaxPrice} fabric={fabric} 
        setFabric={setFabric} selectedFabric={selectedFabric} setSelectedFabric={setSelectedFabric}
         selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
        </div>
          </div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-start items-start gap-[5vw]  my-[3vw]'>
              {activeTab !== null && tabComponents[activeTab]}
              {/* <Saree/> */}
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Category