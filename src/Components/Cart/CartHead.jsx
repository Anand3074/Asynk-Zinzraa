import React from 'react'
import CartStatus from './CartStatus'
import re1 from '../../assets/re1.png'
import re2 from '../../assets/re2.png'
import { removeCart } from '../../Redux/cartActions'
import { useSelector,useDispatch } from 'react-redux'
import { BsCartXFill } from "react-icons/bs";


const CartHead = ({cartlength}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const clearCart = () => {
      if (cartItems.length !== 0) {
        dispatch(removeCart());
      }
    };
  let CartIcon = {
    img1 : re1,
    img2: re2,
    clr1: 'grey',
    clr2: 'grey'
  }
  //  let CartProducts = 0  

  return (
        <div className='m-[2vw]'>
          <div>
            <CartStatus icon={CartIcon}/>
          </div>
          <div className='flex flex-row justify-between  '>      
            <div className='  sm:mt-[0vw] mt-[vw] 
            flex flex-col items-center sm:items-start justify-center sm:justify-start'>
            <div>
            <div className='sm:text-[3vw] text-[5vw] font-playfair text-[#875A33]'>My Bag</div>
                </div>
            <div className='text-[#875A33] text-[3vw] sm:text-[1.25vw]'>Total {cartlength} item</div>
        </div>
        <div className='flex justify-right items-center text-metro gap-[1vw] text-red-700 
        md:text-[2vw] text-[3vw]'
        onClick={ () => clearCart() }>
          <BsCartXFill className='text-gray-700'/>Clear Cart

        </div>
        </div>

        </div>
  )
}

export default CartHead