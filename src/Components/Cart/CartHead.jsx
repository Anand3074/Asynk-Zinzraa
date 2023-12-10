import React from 'react'
import CartStatus from './CartStatus'
import re1 from '../../assets/re1.png'
import re2 from '../../assets/re2.png'
import { removeCart } from '../../Redux/cartActions'
import { useSelector,useDispatch } from 'react-redux'

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
            <div className='  sm:mt-[0vw] mt-[vw]
               f
               flex flex-col items-center sm:items-start justify-center sm:justify-start'>
                <div>
            <div className='sm:text-[3.5vw] text-[5vw] ont-playfair text-[#875A33]'>My Bag</div>
                  <div onClick={ () => clearCart() }>ClearCart</div>
                </div>
            <div className='text-[#875A33] text-[3vw] sm:text-[1.5vw]'>Total {cartlength} item</div>
        </div>
        </div>
  )
}

export default CartHead