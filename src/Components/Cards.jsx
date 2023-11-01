import React from 'react'
import {FiHeart} from 'react-icons/fi'
import constimg from '../assets/constimg.png'
import {IoEllipse} from 'react-icons/io5'

const Cards = () => {
    const price= "$6500"

  return (

    <div className='flex  md:w-[369px] md:h-[569px] px-[8px]'>
        <div className=' relative flex md:w-[369px] md:h-[472px]'>
            <div className='relative flex-1 w-full md:h-full h:1/2 z-1'>
                <img src={constimg} alt='product' className=' w-full h-2/3 md:h-full rounded-[30px]'/>
            </div>
                <div className='absolute md:left-[299px] md:top-[16px]'>
                    <IoEllipse className="absolute z-2 fill-white md:w-[54px] md:h-[54px] hidden md:flex"  />
                </div>
                <div className='absolute md:left-[313px] md:top-[30px]'>
                    <FiHeart className='absolute text-red-400 w-[26px] z-3 h-[26px] hidden md:flex '/>
                </div>
                        <div className='relativ md:w-[369] md:h-[94px] '>    
            <div className='absolute md:flex md:top-[480px] md:left-[5px] hidden '>{"Daisy Grey Silk Fabricated Saree With \n Mirror Work "}</div>
            <div className='absolute md:flex md:top-[534px]  font-bold md:left-[1px] hidden '>{price}</div>
            <button className='hidden md:flex justify-center items-center absolute bg-teal-dark rounded-[12px] w-[135px] h-[45px] md:top-[520px] md:left-[234px] text-white'>Add to Cart</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cards