import React, { useEffect, useState } from 'react'
import Collections from '../Components/ProductDisplay/Collections.jsx'
import Modern from '../Components/HomePage/Modern.jsx'
import ele1 from '../assets/ele1.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import Size from '../Components/ProductDisplay/SingleProduct.jsx'
import Ethnic from '../Pages/Category/Ethnic.jsx'
import Recommended from '../Components/ProductDisplay/Recommended.jsx'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { addItemsToCart } from '../../Redux/cartActions'
// import { addToWishlist } from '../../Redux/Wishlist/wishActions';
// import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions'
// import AddReviewModal from '../Components/ProductDisplay/AddReviewModal.jsx'
// import Review from '../Components/ProductDisplay/Review.jsx'
import { ToastContainer } from 'react-toastify'
import { fireDB } from '../firebase/firebase.jsx'
import SliderMa from '../Components/HomePage/Slider1.jsx'
import { doc, getDocs, onSnapshot, collection, deleteDoc,
     query, where, or, and, orderBy, limit, startAfter, startAt, endBefore } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer.jsx'


const Prodctdetail = () => {
    const selectedProduct = useSelector((state) => state.product.selectedProduct)
    // console.log('selectedProduct' , selectedProduct)

    // const {id} = useParams()
    //     // console.log('selectedProductID', selectedProduct.product)
    //     // console.log(isWishlistClicked)
    //     const dispatch = useDispatch()
    //     const handleAddToCart = (item) => {
    //         // console.log(item)
    //         toast("Product Added to Cart")
    //         dispatch(addItemsToCart(selectedProduct))
    //     }
        
    //     const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
    //     const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id ===
    //      selectedProduct.id);
    //     // console.log('item', isItemInWishlist)
    //     const [isWishlistClicked, setIsWishlistClicked] = useState(isItemInWishlist);

    //     //console.log(isWishlistClicked)
    //     const handleAddToWishlist = () => {
    //         const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === 
    //         selectedProduct.id);
            
    //         //  console.log(isItemInWishlist)
            
    //         if (isItemInWishlist) {
    //           dispatch(removeItemFromWishlist(selectedProduct.id));
    //         } else {
    //           dispatch(addToWishlist(selectedProduct));
    //         }
    //         setIsWishlistClicked(!isItemInWishlist);
    //       };
    // const {category} = useParams()
    // console.log('category', category)
    const[relatedProduct, setRelatedProduct] = useState([])
    const[related, setRelated] = useState([])

    const fetchRelatedProducts = async () =>{
        const productsCategoryQuery = query(collection(fireDB, "products"), 
        (where("category", "==",  selectedProduct.category)))
          const querySnapshot = await getDocs(productsCategoryQuery);
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        setRelatedProduct((prev) => [...prev, {
          id: doc.id,
          ...data
        }])

      })
    
    
  }  
   const relatedFetchProducts = async () =>{
    const productsCategoryQuery = query(collection(fireDB, "products"), 
    (where("fabric", "==",  selectedProduct.fabric)))
      const querySnapshot = await getDocs(productsCategoryQuery);
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    setRelated((prev) => [...prev, {
      id: doc.id,
      ...data
    }])

  })


}
      useEffect(() => {
        fetchRelatedProducts()
        relatedFetchProducts()
    
      }, [])

    const Group1 = {
        title:"Similar Products",
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
        title :"Customers also Viewed" ,
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
        //       price : '$6500',
        //       oldprice : '$8066'}, 
        //   {
        //       image : c3,
        //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
        //       price : '$6500',
        //       oldprice : '$7566'
        //     }
        // ]
        }
  return (
    <div>
        <div className='m-[3vw]'>
            <Size />
            {/* // handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}/> */}
        </div>
        {/* <div className='m-[3vw]'> */}
            {/* <Review/> */}
        {/* </div> */}
        {/* <div className='m-[3vw]'>
            <AddReviewModal/>
        </div>
        
        */}
              <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group1.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[24px] mb-[8px]' >
                <span>{Group1.title}</span>
            </div>
            <div  className=''>
            <SliderMa product={relatedProduct} slides={3}/>

            </div>
        <div>
            {/* <Recommended group={Group1}/> */}
        </div>
        <div>
            <Modern/>
        </div>

        <div>
        <div className='flex justify-center items-center h-[2vw]'>
                <img src={Group2.icon} alt='' className='w-[2vw] h-[2vw] md:w-auto '/>
            </div>
            <div className='flex justify-center font-lora items-center text-[#875A33] md:text-[38px]
             md:mb-[24px] mb-[8px]' >
                <span>{Group2.title}</span>
            </div>
            <div  className=''>
            <SliderMa product={related} />

            </div>
    {/* <Recommended group={Group2}/> */}
        </div>
        <Footer/>
    </div>
    
  )
}

export default Prodctdetail