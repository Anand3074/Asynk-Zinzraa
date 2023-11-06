import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Cards = ({Products}) => {

    const[wishClick, setWishClick] = useState(0);

    const changeWish = () => {
        setWishClick((prevchangeWish) => !prevchangeWish);
    }
  return (
    
        <div className='w-[28vw] h-[45vw]' >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='z-150'>
                <Link to='/Detail'><img src={Products.image} alt=''
                 className='rounded-[2vw] w-[29vw] h-[30vw'/></Link>
                </div>
                <div className='' onClick={changeWish}>
                    <div className='absolute z-50 right-[2vw] top-[1vw]'>
                        < IoEllipse className='w-[4.5vw] h-[4.5vw] fill-white'/>
                    </div>
                    <div className='absolute z-100 right-[3.4vw] top-[2.5vw]'>
                        <FiHeart className='w-[1.7vw] h-[1.7vw] text-[#FF005C]'
                         fill={wishClick ? 'red' : 'none'}/>
                    </div>
                </div>
            </div>
            <div className='relative'>
            <div className='text-slate-900 font-lora text-[1.6vw]'>
                {Products.specific}
            </div>
            <div className='flex flex-row'>
            <div className='font-semibold mr-[1vw] items-start font-lora text-[2.2vw]'>
                    {Products.price}    
            </div>
                <div className='flex text-red-400 font-lora items-center mr-[12vw] line-through text-[1.4vw]'>
                    {Products.oldprice}
                </div>
            </div>
                <div className='absolute md:right-[1vw] right-[1.5vw]  md:top-[3.3vw] top-[1vw] items-start'>
                    <button className=' bg-teal-dark font-semibold font-poppins text-white  w-[15vw]  h-[3vw]
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