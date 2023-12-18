import _shuffle from 'lodash/shuffle';
import React, { useState , useEffect} from 'react';
import Slider from 'react-slick'; 
import Cards from '../ProductDisplay/Cards';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../Redux/cartActions';
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';

const SliderMa = ({product}, slides) => {
  // console.log('item', product)
    // ,handleAddToCart,handleAddToWishlist,handleCardDetail
    // console.log(product)

    // console.log(products)
    const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
    // const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
      const dispatch = useDispatch();
    
      const handleAddToCart = (products) => {
        dispatch(addItemsToCart(products));
      };
    
      const handleAddToWishlist = (products) => {
        const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === products.id);
        if (isItemInWishlist) {
          dispatch(removeItemFromWishlist(products.id));
        } else {
          dispatch(addToWishlist(products));
        }
      };
    
      const handleCardDetail = (products) => {
        dispatch(setSelectedProduct(products));
        // console.log(products)
      };

  

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[14vw] right-[1vw] transform rounded-full w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <IoIosArrowDropright className="w-full h-full text-gray-600" fill="" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[14vw] left-[-5.5vw] transform rounded-full w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer"
      onClick={onClick}
      style={{ zIndex: 2 }}
    >
      <IoIosArrowDropleft className="w-full h-full text-gray-600" fill='' />
    </div>
  );
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
   
    useEffect(() => {
       const handleWindowResize = () => setViewportWidth(window.innerWidth);
       window.addEventListener('resize', handleWindowResize);
       return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    slidesToShow: product.length > 3 ? 4 : product.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  // console.log('slides', sliderSettings.slidesToShow)

  return (
    <div className='md:pl-[3vw] sm:px-[0.5vw] px-[1.5vw] my-[2vw]'>
      {/* <div className='flex flex-row gap-[3vw]'>
      {product && product.map((products, index) => { */}

          {/* // console.log('product', product)
          // console.log('productlength', product.length) */}

          <div className='flex justify-center items-center grid grid-cols-3 gap-[1.5vw] sm:gap-[1vw] md:gap-[3vw] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
      {product && product.slice(0, viewportWidth > 1280 ? 4 : viewportWidth > 1024 ?
       4 : viewportWidth > 768 ? 4 : 3).map((products, index) => {
          const isItemInWishlist = Wishlist.some((wishlistItem) => wishlistItem.id === products.id);
          return ( 
            <div key={index}>
              <Cards
                products={products}
                isWishlisted={isItemInWishlist}
                addCart={() => handleAddToCart(products)}
                addWish={() => handleAddToWishlist(products)}
                Detail={() => handleCardDetail(products)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderMa;
