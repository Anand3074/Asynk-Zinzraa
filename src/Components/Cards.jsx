import React from 'react'
import {FiHeart} from 'react-icons/fi'
import constimg from '../assets/constimg.png'
import {IoEllipse} from 'react-icons/io5'

const Cards = () => {
    const price= "$6500"

  return (
    <div className='flex  w-[369px] h-[569px]'>
        <div className=' relative flex w-[369px] h-[472px]'>
            <div className='relative flex-1 w-full h-full z-1'>
                <img src={constimg} alt='product' className=' w-full h-full rounded-[30px]'/>
            </div>
                <div className='absolute left-[299px] top-[16px]'>
                    <IoEllipse className="absolute z-2 fill-white w-[54px] h-[54px]"  />
                </div>
                <div className='absolute left-[313px] top-[30px]'>
                    <FiHeart className='absolute text-red-400 w-[26px] z-3 h-[26px]  '/>
                </div>
                        <div className='relativ w-[369] h-[94px] '>    
            <div className='absolute top-[480px] left-[1px]'>{"Daisy Grey Silk Fabricated Saree With \n Mirror Work "}</div>
            <div className='absolute top-[534px] font-bold left-[1px]'>{price}</div>
            <button className='absolute bg-teal-dark rounded-[12px] w-[135px] h-[45px] top-[520px] left-[234px] text-white'>Add to Cart</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cards