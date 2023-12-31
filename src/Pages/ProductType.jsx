import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Layout/Nav.jsx'
import Footer from '../Components/Layout/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import ProductList3 from '../Components/ProductDisplay/productList3.jsx'
import Filter from '../Components/ProductDisplay/filter2.jsx'
import { doc, getDocs, onSnapshot, collection, deleteDoc, query, where, or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";
import { fireDB } from '../firebase/firebase.jsx';
import { ToastContainer, toast } from 'react-toastify'
import elestar from '../assets/ele1.png'
import BottomFilter from '../Components/ProductDisplay/Bottomfilter.jsx'
import FilterClose from '../Components/ProductDisplay/FilterClose.jsx'
import Filter3 from '../Components/ProductDisplay/Filter3.jsx'

const ProductType = ({Poster, PosterType}) => {
  // const { id, description, category, price, } = useParams()
  const {  category, price, type } = useParams()
  // console.log(price)

  const [products, setProducts] = useState([])
  const [size, setSize] = useState([])
  const [stock, setStock] = useState([])
  const [fabric, setFabric] = useState([])
  const [min, setmin] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  const clearFilter = () => {
    setFabric([])
    setSize([])
    setMaxPrice(10000)
    }
    const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible((prev) => !prev);
  };
    // console.log(min , maxPrice.toString())

    const fetchProduct = async () => {
      setProducts([]);
     
      if (size.length !== 0 && fabric.length !== 0) {
        const productsCategoryQuery = query(
          collection(fireDB, "products"),
          where("size", "in", size),
          where("fabric", "in", fabric)
        );
        const querySnapshot = await getDocs(productsCategoryQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
      } else if (size.length !== 0) {
        const productsCategoryQuery = query(collection(fireDB, "products"), where("size", "in", size));
        const querySnapshot = await getDocs(productsCategoryQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
      } else if (fabric.length !== 0) {
        const productsCategoryQuery = query(collection(fireDB, "products"), where("fabric", "in", fabric));
        const querySnapshot = await getDocs(productsCategoryQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
      }
       else if (price !== undefined) {
        const productsBrandQuery = query(collection(fireDB, "products"), where("price", "<=", Number(maxPrice)))
        const querySnapshot = await getDocs(productsBrandQuery);
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          setProducts((prev) => [...prev, {
            id: doc.id,
            ...data
          }])
  
        })
      }
       else {
        const productsQuery = query(collection(fireDB, "products"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(productsQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
      }
    };

  useEffect(() => {
    fetchProduct()
  }, [
    size,
     fabric, 
  ])
  // console.log(products,size , fabric)
  useEffect(() => {
    if (isFilterVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isFilterVisible]);
  

  return (
    <div style={{ fontFamily: "DM Sans" }} className='' >
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
        {/* {isFilterVisible && <Filter3
        className='sm:hidden fixed block  w-[85vw] h-[760px] left-[15vw]
        relative top-[0.5vw]  sm:top-[1.2vw]
            font-bold text-[5vw]  right-0 bg-grey-ray transition'
      stock={stock} 
        setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
         min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}/>} */}
        <div className='md:mb-[5vw]'>
            {Poster}
        </div>
        <div className='flex flex-col justify-center items-center py-[4.5vw]  md:pt-[2.25vw] h-[2vw] ' >
                <img src={elestar} alt='' className='w-[2vw] font-bold h-[2vw] md:h-[1.5vw] md:w-auto '/>
            
            <div className='flex justify-center font-semibold items-center font-lora text-[#875A33] 
            md:text-[2.5vw] 
            md:mb-[7vw] mb-[1.5vw]' >
                <span>{PosterType}</span>
            </div> 
            </div>
      <div className='flex flex-row gap-[1vw] justify-start items-start'>
      <div className='hidden md:flex w-[25vw] mt-[0vw] pl-[3vw]'>
        <Filter 
        className='' stock={stock} 
        setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
         min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}/>
          </div>
          <div className='pt-[0vw]'>
        {products.length !== 0 ? <ProductList3 products={products} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/> : (
          <div className='lg:col-span-2 my-[1vw] '>
            <h4 className='flex text-[0.5rem] text-center justify-center ' >###</h4>
          </div>
        )}
        </div>

      </div>
      <div className='mb-[12.5vw] md:mb-[0vw]'>
      <Footer/>

      </div>
      {/* {isFilterVisible ? <FilterClose toggleFilter={toggleFilter}/> : <BottomFilter toggleFilter={toggleFilter} isFilterVisible={isFilterVisible}
           setFilterVisible={setFilterVisible}
           className='bottom-0 w-full h-[7vw] fixed'/>} */}
           <div>
      <BottomFilter 
      stock={stock} 
      setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
      min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
      fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}
      toggleFilter={toggleFilter} isFilterVisible={isFilterVisible}
           setFilterVisible={setFilterVisible}
           className='bottom-0 w-full h-[7vw] fixed'/>
    
      
    </div>
    </div>
  )
}

export default ProductType  