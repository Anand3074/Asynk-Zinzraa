import React from 'react'
// import Sz2 from '../../assets/sz2.png'
// import Sz3 from '../../assets/sz3.png'
// import Sz4 from '../../assets/sz4.png'
// import C2 from '../../assets/c2.png'
import { FiHeart } from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
import szi1 from '../../assets/szi1.png'
import szi2 from '../../assets/szi2.png'
import szi3 from '../../assets/szi3.png'
import { useState,  } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-tailwind/react'



const ProductChart = ({product, isWishlisted, addWish, addCart}) => {


    const Products = {
        Rating : '4.8',
        RatingNo : '143',
        ProductPrice: '2732',
        Discount: '47%',
        oldPrice:'6638'}
        // console.log(isWishlisted)
        // const Wishlist = useSelector((state) => state.wishlist.wishlistItems);

        // const isItemInWishlist = Wishlist.some((wishlistItems) => wishlistItems.id === item.id);


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
        const [selectedSize, setSelectedSize] = useState(null);
        // console.log(isWishlisted)
        const wishlist = false

  const sizeOptions = [
    { size: 'S', availability: true },
    { size: 'M', availability: false, message: 'Sold out' },
    { size: 'L', availability: true, message: '4 left' },
    { size: 'XL', availability: true, message: '4 left' },
    { size: '2XL', availability: true, message: '4 left' },
    { size: '3XL', availability: true, message: '4 left' },
  ];

  const handleSizeClick = (index) => {
    setSelectedSize(index);
  };
                        

    
  return (
    <div>
        <div className='flex flex-col justify-center sm:h-auto h-[62.5vw] sm:justify-start
         sm:items-start sm:mx-[2.5vw] sm:mx-[2.5vw] w-[95vw] sm:w-[40vw] 
         sm:border-none border border-solid border-1px border-[#875A33] p-[1.5vw] sm:p-[0vw] '>
                    <div className='flex sm:items-start items-center justify-center
                     font-[lora] text-[#875A33] 
                    sm:text-[2.5vw] text-[5vw] font-medium wrap '>
                        {product.description}
                    </div>
                    <div className='flex flex-row sm:flex-col gap-[1vw] sm:gap-[1vw]   '>
                    <div className='flex flex-row gap-[0.6vw]
                     items-center sm:text-[1.6vw] text-[2.5vw]   '>
                        <div className=''>
                            {Products.Rating}
                        </div>
                        <div className='text-[#FFB800]'>
                            <AiFillStar/>
                        </div>
                        <div className='font-lora mr-[5vw] sm:mr-[0vw]'>
                            Based on {Products.RatingNo} ratings
                        </div>
                    </div>
                    <div className=' font-inter flex sm:flex-row items-center justify-center 
                    gap-[1.4vw]'>
                    <div className='font-lora text-[#875A33] sm:text-[2vw] text-[3.65vw]  font-bold '>
                    ₹ {product.price}
                    </div>
                    <div className='text-[#00AA07] font-medium sm:text-[2vw] text-[2.65vw]'>
                            47% off
                    </div>
                    </div>

                    <div className='flex flex-row items-center gap-[1vw]'>
                    <div className='text-[2.65vw] sm:text-[1.65vw] text-[##7C7C7C]'>MRP </div>
                    <div className='text-[2.47vw] sm:text-[1.50vw] text-red-400 line-through'>₹{Math.floor(product.price * (1 + 43 / 100))}</div>
                    <div className='text-[1.47vw] text-[##7C7C7C]'>Inclusive of all taxes</div>
                    </div>
                    </div>
                    <div>
                        <hr className=' border-t border-gray-600 sm:w-[40vw] h-[0.2vw] mt-[1vw]' />
                    </div>
                    <div className='flex flex-row text-[1.2vw] text-[3vw] sm:text-[1.45vw]
                     ml-[2vw] sm:ml-[0.1vw]
                     sm:gap-[22vw] gap-[55vw] mt-[1vw] sm:mt-[0.3vw]'>
                        <div className='w-[20vw] h-[4vw] sm:w-[12vw] sm:h-[1.2vw] '>
                            Select Size
                        </div>
                        <div className='w-[20vw] h-[4vw] sm:w-[12vw] sm:h-[1.2vw]'>
                        Size Guide
                        </div> 
                    </div>
                    
                    <div className='flex flex-row justify-center items-center 
                    sm:gap-[0.7vw] gap-[4vw] text-[2.75vw] sm:text-[1.5vw]  
                    sm:w-[40vw] h-[8vw] sm:mt-[0.5vw] mt-[2.5vw]'>
      {sizeOptions.map((option, index) => (
        <div key={index} className='flex flex-col justify-center'>
          <button
            className=
            {`${
                option.availability ?   'border' : 'bg-slate-200' 
              }
            ${selectedSize === index ? 'bg-[#00695c] text-white font-semibold' : 'bg-transparent'
            } sm:w-[6vw] sm:h-[2.5vw] w-[9vw] h-[4vw] rounded-[0.5vw] border border-solid
             border-1px border-[#875A33]`}
            onClick={() => handleSizeClick(index)}
            disabled={!option.availability}
          >
            {option.size}
          </button>
          <div className={`h-[2.5vw] text-[2vw] sm:text-[1vw] justify-center flex 
          ${option.availability ? 'text-green-400' : 'text-red-400'}`}>
            {option.availability ? ''
            // 'Available' 
            : option.message}
          </div>
        </div>
      ))}
    </div>
                    <div className='flex justify-center items-center
                    sm:justify-right sm:pl-[10vw] 
                     flex-row gap-[2vw] sm:w-[30vw] h-[4vw] text-[1.47vw]
                     mb-[1vw] sm:mt-[1.5vw] sm:mt-[2vw] md:mt-[3vw] mt-[4vw]'>
                        <div>
                            <Button onClick={addWish}
                             className={`flex flex-row sm:w-[18vw] text-black  w-[30vw] h-[5vw] sm:h-[3.5vw] 
                             px-[5px] justify-center items-center border border-solid border-1px
                              border-[#875A33] py-[1vw] rounded-[1.2vw] ${isWishlisted ? 'bg-pink-500 text-white sm:text-[1.2vw] text-[2vw] sm:text-[1.5vw] font-semibold px-[1.5vw]' : 'bg-white sm:text-[1.2vw] text-[2vw]'}`}>
                                <FiHeart className={` ${isWishlisted? 'fill-white text-white sm:w-[2.5vw]' :
                                'bg-white'} text-red-400 sm:w-[3vw] sm:h-[1.75vw] mr-[1.5vw]`} />  
                                {isWishlisted ?   'Wishlisted' :'Add to Wishlist+'}
                            </Button>
                        </div>
                        <div>
                            <Button onClick={addCart} className=' sm:w-[18vw] w-[30vw] h-[5vw] sm:h-[3.5vw] px-[10px] 
                            text-white jsutify-center sm:text-[1.2vw] text-[2vw] bg-teal-dark  py-[1vw] rounded-[1.2vw]'>
                                Add to Bag
                            </Button>
                        </div>
                    </div>
                    <div>
                        <hr className='border-t  border-gray-600 sm:w-[40vw] w-[90vw]  sm:mt-[1vw] mt-[3vw]' />
                    </div>
                    {/* <div className='mt-[1vw] font-inter font-semibold text-[1.65vw]'>
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
                     </div> */}
                     <div className='flex flex-row h-[4vw] w-[80vw] mx-[5vw] sm:mx-[0vw]
                      sm:w-[40vw] text-[1.5vw] sm:text-[0.92vw]
                       mt-[7vw] sm:mt-[5.5vw] justify-between'>
                        <div className='flex flex-col w-[20vw]  sm:w-[10vw] font-semibold justify-center items-center
                         mb-[3vw] sm:mb-[0vw] '>
                            <img src={szi1} alt='' className='mb-[0.5vw] h-[6vw] w-[5vw]
                            object-cover  sm:h-[3vw] sm:w-[3vw]'/>
                            <div>
                                COD Available
                            </div>
                        </div>
                     <div className='flex flex-col w-[20vw]  sm:w-[10vw] font-semibold justify-center items-center
                      mb-[3vw] sm:mb-[0vw]'>
                            <img src={szi2} alt='' className='mb-[0.5vw] h-[6vw] w-[5vw]
                            object-cover  sm:h-[3vw] sm:w-[3vw]'/>
                            <div>
                                <div>
                                    7 Days Return
                                </div>
                                <div>
                                    and Exchange
                                </div>
                            </div>
                        </div>
                     <div className='flex flex-col w-[20vw]  sm:w-[10vw] font-semibold justify-center
                      items-center mb-[3vw] sm:mb-[0vw]'>
                            <img src={szi3} alt='' className='mb-[0.5vw] h-[6vw] w-[5vw]
                            object-cover  sm:h-[3vw] sm:w-[3vw]'/>
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
{/* <div className='flex flex-row sm:gap-[0.7vw] gap-[4vw] text-[1.5vw] sm:w-[40vw] 
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
                        </div> */}
                    {/* </div> */}