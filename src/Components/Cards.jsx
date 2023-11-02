import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Cards = ({Products}) => {
  return (
    <Link to='/Detail'>
        <div className='w-[28vw] h-[45vw]' >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='z-150'>
                     <img src={Products.image} alt='' className='rounded-[2vw] w-[29vw] h-[30vw'/>
                </div>
                <div className=''>
                    <div className='absolute z-50 right-[2vw] top-[1vw]'>
                        < IoEllipse className='w-[5vw] h-[5vw] fill-white'/>
                    </div>
                    <div className='absolute z-100 right-[3.5vw] top-[2.5vw]'>
                        <FiHeart className='w-[2vw] h-[2vw] text-red-500'/>
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
</Link>
  )
}

export default Cards