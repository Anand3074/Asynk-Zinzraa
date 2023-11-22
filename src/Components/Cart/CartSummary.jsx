import React from 'react'
import bagicon from '../../assets/bagicon.png'
import CartItem from './CartItem.jsx'
import {Link} from 'react-router-dom'

const Cart = () => {
    let bigPrice='3874'
  return (
    <div>
        <div className='flex flex-col justify-start items-start ml-[10vw]'>
            <div id='cart-detail' className='w-[37vw] h-[18vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] p-[1.5vw]'>
                <div className='text-[2.5vw]'>Order Summary</div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Big Total
                    </div>
                    <div className="w-[10vw]">
                        ${bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className='font-semibold w-[24vw]'>
                        Discount on MRP 
                    </div>
                    <div className="w-[10vw]">
                        ${bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Sub Total
                    </div>
                    <div className="w-[10vw]">
                        ${bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Convenience Charges
                    </div>
                    <div className="w-[10vw]">
                        ${bigPrice}
                    </div>
                </div>
                <div className='text-[1.4vw] flex flex-row gap-[10vw] '>
                    <div className="w-[24vw]">
                        Your Pay
                    </div>
                    <div className="w-[10vw]">
                        ${bigPrice}
                    </div>
                </div>
            </div>
            <div>
                <div className='py-[0.5vw] px-[1.5vw] w-[32vw] sm:h-[3vw] h-[4vw] 
                mt-[1vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] text-[1.5vw]'>
                    <input  
                    placeholder='Apply Coupon Code'/>
                </div>
            </div>
            <div className='h-[3vw] w-[27vw]'>
                <Link to='/AddDetail'><button className='bg-teal-dark text-white font-semibold
                         text-[1.2vw] rounded-[2vw] px-[12vw] py-[1vw] mt-[1vw]'>
                    Checkout
                </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cart