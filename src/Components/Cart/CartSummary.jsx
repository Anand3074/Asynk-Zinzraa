import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
    // let bigPrice='3874'
    const { error, loading, isAuthenticated,users } = useSelector((state) => state.users);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const clearCart = () => {
      if (cartItems.length !== 0) {
        dispatch(removeCart());
      }
    };
        const calculateTotalPrice = () => {
            return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
          };
          const discountedPrice = (calculateTotalPrice() * 0.73); // Assuming a 27% discount
          const convenienceprice = (discountedPrice * 0.6)
          const OrderPrice = (discountedPrice + convenienceprice).toFixed(2)




  return (
    <div>
        <div className='flex flex-col justify-start items-start ml-[10vw] my-[5vw] md:my-[0vw] '>
            <div id='cart-detail' className='w-[60vw] h-[37vw] md:h-[20vw] md:w-[33vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] p-[1.5vw]'>
                <div className='text-[3.5vw] md:text-[2.5vw] font-semibold'>Order Summary</div>
                <div className='md:text-[1.4vw] text-[2.5vw] mt-[3vw] md:mt-[1.5vw] flex flex-row gap-[17.5vw] md:gap-[6vw] '>
                    <div className="w-[24vw]">
                        Big Total
                    </div>
                    <div className="w-[10vw]">
                        ₹{(calculateTotalPrice().toFixed(2))}
                    </div>
                </div>
                <div className='md:text-[1.4vw] text-[2.5vw] my-[0.5vw] md:my-[0.3vw] flex flex-row gap-[17.5vw] md:gap-[6vw] '>
                    <div className='font-semibold w-[24vw] '>
                        Discount on MRP 
                    </div>
                    <div className="w-[10vw] text-red-500">
                    ₹{(calculateTotalPrice() - discountedPrice).toFixed(2)}
  
                    </div>
                </div>
                <div className='md:text-[1.4vw] text-[2.5vw] my-[0.5vw] md:my-[0.3vw] flex flex-row gap-[17.5vw] md:gap-[6vw] '>
                    <div className="font-semibold w-[24vw]">
                        Sub Total
                    </div>
                    <div className="w-[10vw]">
                        ₹{(discountedPrice).toFixed(2)}
                    </div>
                </div>
                <div className='md:text-[1.4vw] text-[2.5vw] flex flex-row gap-[17.5vw] md:gap-[6vw] '>
                    <div className="w-[24vw]">
                        Convenience Charges
                    </div>
                    <div className="w-[10vw]">
                        ₹{(convenienceprice).toFixed(2)}
                    </div>
                </div>
                <div className='md:text-[1.4vw] text-[2.85vw]  my-[0.5vw] md:my-[0.3vw] md:mr-[0.5vw] flex flex-row gap-[17.5vw] md:gap-[6vw] '>
                    <div className="w-[24vw]">
                        Your Pay
                    </div>
                    <div className="w-[10vw] font-[900] text-green-500 ">
                        ₹{OrderPrice}
                    </div>
                </div>
            </div>
            <div>
                <div className='py-[0.5vw] px-[1.5vw] w-[35vw] sm:h-[3vw] h-[4vw] 
                mt-[1vw] border border-solid border-1px
             border-text-slate-400 rounded-[3vw] text-[2vw] md:text-[1.5vw]'>
                    <input  
                    placeholder='Apply Coupon Code'/>
                </div>
            </div>
            <div className='h-[3vw] w-[27vw]'>
                <Link
                 to={`${isAuthenticated? '/AddDetail' : '/Login'}`} ><button
                 className='bg-teal-dark text-white font-semibold
                         text-[2.75vw]  md:text-[1.2vw] rounded-[2vw] px-[12vw] py-[1vw] mt-[1vw]'>
                Checkout
                </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cart