import React from 'react'
import CartStatus from './CartStatus'
import re1 from '../../assets/re1.png'
import re2 from '../../assets/re2.png'

const CartHead = () => {
  let CartIcon = {
    img1 : re1,
    img2: re2,
    clr1: 'grey',
    clr2: 'grey'
  }
   let CartProducts = 0

  return (
        <div className='m-[2vw]'>
          <div>
            <CartStatus icon={CartIcon}/>
          </div>
            <div className='sm:text-[3.5vw] text-[5vw]  sm:mt-[0vw] mt-[vw]
               font-playfair text-[#875A33]
               flex flex-col items-center sm:items-start justify-center sm:justify-start'>My Bag</div>
            <div className='text-[#875A33] text-[3vw] sm:text-[1.5vw]'>Total {CartProducts} item</div>
        </div>
  )
}

export default CartHead