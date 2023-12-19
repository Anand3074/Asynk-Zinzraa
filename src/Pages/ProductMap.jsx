import React, { useState, useEffect } from 'react'
import Navbar from '../Pages/Nav.jsx'
import Footer from '../Components/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import ProductList3 from '../Components/ProductDisplay/productList3.jsx'
import Filter from '../Components/ProductDisplay/filter2.jsx'
import Filter3 from '../Components/ProductDisplay/Filter3.jsx'
import { doc, getDocs, onSnapshot, collection, deleteDoc, query, where, or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";
import { fireDB } from '../firebase/firebase.jsx';
import { ToastContainer, toast } from 'react-toastify'
import elestar from '../assets/ele1.png'
import BottomFilter from '../Components/ProductDisplay/Bottomfilter.jsx'
import FilterClose from '../Components/ProductDisplay/FilterClose.jsx'

const ProductList = () => {
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
        // Fetch all products if no specific criteria are provided
        const productsQuery = query(collection(fireDB, "products"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(productsQuery);
    
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          setProducts((prev) => [...prev, { id: doc.id, ...data }]);
        });
      }
    };
// const fetchProduct = async () => {
//     setProducts([]);
    // console.log(min , maxPrice)
    // if (
    //   // min !== 0 && 
    //   maxPrice !== 0 && maxPrice !== 10000 ) {
    //   // console.log(min, maxPrice);
    //   try {
    //     const productsQuery = query(
    //       collection(fireDB, "products"),
    //       where('price', "<", (maxPrice).toString()),
    //       );
    //     const querySnapshot = await getDocs(productsQuery);       
    //       querySnapshot.forEach((doc) => {
    //         const data = doc.data();
    //         setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //       });
    //     console.log('Products fetched successfully:', '1');
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   }
    // }
    
   
    // else if (size.length !== 0 && fabric.length !== 0 ) {
    //   // Fetch products that match both size and fabric criteria
    //   const productsCategoryQuery = query(
    //     collection(fireDB, "products"),
    //     where("size", "in", size),
    //     where("fabric", "in", fabric),
    //   );
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '3');

  
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
    // else if (size.length !== 0  && maxPrice !== 0 ) {
    //   // Fetch products that match both size and fabric criteria
    //   const productsCategoryQuery = query(
    //     collection(fireDB, "products"),
    //     where("size", "in", size),
    //     where('price', "<=", (maxPrice).toString()),
    //   );
      
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '4');

  
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
    // else if (fabric.length !== 0 && maxPrice !== 0 ) {
    //   // Fetch products that match both size and fabric criteria
    //   const productsCategoryQuery = query(
    //     collection(fireDB, "products"),
    //     where("fabric", "in", fabric),
    //     where('price', "<=", (maxPrice).toString()),
    //   );
      
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '5');

  
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
    
    // else
    
    // if (size.length !== 0 && 
    //   // fabric.length !== 0 && 
    //   maxPrice !== 0 
    //   && maxPrice !== 10000) {
    //   // Fetch products that match both size and fabric criteria
    //   const productsCategoryQuery = query(
    //     collection(fireDB, "products"),
    //     where("size", "in", size),
    //     // where("fabric", "in", fabric),
    //     where('price', "<=", (maxPrice).toString()),
    //   );
      
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '2');

  
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
    // else if (maxPrice !== 0 && maxPrice !== 10000 && size.length == 0 
    //   // && fabric.length == 0 
    //    ) {
    //     console.log(min, maxPrice);
    //     try {
    //       const productsQuery = query(
    //         collection(fireDB, "products"),
    //         where('price', "<=", (maxPrice).toString()),
    //         );
    //       const querySnapshot = await getDocs(productsQuery);       
    //         querySnapshot.forEach((doc) => {
    //           const data = doc.data();
    //           setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //         });
    //       console.log('Products fetched successfully:', '3');
    //     } catch (error) {
    //       console.error('Error fetching products:', error);
    //     }
    //   }
    // else if (size.length !== 0) {
    //   // Fetch products based on size criteria
    //   const productsCategoryQuery = query(collection(fireDB, "products"), where("size", "in", size));
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //     console.log('Products fetched successfully:', '6');

    //   });
    // }
    //  else if (fabric.length !== 0 && maxPrice == 10000) {
    //   // Fetch products based on fabric criteria
    //   const productsCategoryQuery = query(collection(fireDB, "products"), where("fabric", "in", fabric));
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '7');

    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
    // else if (fabric.length !== 0 && size !== 0) {
    //   // Fetch products based on fabric criteria
    //   const productsCategoryQuery = query(collection(fireDB, "products"), where("fabric", "in", fabric));
    //   const querySnapshot = await getDocs(productsCategoryQuery);
    //   console.log('Products fetched successfully:', '7');

    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     setProducts((prev) => [...prev, { id: doc.id, ...data }]);
    //   });
    // }
  //   else{
  //     const productsQuery = query(collection(fireDB, "products"), orderBy("createdAt", "desc"));
  //     const querySnapshot = await getDocs(productsQuery);
  //     console.log('Products fetched successfully:', '8');

  
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data();
  //       setProducts((prev) => [...prev, { id: doc.id, ...data }]);
  //     });
  //   }
  // }
  useEffect(() => {
    fetchProduct()
  }, [
    size,
     fabric, 
    // maxPrice
  ])
  // console.log(products,size , fabric)
//  console.log('filter', isFilterVisible)  
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
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#FFFFEF]' >
        <Link to="/Cart">
        <div className='relative'><ToastContainer/></div>
        </Link>
     {isFilterVisible && <Filter3
        className='sm:hidden fixed block  w-[85vw] h-[760px] left-[15vw]
        relative top-[0.5vw]  sm:top-[1.2vw]
            font-bold text-[5vw]  right-0 bg-grey-ray transition'
      stock={stock} 
        setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
         min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}/>}
        {/* <div className='md:mb-[5vw]'>
        <Fashion/>
        </div> */}
        <div className='flex flex-col justify-center items-center pt-[7.25vw] md:my-[0vw] mt-[1vw] md:mb-[0vw] mb-[3vw] h-[2vw] ' >
                <img src={elestar} alt='' className='w-[2vw] font-bold h-[2vw] md:h-[1.5vw] md:w-auto '/>
            
            <div className='flex justify-center font-semibold items-center font-lora text-[#875A33] 
            md:text-[2.5vw] 
            md:mb-[7vw] mb-[1.5vw]' >
                <span>Our Products</span>
            </div> 
            </div>
      <div className='flex flex-row gap-[1vw] justify-start items-start'>
        <div className='hidden md:flex w-[25vw] mt-[0vw] pl-[3vw]'>
        <Filter stock={stock} 
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
      <div>
      <Footer/>
      </div>
      <div>
      
   {/* closeMenu={closeMenu} />} */}
  {/* {is && <Hamburger closeMenu={closeMenu} />} */}
  {/* </div> */}
          {isFilterVisible ? <FilterClose toggleFilter={toggleFilter}/> : <BottomFilter toggleFilter={toggleFilter} isFilterVisible={isFilterVisible}
           setFilterVisible={setFilterVisible}
           className='bottom-0 w-full h-[7vw] fixed'/>}
          {/* hello */}
        </div>
    </div>
  )
}

export default ProductList