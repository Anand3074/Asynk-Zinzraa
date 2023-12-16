import _shuffle from 'lodash/shuffle';
import React, { useState } from 'react';
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

const SliderMa = ({product}) => {
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
        console.log(products)
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
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='ml-[10vw] my-[2vw]'>
      <Slider {...sliderSettings} className=''>
        {product && product.map((products, index) => {
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
