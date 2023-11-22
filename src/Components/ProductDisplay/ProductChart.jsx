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
        oldPrice:'6638'}

        // SizeItem = ['S', 'L', 'M','XL','2XL', '3Xl']

        // const SizeButton =({Si}) => {
        // <>
        //     <div className='flex flex-col justify-center'>
        //     <button className='w-[6vw] h-[2.5vw] rounded-[0.5vw] bg-transparent 
        //     border border-solid border-1px border-[#875A33]'>
        //         {Si}
        //     </button><div className='h-[2.5vw] text-[0.7vw]'></div>
        //                 </div>
        
        // </>
        // }
                        

    
  return (
    <div>
        <div className='flex flex-col justify-center items-center sm:justify-start
         sm:items-start sm:mx-[2.5vw] mx-[1.5vw] w-[91.5vw] sm:w-[35vw] 
         sm:border-none border border-solid border-1px border-[#875A33] '>
                    <div className='flex sm:items-start items-center justify-center
                     font-[lora] text-[#875A33] 
                    sm:text-[3.5vw] text-[5vw] font-bold wrap '>
                         Daisy cyan silk saree from Mirror work.

                    </div>
                    <div className='flex flex-row sm:flex-col gap-[1.5vw] sm:gap-[1vw]  '>
                    <div className='flex flex-row gap-[0.6vw]
                     items-center sm:text-[1.6vw] text-[2.5vw]  '>
                        <div className=''>
                            {Products.Rating}
                        </div>
                        <div className='text-[#FFB800]'>
                            <AiFillStar/>
                        </div>
                        <div className='font-lora mr-[10vw] sm:mr-[0vw]'>
                            Based on {Products.RatingNo} ratings
                        </div>
                    </div>
                    <div className=' font-inter flex sm:flex-row items-center justify-center gap-[1.4vw]'>
                    <div className='font-lora text-[#875A33] sm:text-[2vw] text-[2.65vw]  font-bold '>
                         $ {Products.ProductPrice}
                    </div>
                    <div className='text-[#00AA07] font-medium sm:text-[2vw] text-[2.65vw]'>
                            {Products.Discount} off
                    </div>
                    </div>

                    <div className='flex flex-row items-center gap-[1vw]'>
                    <div className='text-[2.65vw] sm:text-[1.65vw] text-[##7C7C7C]'>MRP ₹</div>
                    <div className='text-[1.47vw] text-red-400 line-through'>{Products.oldPrice}</div>
                    <div className='text-[1.47vw] text-[##7C7C7C]'>Inclusive of all taxes</div>
                    </div>
                    </div>
                    <div>
                        <hr className=' border-t border-gray-600 sm:w-[40vw] h-[0.2vw] mt-[1vw]' />
                    </div>
                    <div className='flex flex-row text-[1.2vw] sm:gap-[28vw] gap-[61.5vw]  mt-[1vw]'>
                        <div className='w-[6vw] h-[1.2vw]'>
                            Select Size
                        </div>
                        <div className='w-[6vw] h-[1.2vw]'>
                        Size Guide
                        </div> 
                    </div>
                    <div className='flex flex-row sm:gap-[0.7vw] gap-[4vw] text-[1.5vw] sm:w-[40vw] 
                    h-[8vw] mt-[0.5vw]'>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                S
                            </button><div className='h-[2.5vw] text-[0.7vw]'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                M
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'>sold out</div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                L
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex text-red-400'>4 left</div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                2XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className='sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] 
                            bg-transparent  
                            border border-solid border-1px border-[#875A33]'>
                                3XL
                            </button><div className='h-[2.5vw] text-[1vw] justify-center flex'></div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[2vw] sm:w-[30vw] h-[4vw] text-[1.47vw] mb-[1vw] sm:mt-[2vw] mt-[1vw]'>
                        <div>
                            <button className=' flex flex-row sm:w-[18vw] w-[30vw] h-[5vw] sm:h-auto  px-[5px] justify-center items-center
                                                border border-solid border-1px border-[#875A33] py-[1vw] rounded-[1.2vw]'>
                                <FiHeart className='text-red-400 mr-[1.5vw]' /> Add to Wishlist
                            </button>
                        </div>
                        <div>
                            <button className=' sm:w-[18vw] w-[30vw] h-[5vw] sm:h-auto px-[10px] text-white jsutify-cenetr
                                                bg-teal-dark  py-[1vw] rounded-[1.2vw]'>
                                Add to Bag
                            </button>
                        </div>
                    </div>
                    <div>
                        <hr className='border-t border-gray-600 sm:w-[40vw] w-[80vw] sm:mt-[1vw] mt-[3vw]' />
                    </div>
                    <div className='mt-[1vw] font-inter font-semibold text-[1.65vw]'>
                        Select Delivery Location
                    </div>
                    <div className='text-[1.47vw] font-inter sm:w-[32vw] gap-[0.5vw]
                     sm:gap-[0vw] flex flex-row  sm:flex-col'>
                        <div>
                            Enter the pincode of your area to check product
                        </div> 
                        <div>
                        availability and delivery options
                        </div>
                    </div>
                    <div className='flex bg-grey-ray w-[31.5vw] mt-[1.5vw]  sm:text-[1.1vw] text-[1.2vw] 
                    sm:h-[4vw] h-[3vw] items-center px-[2vw]'>
                            <input
                            placeholder='Pincode'
                            maxLength={6}
                            className="bg-transparent w-[24vw] sm:text-[1.6vw] text-[2.2vw] border-none 
                             focus:outline-none"
                            />
                            <div>
                                Apply
                            </div>
                     </div>
                     <div className='flex flex-row h-[4vw] w-[25vw] text-[0.92vw] gap-[1.5vw] mt-[2vw] '>
                        <div className='flex flex-col w-[7vw] justify-center mb-[3vw] sm:mb-[0vw] '>
                            <img src={szi1} alt='' className='mb-[0.5vw] h-[3vw] w-[3vw]'/>
                            <div>
                                COD Available
                            </div>
                        </div>
                     <div className='flex flex-col w-[7vw] justify-center mb-[3vw] sm:mb-[0vw]'>
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
                     <div className='flex flex-col w-[7vw] justify-center mb-[3vw] sm:mb-[0vw]'>
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