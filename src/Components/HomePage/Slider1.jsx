import _shuffle from 'lodash/shuffle';
import React, { useState } from 'react';
import Cards from '../ProductDisplay/Cards';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Slider from 'react-slick'; 
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

  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    nextArrow:null,
    prevArrow: null,
    slidesToShow: product.length > 3 ? 4 : product.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow:null,
        prevArrow: null,
          

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow:null,
    prevArrow: null,
          

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow:null,
         prevArrow: null,
          

        }
      }
    ]
  };
  
  // console.log('slides', sliderSettings.slidesToShow)

  return (
    <div className='md:pl-[5vw] pl-[4vw] my-[3vw] w-[96vw] overflow-hidden'>
      <Slider {...sliderSettings} className='w-[100vw] overflow-hidden md:w-[90vw]'>
        {product && product.map((products, index) => {
          // console.log('product', product)
          // console.log('productlength', product.length)
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
      </Slider>
    </div>
  );
};

export default SliderMa;
