import React from 'react'
import bagicon from '../assets/bagicon.png'
import CartItem from './CartItem.jsx'

const Cart = () => {
    let bigPrice='$3782'
  return (
    <div className=' m-[2vw]'>
        <div className='flex justify-center items-center'>
            <img src={bagicon} alt='' className='w-[80vw] sm:w-auto sm:h-auto w-[60vw] h-[6vw]' />
        </div>
        <div className=''>
            <div className='sm:text-[3.5vw] text-[5vw]  sm:mt-[0vw] mt-[vw]
               font-playfair text-[#875A33]
               flex flex-col items-center sm:items-start justify-center sm:justify-start'>My Bag</div>
            <div className='text-[#875A33] text-[3vw] sm:text-[1.5vw]'>Total 1 item</div>
        </div>
        <div className='flex sm:flex-row flex-col gap-[5vw]'>
            <div id='detail-tem' className='sm:w-[47vw] mt-[2vw]'>
                <CartItem/>
            </div>
            <div className='flex flex-col justify-center items-start ml-[10vw]'>
            <div id='cart-detail' className='w-[37vw] h-[18vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] p-[1.5vw]'>
                <div className='text-[2.5vw]'>Order Summary</div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Big Total
                    </div>
                    <div className="w-[10vw]">
                        {bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className='font-semibold w-[24vw]'>
                        Discount on MRP 
                    </div>
                    <div className="w-[10vw]">
                        {bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Sub Total
                    </div>
                    <div className="w-[10vw]">
                        {bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Convenience Charges
                    </div>
                    <div className="w-[10vw]">
                        {bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Your Pay
                    </div>
                    <div className="w-[10vw]">
                        {bigPrice}
                    </div>
                </div>
            </div>
            <div>
                <div className='py-[0.5vw] px-[1.5vw] w-[32vw] sm:h-[3vw] h-[4vw] 
                mt-[1vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] text-[1.5vw]'>
                    <input value={''} 
                    placeholder='Apply Coupon Code'/>
                </div>
            </div>
            <div className='h-[3vw] w-[27vw]'>
                <button className='bg-teal-dark text-white font-semibold
                         text-[1.2vw] rounded-[2vw] px-[12vw] py-[1vw] mt-[1vw]'>
                    Checkout
                </button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Cart