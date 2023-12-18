import React, { useState, useEffect } from 'react'
// import Navbar from '../Pages/Nav.jsx'
// import Footer from '../Components/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import SearchList from '../../Pages/Category/SearchList.jsx'
import Filter from '../../Components/ProductDisplay/filter2.jsx'
import { doc, getDocs, onSnapshot, collection, deleteDoc, query, where, or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";
import { fireDB } from '../../firebase/firebase.jsx';
import { ToastContainer, toast } from 'react-toastify'
import elestar from '../../assets/ele1.png'
import Poster from '../../Components/HomePage/Modern.jsx'
import Saree from '../Kurtas.jsx';
import { setSearchTerm } from '../../Redux/Product/filter.js';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
let defaultTab = null

  const { id, description, category, price, } = useParams()
  const dispatch = useDispatch()

//   console.log(price)
//   console.log(type)
//   console.log(brand)
// const defaultTab = 5
  const [products, setProducts] = useState([])
//   const [mainProductData, setMainProductData] = useState([])
//   const [prevActive, setPrevActive] = useState(false)
  const [size, setSize] = useState([])
  const [stock, setStock] = useState([])
  const [fabric, setFabric] = useState([])
//   const [categoryList, setCategoryList] = useState([])
  const [min, setmin] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  // console.log('Size', size)
  // console.log('fabric', fabric)
  const searchTerm = useSelector((state) => state.filters.searchTerm);


  const clearFilter = () => {
    setFabric([])
    setSize([])
    setMaxPrice(10000)
    setSearchTerm('')
    }
    const categories = {
      0: 'Western'  , 
      1: 'Dresses'  ,
      2: 'Saree'  ,
      3: 'Kurta' ,
      4: 'Ethnic' ,
      5: null
    }
    // console.log('tab',defaultTab)
  

const [activeTab, setActiveTab] = useState(defaultTab || 0);
const [categoryTab, setCategoryTab] = useState(categories[defaultTab]);

// console.log(categoryTab)

const handleClick = (index, category) => {
  setActiveTab(index === activeTab ? activeTab : index);
  setCategoryTab(categories[index]);
  dispatch(setSearchTerm(''))
  console.log(searchTerm)
//   console.log(categories[index])
// console.log(activeTab)

};

const tabStyles = (index) => {
  return `cursor-pointer ${
    index === activeTab ? 'underline text-[#875A33]' : 'hover:text-[#875A33]'
  } flex justify-center items-center w-[13vw] h-[4vw] font-[poppins]`;
};
// Update activeTab when the defaultTab prop changes
useEffect(() => {
  setActiveTab(defaultTab = 5);
 setCategoryTab(categories[defaultTab]);
}, [defaultTab]);
// console.log(categoryTab)
// console.log(activeTab)
// console.log("cat", categories[1])

const fetchProduct = async () => {
    // console.log('categoryTab', categoryTab)

    setProducts([]);
    // if (min !== 0 && maxPrice !== 0) {
    //     // console.log(min, max)
    //     // console.log("queried")
    //     const productsCategoryQuery = query(collection(fireDB, "products"), 
    //     and(where("price", "<=", Number(maxPrice))))
    //     const querySnapshot = await getDocs(productsCategoryQuery);
    //     // console.log(querySnapshot)
    //     querySnapshot.forEach(
    //       (doc) => {
    //       const data = doc.data()
    //       // console.log(data)
    //       setProducts((prev) => [...prev, {
    //         id: doc.id,
    //         ...data
    //       }])
  
    //     })
    // }

  
    if (size.length !== 0 && fabric.length !== 0) {
      // Fetch products that match both size and fabric criteria
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
      // Fetch products based on size criteria
      const productsCategoryQuery = query(collection(fireDB, "products"), where("size", "in", size));
      const querySnapshot = await getDocs(productsCategoryQuery);
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setProducts((prev) => [...prev, { id: doc.id, ...data }]);
      });
    } else if (fabric.length !== 0) {
      // Fetch products based on fabric criteria
      const productsCategoryQuery = query(collection(fireDB, "products"), where("fabric", "in", fabric));
      const querySnapshot = await getDocs(productsCategoryQuery);
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setProducts((prev) => [...prev, { id: doc.id, ...data }]);
      });
    }
    //  else if (price !== undefined) {
    //   const productsBrandQuery = query(collection(fireDB, "products"), where("price", "<=", Number(maxPrice)))
    //   const querySnapshot = await getDocs(productsBrandQuery);
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data()
    //     setProducts((prev) => [...prev, {
    //       id: doc.id,
    //       ...data
    //     }])

    //   })
    // }
    else if (searchTerm.length !== 0) {
      let defaultTab = 5

        // Fetch all products if no specific criteria are provided
        const productsQuery = query(collection(fireDB, "products"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(productsQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
        // dispatch(setSearchTerm(''))
      }

     else {
      // Fetch all products if no specific criteria are provided
      const productsQuery = query(collection(fireDB, "products"), where("category", "in", [categoryTab]) );
      const querySnapshot = await getDocs(productsQuery);
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setProducts((prev) => [...prev, { id: doc.id, ...data }]);
      });
    }
  };

  
  useEffect(() => {
    fetchProduct()

  }, [size, fabric, maxPrice, categoryTab])

  return (
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#FFFFEF]' >
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
        {/* <div className='md:mb-[5vw]'>
        <Fashion/>
        </div> */}
         <div>
      <div>
          <Poster/>
      </div>
      {/* <div className='mt-[0vw]'>
        <div className='flex justify-center '>
                <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/>
            </div>
            <div className='flex justify-center text-[#875A33] font-lora text-[3vw]' >
                <span>Our Products</span>
            </div>
        </div> */}
    <div className='my-[1vw]' id='NavforProducts'> 
         <div id='navbar' className='flex justify-center mx-[17vw] mt-[0.5vw] text-[2.2vw]'>
        <nav>
          <ul className='flex flex-row font-poppins text-[#454545] gap-[3vw]'>
            <li onClick={() => handleClick(0, 'Western')} className={tabStyles('0')}>
              WESTERN
            </li>
            <li onClick={() => handleClick(1, 'Dresses')} className={tabStyles(1)}>
              DRESSES
            </li>
            <li onClick={() => handleClick(2, 'Saree')} className={tabStyles(2)}>
              SAREE
            </li>
            <li onClick={() => handleClick(3, 'Kurta')} className={tabStyles(3)}>
              KURTAS
            </li>
            <li onClick={() => handleClick(4, 'Ethnic')} className={tabStyles(4)}>
              ETHNIC
            </li>
          </ul>
        </nav>
      </div>
    </div>
        <div id='products-container-parent' className='flex flex-row'>
          <div id='right' className='w-[75vw] flex flex-col'>
          </div>
        </div>
    </div>  
      <div className='flex flex-row gap-[1vw] justify-start items-start'>
        <div className='md:flex hidden w-[25vw] mt-[2vw] pl-[3vw]'>
        <Filter stock={stock} 
        setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
         min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}/>
          </div>
          <div className='mt-[2vw]'>
        {products.length !== 0 ? <SearchList products={products} maxPrice={maxPrice}/> : (
          <div className='lg:col-span-2 my-[1vw] '>
            <h4 className='flex text-[0.5rem] text-center justify-center ' >###</h4>
          </div>
        )}
        </div>

      </div>
    </div>
  )
}

export default ProductList
 