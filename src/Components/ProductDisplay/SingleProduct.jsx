import React from 'react'
import ProductChart from './ProductChart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../../Redux/cartActions'
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward  } from "react-icons/io";




const Productsize = ({}) => {   
    const selectedProduct = useSelector((state) => state.product.selectedProduct)
    // console.log('selectedProduct' , selectedProduct)

    const {id} = useParams()
        // console.log('selectedProductID', selectedProduct.product)
        // console.log(isWishlistClicked)
        const dispatch = useDispatch()
        const handleAddToCart = (item) => {
            // console.log(item)
            toast("Product Added to Cart")
            dispatch(addItemsToCart(selectedProduct))
        }
        
        const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
        const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id ===
         selectedProduct.id);
        // console.log('item', isItemInWishlist)
        const [isWishlistClicked, setIsWishlistClicked] = useState(isItemInWishlist);

        //console.log(isWishlistClicked)
        const handleAddToWishlist = () => {
            const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === 
            selectedProduct.id);
            
            //  console.log(isItemInWishlist)
            
            if (isItemInWishlist) {
              dispatch(removeItemFromWishlist(selectedProduct.id));
            } else {
              dispatch(addToWishlist(selectedProduct));
            }
            setIsWishlistClicked(!isItemInWishlist);
          };
          const NextArrow = ({ onClick }) => (
            <div
              className="absolute flex justify-center items-center top-[39.5vw] right-[1vw] bg-gray-500  transform rounded-full w-[6vw] h-[6vw] -translate-y-1/2 cursor-pointer overflow-hidden"
              onClick={onClick}
            >
              <IoIosArrowForward  className="pl-[1vw] w-[5vw] h-[5vw] text-yellow-[700]"  />
            </div>
          );
        //   console.log(isWishlistClicked)
        const sliderSettings = {
            dots: true, 
            infinite: false,
            speed: 500,
            // nextArrow: <NextArrow />,
            // prevArrow:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
        }
  return (
    <div>
        <div className=''>
        <Link to="/Cart">
        <div className=''><ToastContainer/></div>
        </Link>
            <div className='flex sm:flex-row flex-col '>
                <div className='flex flex-row justify-center'>
                    <div>
                        <div className='flex flex-col mr-[1.2vw]'>
                            <div>
                                <img src={selectedProduct.image[0]}  className='sm:h-[14.3vw] sm:w-[16vw] object-cover object-top h-[25.7vw] w-[21] md:mb-[1vw] mb-[2vw] '/>
                            </div>
                            <div>
                                <img src={selectedProduct.image[1]}  className='sm:h-[14.3vw] sm:w-[16vw] object-cover object-top h-[25.7vw] w-[21] md:mb-[1vw] mb-[2vw]'/>
                            </div>
                            <div>
                                <img src={selectedProduct.image[2]}  className='sm:h-[14.3vw] sm:w-[16vw] object-cover object-top h-[25.7vw] w-[21] '/>
                            </div>
                        </div>
                    </div> 
                    <div className='h-[83vw] sm:h-[45vw] sm:w-[35vw] w-[72.5vw]'>
                    <Slider {...sliderSettings} className=''>
                    <img src={selectedProduct.coverImage} className='h-[81vw] object-cover object-top sm:h-[45vw] sm:w-[40vw] w-[72.5vw]'/>
                    <img src={selectedProduct.image[0]} className='h-[81vw] object-cover object-top sm:h-[45vw] sm:w-[40vw] w-[72.5vw]'/>
                    <img src={selectedProduct.image[1]} className='h-[81vw] object-cover object-top sm:h-[45vw] sm:w-[40vw] w-[72.5vw]'/>
                    <img src={selectedProduct.image[2]} className='h-[81vw] object-cover object-top sm:h-[45vw] sm:w-[40vw] w-[72.5vw]'/> 
                    </Slider>
                    </div>
                </div>
{/* Image above1  */}
            <div className=''><ProductChart         
            isWishlisted={isWishlistClicked}
            product={selectedProduct}
             price={selectedProduct.price} Description={selectedProduct.description}
             addCart={ () => handleAddToCart(selectedProduct)} 
             addWish={() => handleAddToWishlist(selectedProduct)}/></div>
            </div>
        </div>
    </div>
  )
}

export default Productsize