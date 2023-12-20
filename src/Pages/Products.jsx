import React, { useEffect, useState } from 'react'
// import { useState, useEffect } from 'react'
// import Hero from '../Components/Hero.jsx'
// import Hero1 from '../Components/Hero1.jsx'
// import Hero2 from '../Components/Hero2.jsx'
import Collections from '../Components/ProductDisplay/Collections.jsx'
import Recommended from '../Components/ProductDisplay/Recommended.jsx'
import Categ1 from '../Components/HomePage/Categ1.jsx'
import Wtrends from '../Components/HomePage/Wtrend.jsx'
import Kalki from '../Components/HomePage/kalki.jsx'
import Testimonial from '../Components/HomePage/Testimonial.jsx'
import Trusty from '../Components/HomePage/Trusty.jsx'
import Footer from '../Components/Footer.jsx'
import Carousel from '../Components/HomePage/Carousel.jsx'
import ele1 from '../assets/ele1.png'
import SliderCa from '../Components/HomePage/Slider1.jsx'
import { fireDB } from '../firebase/firebase.jsx'
import BestCollection from '../Components/HomePage/BestCollection.jsx'
// import { addItemsToCart } from '../Redux/cartActions';
// import { addToWishlist } from '../Redux/Wishlist/wishActions';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedProduct } from '../Redux/Product/productActions';
// import { removeItemFromWishlist } from '../Redux/Wishlist/wishActions';
import { doc, getDocs, onSnapshot, collection, deleteDoc, query, where,
   or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";


const Products = () => {
 const [products, setProducts] = useState([])
 const [best, setBest] = useState([])
 const [variety, setVariety] = useState([])

//  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
//   const dispatch = useDispatch();

//   const handleAddToCart = (products) => {
//     dispatch(addItemsToCart(products));
//   };

//   const handleAddToWishlist = (products) => {
//     const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === products.id);
//     if (isItemInWishlist) {
//       dispatch(removeItemFromWishlist(products.id));
//     } else {
//       dispatch(addToWishlist(products));
//     }
//   };

//   const handleCardDetail = (products) => {
//     dispatch(setSelectedProduct(products));
//     console.log(products)
//   };

  
 const Recommended = async () => {
  setProducts([]);
  try {
    const productsQuery = query(collection(fireDB, "products"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(productsQuery);
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setProducts((prev) => [...prev, {
        id: doc.id,
        ...data
      }])

    })
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
const BestCollec = async () => {
  setBest([]);
  try {
     const productsQuery = query(collection(fireDB, "products"), orderBy("price", "desc"))
     const querySnapshot = await getDocs(productsQuery);
     querySnapshot.forEach((doc) => {
       const data = doc.data();
       setBest((prev) => [...prev, {
         id: doc.id,
         ...data
       }])
      //  console.log(best)
 
     })
  } catch (error) {
     console.error('Error fetching products:', error);
  }
 };

 const WatchShop = async () => {
  setVariety([]);
  try {
     const productsQuery = query(collection(fireDB, "products"), where("category", 'in' ,["Ethnic", "Kurta"]))
     const querySnapshot = await getDocs(productsQuery);
     querySnapshot.forEach((doc) => {
       const data = doc.data();
       setVariety((prev) => [...prev, {
         id: doc.id,
         ...data
       }])
      //  console.log(best)
 
     })
  } catch (error) {
     console.error('Error fetching products:', error);
  }
 };

// Use useEffect to fetch products when the component mounts
useEffect(() => {
  Recommended();
  BestCollec();
  WatchShop()
}, []);
  const Group1 = {
    title:"Best Collections",
    icon : ele1,
    // Products : [
    //   {
    //       image : Card1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : Card2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : Card3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group2 = {
    title:"Recommended for you",
    icon : ele1,
    // Products : [
    //   {
    //       image : c1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : c2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$7894',
    //       oldprice : '$8066'}, 
    //   {
    //       image : c3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group3 = {
    title:"Watch and Shop",
    icon : ele1,
    // Products : [
    //   {
    //       image : Card1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : Card2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : Card3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group4 = {
    title:"Colors of India",
    icon : ele1,
    // Products : [
    //   {
    //       image : colr1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : colr2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : colr3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className=''>
        <Categ1/>
      </div>
      <div className='mt-[3vw] md:mt-[3vw]'>
      <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group1.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[24px] mb-[8px]' >
                <span>{Group1.title}</span>
            </div>
      <BestCollection product={best} 
      // handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} handleCardDetail={handleCardDetail}
      />
      {/* <Recommended group={Group1}/> */}
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
        <Wtrends/>
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
        {/* <Recommended group={Group2}/> */}
        <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group2.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[1.5vw] mb-[3vw]' >
                <span>{Group2.title}</span>
            </div>
        <SliderCa product={products} 
        // handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}
        // handleCardDetail={handleCardDetail}
        />
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
      <div className='flex justify-center h-[2vw] '>
                <img src={Group1.icon} alt='' className='w-[2vw] h-[2vw]' />
            </div>
            <div className='flex justify-center text-[#875A33] font-lora 
            md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Top Picks Of Kalki koechlin</span>
            </div>
        <Kalki/>
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
      {/* <Recommended group={Group3}/>*/}
      <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group3.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[1.5vw] mb-[3vw]' >
                <span>{Group3.title}</span>
            </div>
      <SliderCa product={products} 
      // handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}
      // handleCardDetail={handleCardDetail}
      /> 
      </div>
      <div>
      {/* <Recommended group={Group4}/> */}
      <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group4.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[1.5vw] mb-[3vw]' >
                <span>{Group4.title}</span>
            </div>
      <BestCollection product={variety} 
      // handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}
      // handleCardDetail={handleCardDetail}
      />
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
      <Testimonial/> 
      </div>
      <div>
        <Trusty/>
      </div>
      <div>
      <Footer/>
      </div>
    </div> 
  )
}

export default Products
    
    