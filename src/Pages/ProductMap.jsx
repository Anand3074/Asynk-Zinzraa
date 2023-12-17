import React, { useState, useEffect } from 'react'
import Navbar from '../Pages/Nav.jsx'
import Footer from '../Components/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import ProductList3 from '../Components/ProductDisplay/productList3.jsx'
import Filter from '../Components/ProductDisplay/filter2.jsx'
import { doc, getDocs, onSnapshot, collection, deleteDoc, query, where, or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";
import { fireDB } from '../firebase/firebase.jsx';
import { ToastContainer, toast } from 'react-toastify'
import elestar from '../assets/ele1.png'
import { log } from '@swiper/core/dist/log.js'
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
  console.log(products,size , fabric)

  return (
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#FFFFEF]' >
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
        {/* <div className='md:mb-[5vw]'>
        <Fashion/>
        </div> */}
        <div className='flex flex-col justify-center items-center pt-[7vw] h-[2vw] ' >
                <img src={elestar} alt='' className='w-[2vw] font-bold h-[2vw] md:h-[1.5vw] md:w-auto '/>
            
            <div className='flex justify-center font-semibold items-center font-lora text-[#875A33] 
            md:text-[2.5vw] 
            md:mb-[7vw] mb-[1.5vw]' >
                <span>Our Products</span>
            </div> 
            </div>
      <div className='flex flex-row gap-[1vw] justify-start items-start'>
        <div className='w-[25vw] mt-[2vw] pl-[3vw]'>
        <Filter stock={stock} 
        setStock={setStock} size={size} setSize={setSize} fetchProduct={fetchProduct}
         min={min} setmin={setmin} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          fabric={fabric} setFabric={setFabric} clearFilter={clearFilter}/>
          </div>
          <div className='mt-[2vw]'>
        {products.length !== 0 ? <ProductList3 products={products} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/> : (
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