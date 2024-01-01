import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myContext from '../../context/myContext';
import { IconButton } from '@material-tailwind/react'
// import { ADD_TO_CART } from '../../Redux/CartSlice'


// const Cards = ({title, price, imageUrl, category, description, date, addCart, addWish, isWishlisted, Detail}) => {
    const Cards = ({products, addCart, addWish, isWishlisted, Detail, title, price, imageUrl, category, description}) => {
        const diagonalStrikethrough = {
            position: 'relative',
          };
          
          const diagonalLine = {
            content: "''",
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: '1.5px',
            backgroundColor: 'red', // Change the color as needed
            transform: 'rotate(-15deg)',
          };
// const context = useContext(myContext);
    // const { product } = context;
  return (
    
        <div className='w-[46vw] h-[67.5vw] rounded-[1.5vw] md:w-[22.5vw]
         bg-[#fafafa] md:h-[38vw] 
         shadow-xl dark:shadow-2xl' >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='mb-[0.25vww]'>
                {/* <Link to='/Detail'><img src="" alt='' */}
                <Link to='/Detail'>
                {/* <img src={imageUrl || products.coverImage} onClick={Detail} alt='' */}
                    <img src={products.coverImage} onClick={Detail} alt=''
 className='object-cover md:w-[22.5vw]  w-[46vw] object-top h-[54.5vw] md:h-[32vw] rounded-[1vw] 
 overflow-hidden'/></Link>
                </div>
                {/* <div className='' onClick={addWish}>
                    <div className='absolute z-50 right-[2vw] md:right-[1vw] top-[1vw]'>
                        < IoEllipse className='w-[5vw] h-[5vw] md:w-[3.5vw] md:h-[3.5vw] '
                    fill={isWishlisted ? '#fce4ec' : 'white'}/> 
                    </div>
                    <div className='absolute z-100 right-[3.4vw] md:right-[2.05vw] top-[2.15vw]'>
                        <FiHeart  className='w-[2.25vw] h-[2.5vw] md:w-[1.45vw] md:h-[1.45vw] text-[#e91e63]'
                         fill={isWishlisted ? '#e91e63' : 'none'}/> 
                        </div>
                </div> */}
                <div className='absolute z-50 right-[2vw] md:right-[1vw] top-[1vw]'>
                <IconButton onClick={addWish} 
                 variant="gradient" color={isWishlisted ? 'white' : 'white'} className={`rounded-full  
                  w-[3vw] h-[3vw] `}>
                    <FiHeart className='h-[1.5vw] w-[1.5vw] text-[#e91e63]' 
                    fill={isWishlisted ? '#e91e63' : 'none'}                    />
                </IconButton>
                </div>
               

                {/* <div className='' onClick={addWish}>
                    <div className='absolute z-50 right-[2vw] md:right-[1vw] top-[1vw]'>
                        < IoEllipse className='w-[5vw] h-[5vw] md:w-[3.5vw] md:h-[3.5vw] '
                    fill={isWishlisted ? '#fce4ec' : 'white'}/> 
                    </div>
                    <div className='absolute z-100 right-[3.4vw] md:right-[2.05vw] top-[2.15vw]'>
                        <FiHeart  className='w-[2.25vw] h-[2.5vw] md:w-[1.45vw] md:h-[1.45vw] text-[#e91e63]'
                         fill={isWishlisted ? '#e91e63' : 'none'}/> 
                        </div>
                </div> */}
                

            </div>
            <div className='relative  rounded-[0.3vw]'>
                <div className='px-[1vw] h-[3vw] leading-[3vw] md:leading-[1.35vw]'>
            <div className='text-black 
            justify-start font-[400] tracking-[0.5px]  truncate py-[0.25vw]
            text-[2.25vw] md:text-[14px] md:h-[1.8vw] mt-[0.5vw] font-metro '>
                {products.description} 
            </div>
            <div className='flex flex-row md:justify-start items-center pt-[1.25vw] pb-[0.5vw] '>
            <span className="" style={diagonalStrikethrough}>
          <span style={diagonalLine}></span>
            <span className='text-[#455a64] font-[600] text-xl'>
            ₹{Math.floor(products.price* (1 + 43 / 100))}
            </span>
        </span>
                <div className='font-bold ml-[2vw] font-metro text-[3vw]
                md:text-[1.65vw] text-red-900'>
                        ₹{products.price }     
                </div>
                {/* <div className='flex text-red-400 font-bold font-lora justify-center items-center
                    line-through text-[2.5vw]  md:text-[1.55vw]'>
                        ₹{Math.floor(products.price* (1 + 43 / 100))}
                </div> */}
                
                
            </div>
            </div>
            
                {/* <div className='absolute top-[7vw] sm:top-[8vw] md:right-[0vw]  md:top-[5.3vw] 
                 items-start'>
                    <button onClick={addCart} className=' bg-teal-dark font-semibold 
                     text-white  w-[46vw]  md:w-[22.5vw]  h-[4.5vw] md:h-[3vw]
                     text-[2.5vw]  md:text-[1.3vw] rounded-[0.4vw] pt-[0.5vw] '>
                        Add to Cart
                    </button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Cards
                        //  fill={wishClick ? 'red' : 'none'}/>
                        
