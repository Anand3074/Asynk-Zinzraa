import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myContext from '../../context/myContext';
// import { ADD_TO_CART } from '../../Redux/CartSlice'


// const Cards = ({title, price, imageUrl, category, description, date, addCart, addWish, isWishlisted, Detail}) => {
    const Cards = ({products, addCart, addWish, isWishlisted, Detail, title, price, imageUrl, category, description}) => {

// const context = useContext(myContext);
    // const { product } = context;
  return (
    
        <div className='w-[30vw] h-[45vw] md:w-[20vw] bg-[#fafafa] md:h-[34vw] rounded-[2px]
         shadow-xl dark:shadow-2xl' >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='mb-[0.25vww]'>
                {/* <Link to='/Detail'><img src="" alt='' */}
                <Link to='/Detail'>
                {/* <img src={imageUrl || products.coverImage} onClick={Detail} alt='' */}
                    <img src={products.coverImage} onClick={Detail} alt=''
 className='object-cover md:w-[20vw]  w-[30vw] object-top h-[37vw] md:h-[25vw] rounded-[1vw] overflow-hidden'/></Link>
                </div>
                {/* <div className='' onClick={handleAddToWishlist}> */}
                <div className='' onClick={addWish}>
                    <div className='absolute z-50 right-[2vw] md:right-[1vw] top-[1vw]'>
                    {/* <div  className='absolute z-50 right-[2vw] top-[1vw]'> */}
                        < IoEllipse className='w-[3.5vw] h-[3.5vw] '
                    fill={isWishlisted ? '#fce4ec' : 'white'}/> 
                    </div>
                    <div className='absolute z-100 right-[2.5vw] md:right-[2.01vw] top-[2vw]'>
                        <FiHeart  className='w-[1.7vw] h-[1.7vw] md:w-[1.45vw] md:h-[1.45vw] text-[#e91e63]'
                        // fill='none'/>
                         fill={isWishlisted ? '#e91e63' : 'none'}/> 
                        </div>
                </div>
            </div>
            <div className='relative  rounded-[0.3vw]'>
                <div className='px-[0.5vw] leading-[1.8vw] font-metro md:leading-[1.35vw]'>
            <div className='flex text-black  wrap 
            justify-start
            text-[1.6vw] md:text-[1.2vw] md:h-[1.8vw] mt-[0.5vw]'>
                {products.description} 
            </div>
            <div className='flex flex-row md:justify-start items-center mt-[1.5vw] pb-[0.5vw] '>
                <div className='font-bold mr-[2vw] font-lora text-[2vw]
                md:text-[1.55vw]'>
                        ₹{products.price }     
                </div>
                <div className='flex text-red-400 font-bold font-lora justify-center items-center
                    line-through text-[1.6vw]  md:text-[1.55vw]'>
                        ₹{Math.floor(products.price* (1 + 43 / 100))}
                </div>
            </div>
            </div>
                <div className='absolute md:right-[0.5vw]  right-[1.5vw]  md:top-[5.3vw] 
                top-[1vw] items-start'>
                    <button onClick={addCart} className=' bg-teal-dark font-semibold 
                    font-poppins text-white  w-[15vw] md:w-[19vw]  h-[3vw]
                     text-[1.2vw]  rounded-[0.4vw] pt-[0.5vw] '>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
                        //  fill={wishClick ? 'red' : 'none'}/>
                        
