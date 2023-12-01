import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myContext from '../../context/myContext';
// import { ADD_TO_CART } from '../../Redux/CartSlice'


const Cards = ({title, price, imageUrl, category, description, date, addCart, addWish, isWishlisted, Detail}) => {
    const context = useContext(myContext);
    const { product } = context;
  return (
    
        <div className='w-[28vw] h-[42vw] mr-[5vw]' >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='z-150'>
                {/* <Link to='/Detail'><img src="" alt='' */}
                <Link to='/Detail'><img src={imageUrl} onClick={Detail} alt=''
                className='rounded-[2vw] w-[28vw] h-[33vw]'/></Link>
                </div>
                {/* <div className='' onClick={handleAddToWishlist}> */}
                <div className='' onClick={addWish}>
                    <div className='absolute z-50 right-[2vw] top-[1vw]'>
                    {/* <div  className='absolute z-50 right-[2vw] top-[1vw]'> */}
                        < IoEllipse className='w-[4.5vw] h-[4.5vw] fill-white'/>
                    </div>
                    <div className='absolute z-100 right-[3.4vw] top-[2.5vw]'>
                        <FiHeart className='w-[1.7vw] h-[1.7vw] text-[#FF005C]'
                        // fill='none'/>
                         fill={isWishlisted ? 'red' : 'none'}/> 
                        </div>
                </div>
            </div>
            <div className='relative'>
            <div className='flex text-slate-900 font-lora mt-[0.4vw] mx-[0.6vw] wrap leading-[1.8vw] md:leading-[1.7vw] text-[1.6vw] md:text-[1.55vw] h-[3vw] mb-[0.2vw]'>
                {description} 
            </div>
            <div className='flex flex-row'>
            <div className='font-bold mr-[1vw] items-start font-lora mt-[0.5vw] text-[2vw]
             md:text-[1.7vw]'>
                    ${price}     
            </div>
                <div className='flex text-red-400 font-lora items-center 
                mr-[12vw] line-through text-[1.4vw]  md:text-[1vw]'>
                    ${Math.floor(price * (1 + 43 / 100))}
                </div>
            </div>
                <div className='absolute md:right-[1vw] right-[1.5vw]  md:top-[3.3vw] top-[1vw] items-start'>
                    <button onClick={addCart} className=' bg-teal-dark font-semibold font-poppins text-white  w-[10vw]  h-[3vw]
                     text-[1.2vw]   rounded-[0.4vw] '>
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
                        
