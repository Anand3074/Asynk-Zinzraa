import React from 'react'
import Sz1 from '../assets/sz1.png'
import Sz2 from '../assets/sz2.png'
import Sz3 from '../assets/sz3.png'
import Sz4 from '../assets/sz4.png'
import C2 from '../assets/c2.png'
import { FiHeart } from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
// import {BsSizeS}	from 'react-icons/bs'
// import {BsSizeM}    from 'react-icons/bs'
// import {BsSizeL}	from 'react-icons/bs'
// import {BsSizeXL}	from 'react-icons/bs'
// import {BsSize2XL}	from 'react-icons/bs'
// import {BsSize3XL}	from 'react-icons/bs'


const Productsize = () => {
  return (
    <div>
        <div className='h-[45vw]'>
            <div className='flex flex-row'>
                <div>
                    <div className='flex flex-col mr-[1.2vw]'>
                        <div>
                            <img src={Sz2} className='h-[13vw] w-[10vw] mb-[2vw] '/>
                        </div>
                        <div>
                            <img src={Sz3} className='h-[13vw] w-[10vw] mb-[2vw]'/>
                        </div>
                        <div>
                            <img src={Sz1} className='h-[13vw] w-[10vw] '/>
                        </div>
                    </div>
                </div> 
                <div className='h-[45vw] w-[30vw]'>
                    <img src={C2} className='h-[43vw] w-[30vw]'/>
                </div>
{/* Image above  */}
                <div className='flex flex-col ml-[5vw] w-[45vw]'>
                    <div className='flex items-start font-lora text-[#875A33] text-[3.5vw] font-bold '>
                         Daisy cyan silk saree
                    </div>
                    <div className='flex flex-row gap-[0.8vw] items-center text-[2vw] '>
                        <div>
                            4.8
                        </div>
                        <div className='text-[#FFB800]'>
                            <AiFillStar/>
                        </div>
                        <div className='font-lora '>
                            Based on 136 ratings
                        </div>
                    </div>
                    <div className='flex flex-row items-start items-center gap-[1vw] font-inter '>
                    <div className='font-lora text-[#875A33] text-[2vw] font-bold '>
                         $ 1801
                    </div>
                    <div className='text-[#00AA07] font-medium'>
                            47% off
                    </div>
                    </div>
                    <div>
                        <hr className='my-6 border-t border-gray-300 w-[40vw] mt-[3vw]' />
                    </div>
                    <div className='flex flex-row text-[1.2vw] gap-[28vw] space-between'>
                        <div>
                            Select Size
                        </div>
                        <div>
                        Size Guide
                        </div> 
                    </div>
                    <div className='flex flex-row'>
                        {/* <div>
                            <BsSizeS/>
                        </div>
                        <div>
                            <BsSizeM/>
                        </div>
                        <div>
                            <BsSizeL/>
                        </div>
                        <div>
                            <BsSizeXL/>
                        </div>
                        {/* <div>
                            <BsSize2XL/>
                        </div> */}
                        {/* <div>
                            <BsSize3XL/>
                        </div> */}
                    </div>
                    <div className='flex flex-row gap-[3vw]'>
                        <div>
                            <button className='flex flex-row'>
                                <FiHeart className='text-red-400'/> Add to Wishlist
                            </button>
                        </div>
                        <div>
                            <button>
                                Add to Cart
                            </button>
                        </div>

                    </div>
                    

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Productsize