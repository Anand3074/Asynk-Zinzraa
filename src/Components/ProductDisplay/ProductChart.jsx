import React from 'react'
import Sz2 from '../../assets/sz2.png'
import Sz3 from '../../assets/sz3.png'
import Sz4 from '../../assets/sz4.png'
import C2 from '../../assets/c2.png'
import { FiHeart } from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
import szi1 from '../../assets/szi1.png'
import szi2 from '../../assets/szi2.png'
import szi3 from '../../assets/szi3.png'

const ProductChart = () => {
    const Products = {
        Rating : '4.8',
        RatingNo : '143',
        ProductPrice: '2732',
        Discount: '47%',
        oldPrice:'6638'

    }
  return (
    <div>
        <div className='flex flex-col justify-center sm:mx-[5vw] mx-[1.5vw] w-[91.5vw] sm:w-[45vw] sm:border-none border border-solid border-1px border-[#875A33]'>
                    <div className='flex items-star font-lora text-[#875A33] sm:text-[3.5vw] text-[5.3vw] font-bold '>
                         Daisy cyan silk saree
                    </div>
                    <div className='flex flex-row gap-[0.8vw] items-center sm:text-[2vw] text-[4vw]  '>
                        <div>
                            {Products.Rating}
                        </div>
                        <div className='text-[#FFB800]'>
                            <AiFillStar/>
                        </div>
                        <div className='font-lora '>
                            Based on {Products.RatingNo} ratings
                        </div>
                    </div>
                    <div className='flex flex-row items-start items-center gap-[1vw] font-inter'>
                    <div className='font-lora text-[#875A33] text-[2vw] font-bold '>
                         $ {Products.ProductPrice}
                    </div>
                    <div className='text-[#00AA07] font-medium text-[2vw]'>
                            {Products.Discount} off
                    </div>
                    </div>
                    <div className='flex flex-row items-center gap-[1vw]'>
                    <div className='text-[1.65vw] text-[##7C7C7C]'>MRP ₹</div>
                    <div className='text-[1.47vw] text-red-400 line-through'>{Products.oldPrice}</div>
                    <div className='text-[1.47vw] text-[##7C7C7C]'>Inclusive of all taxes</div>
                  
                    </div>
                    <div>
                        <hr className=' border-t border-gray-600 w-[40vw] h-[0.2vw] mt-[1vw]' />
                    </div>
                    <div className='flex flex-row text-[1.2vw] gap-[28vw] mt-[1vw]'>
                        <div className='w-[6vw] h-[1.2vw]'>
                            Select Size
                        </div>
                        <div className='w-[6vw] h-[1.2vw]'>
                        Size Guide
                        </div> 
                    </div>
                    <div className='flex flex-row gap-[0.7vw] text-[1.5vw] w-[40vw] h-[8vw] mt-[0.5vw]'>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                S
                            </button><div className='h-[2.5vw] text-[0.7vw]'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                M
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'>sold out</div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                L
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex text-red-400'>4 left</div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                2XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
                            border border-solid border-1px border-[#875A33]'>
                                3XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[2vw] w-[30vw] h-[4vw] text-[1.47vw] mb-[1vw] mt-[2vw]'>
                        <div>
                            <button className=' flex flex-row w-[18vw] px-[5px] justify-center items-center
                                                border border-solid border-1px border-[#875A33] py-[1vw] rounded-[1.2vw]'>
                                <FiHeart className='text-red-400 mr-[1.5vw]' /> Add to Wishlist
                            </button>
                        </div>
                        <div>
                            <button className=' w-[18vw] px-[10px] text-white jsutify-cenetr
                                                bg-teal-dark  py-[1vw] rounded-[1.2vw]'>
                                Add to Bag
                            </button>
                        </div>
                    </div>
                    <div>
                        <hr className='border-t border-gray-600 w-[40vw] mt-[1vw]' />
                    </div>
                    <div className='mt-[2vw] font-inter font-semibold text-[1.65vw]'>
                        Select Delivery Location
                    </div>
                    <div className='text-[1.47vw] fotn-inter w-[32vw]'>
                        <div>
                            Enter the pincode of your area to check product
                        </div> 
                        <div>
                        availability and delivery options
                        </div>
                    </div>
                    <div className='flex bg-grey-ray w-[31.5vw] mt-[1.5vw] text-[1.1vw] h-[4vw] items-center px-[2vw]'>
                            <input
                            placeholder='Pincode'
                            className="bg-transparent w-[27vw] border-none text-xs focus:outline-none"
                            />
                            <div>
                                Apply
                            </div>
                     </div>
                     <div className='flex flex-row h-[4vw] w-[25vw] text-[0.92vw] gap-[1.5vw] mt-[2vw] '>
                        <div className='flex flex-col w-[7vw] justify-center '>
                            <img src={szi1} alt='' className='mb-[0.5vw] h-[3vw] w-[3vw]'/>
                            <div>
                                COD Available
                            </div>
                        </div>
                     <div className='flex flex-col w-[7vw] justify-center '>
                            <img src={szi2} alt='' className='mb-[0.5vw] h-[3vw] w-[3vw]'/>
                            <div>
                                <div>
                                    7 Days Return
                                </div>
                                <div>
                                    and Exchange
                                </div>
                            </div>
                        </div>
                     <div className='flex flex-col w-[7vw] justify-center '>
                            <img src={szi3} alt='' className='mb-[0.5vw] h-[3vw] w-[3vw]'/>
                            <div>
                                <div>
                                    Usually ship in 
                                </div>
                                <div>
                                    2 Days
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ProductChart