import React from 'react'
import CartStatus from '../Cart/CartStatus'
import re3 from '../../assets/re3.png'
import gpy1 from '../../assets/gpy1.png'
import visa1 from '../../assets/visa1.png'
import paypal from '../../assets/paypal1.png'
import mas1 from '../../assets/mas1.png'
import { Link } from 'react-router-dom'



const Payment = () => {
    let CartIcon = {
        img1 : re3,
        img2: re3,
        clr1: 'teal-dark',
        clr2: 'teal-dark'
      }
  return (
    <div className='m-[5vw] sm:m-[2.5vw]'>
        <div>
            <div>
                <CartStatus icon={CartIcon}/>
            </div>
            <div className='text-[5vw] sm:text-[3vw] font-bold mt-[4vw] sm:mt-[0.2vw] 
            text-[#875A33] font-playfair'>Add Detail</div>
            <div className='font-semibold sm:mt-[2vw] mt-[4vw] text-[3vw] sm:text-[2vw]'>
                Choose payment Method
            </div>
            <div className='flex flex-row sm:gap-[3vw] gap-[15vw]  sm:my-[3vw] my-[5vw] '>
                <div>
                    <img src={mas1} alt='' className='sm:w-[5vw] sm:h-[2vw] w-[8vw] h-[4vw]'/>
                </div>
                <div>
                    <img src={gpy1} alt='' className='sm:w-[5vw] sm:h-[2vw] w-[8vw] h-[4vw]'/>
                </div>
                <div>
                    <img src={visa1} alt='' className='sm:w-[7vw] sm:h-[2vw] w-[10vw] h-[4vw]'/>
                </div>
                <div>
                    <img src={paypal} alt='' className='sm:w-[7vw] sm:h-[2vw] w-[10vw] h-[4vw]'/>
                </div>
            </div>
            <div className='mt-[6vw] sm:mt-[3vw]'>
                <div>
                    <div className='text-[2vw] sm:text-[1.2vw] font-bold sm:text-[1.2vw]'>Name on Card</div>
                    <div className=' flex justify-start items-center mt-[0.3vw]
                     bg-grey-400 w-[45vw] sm:h-[4vw] h-[7vw] py-[1vw] sm:py-[0vw]
                    border border-solid border-1px'>
                        <input placeholder='John Doe' className='text-[2vw] p-[1.5vw] sm:h-[3.7vw] sm:text-[1.2vw]
                        w-[45vw]' />
                    </div>
                    <div className='text-[2vw]  mt-[3vw] font-bold sm:text-[1.2vw]'>Card Number</div>
                    <div className=' flex justify-start items-center mt-[0.3vw]
                     bg-grey-400 w-[45vw] h-[7vw] sm:h-[4vw] py-[1vw] sm:py-[0vw]
                    border border-solid border-1px'>
                        <input placeholder='15 digit number' className='text-[2vw] sm:h-[3.7vw] sm:text-[1.2vw]
                         p-[1.5vw] w-[45vw]' />
                    </div>

                    <div className='text-[2vw] font-bold sm:text-[1.2vw] mt-[3vw]' >Email Address</div>
                    <div className=' flex justify-start items-center  bg-grey-400 w-[45vw]
                     h-[7vw] py-[1vw] sm:py-[0vw] sm:h-[3.7vw]
                    border border-solid border-1px mt-[0.3vw]'>
                        <input placeholder='johndoe@gmail.com' className='text-[2vw] 
                        sm:text-[1.2vw] p-[1.5vw] sm:h-[3.5vw] w-[45vw]' />
                    </div>
                    <div className='flex  flex-row'>
                        <div className=' flex justify-start sm:h-[4vw] items-center mt-[3vw] 
                                        bg-grey-400 w-[45vw] h-[7vw] py-[1vw] sm:py-[0vw]
                                        border border-solid border-1px'>
                        <input placeholder='Coupon' className='text-[2vw] sm:h-[3.7vw] sm:text-[1.2vw]
                         p-[1.5vw] w-[45vw]' />
                        </div>
                        <div className='mx-[3vw]  mt-[3vw]'><button className='bg-teal-dark
                         rounded-[1vw] text-[3vw] sm:text-[1.5vw] font-semibold px-[6vw] py-[1vw]
                        text-white'>Apply</button></div>
                    </div>
                    <div className='flex flex-row justify-start items-center'>
                        <input type="checkbox"/>
                        <div className='text-[2.5vw] sm:text-[1.8vw] ml-[1vw] py-[2vw] my-[5vw] sm:my-[2vw]'>
                        By confirming the order, accept the <span className='text-red-600'>
                            terms of the user</span>  agreement</div>
                    </div>
                    <div className='flex flex-row gap-[2vw]'>
                        <div>
                            <Link to='/Order'><button className='bg-teal-dark
                         rounded-[1vw] text-[3vw] sm:text-[1.4vw] font-semibold px-[8vw] py-[1vw]
                        text-white'>Checkout</button></Link>
                        </div>
                        <div>
                            <button className='border border-solid border-2px border-black-900
                         rounded-[1vw] text-[3vw] sm:text-[1.4vw] font-semibold px-[8vw] py-[1vw]
                        '>Cancel</button>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Payment