import _shuffle from 'lodash/shuffle';
import React, { useEffect, useState, useContext } from 'react';
import Slider from 'react-slick'; 
import Cards from '../ProductDisplay/Cards';
import myContext from '../../context/myContext';
import { addItemsToCart } from '../../Redux/cartActions';
import { addToWishlist } from '../../Redux/Wishlist/wishActions';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../Redux/Product/productActions';
import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions';
import elestar from '../../assets/ele1.png';
import { IoIosArrowDropright   } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming `products` is an array of items with a `category` property
const SliderCa = ({ group }) => {
  const context = useContext(myContext);
  const { product } = context;
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const categories = ['Saree', 'Kurta', 'Dresses', 'Western', 'Ethnic'];
  const maxItemsPerCategory = 3;



  const shuffledProducts = _shuffle(product);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItemsToCart(item));
  };

  const handleAddToWishlist = (item) => {
    const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);
    if (isItemInWishlist) {
      dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const handleCardDetail = (item) => {
    const { title, price, imageUrl, category, description, id } = item;
    const cardDetails = { title, price, imageUrl, category, description, id };
    dispatch(setSelectedProduct(cardDetails));
  };

  const renderRandomCards = () => {
    const selectedCards = [];

    for (const category of categories.slice(0, 5)) {
      const matchingProducts = shuffledProducts.filter((item) => item.category === category);
      const selectedProduct = matchingProducts.slice(0, maxItemsPerCategory)[0];

      if (selectedProduct) {
        selectedCards.push(
          <Cards
            key={selectedProduct.id}
            title={selectedProduct.title}
            price={selectedProduct.price}
            imageUrl={selectedProduct.imageUrl}
            category={selectedProduct.category}
            description={selectedProduct.description}
            isWishlisted={Wishlist.some((wishlistItem) => wishlistItem.id === selectedProduct.id)}
            addCart={() => handleAddToCart(selectedProduct)}
            addWish={() => handleAddToWishlist(selectedProduct)}
            Detail={() => handleCardDetail(selectedProduct)}
          />
        );
      }
    }

    return selectedCards;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute  top-[14vw] right-[1vw] transform rounded-full
      w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer overflow-hidden "
      onClick={onClick}

    >
  <IoIosArrowDropright className="w-full h-full text-gray-600" fill="" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[14vw] left-[-5.5vw] transform rounded-full
      w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <IoIosArrowDropleft  className="w-full h-full text-gray-600" fill='' />
    </div>
  );

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay timer to 2 seconds
    // customPaging: (i) => (
    //   <div
    //   className={`w-[0vw] h-[0vw] md:w-[0.7vw] md:h-[0.7vw] rounded-full bg-gray-400 ${
    //     i === activeIndex ? 'bg-slate-900' : ''
    //     }`}
    //   />
    // ),
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       position: 'absolute',
    //       bottom: '5px', // Adjust the distance from the bottom
    //       width:  '100%',
    //       textAlign: 'center',
    //     }}
    //   >
    //     <ul style={{ margin: '0' }}>{dots}</ul>
    //   </div>
    // ),
      }

  return (
    <div className='ml-[10vw] my-[2vw]'>
       <Slider {...sliderSettings} className=''>
              {renderRandomCards()}
        </Slider>
    </div>
       
  );
};

export default SliderCa;
