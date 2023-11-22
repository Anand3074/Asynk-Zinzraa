import React,{useState,useEffect,} from 'react'
import { useSelector } from 'react-redux'
import CartList from '../Components/Cart/CartList'
import Footer from '../Components/Footer'
import CartSummary from '../Components/Cart/CartSummary'
import CartHead from '../Components/Cart/CartHead'
import Trusty from '../Components/HomePage/Trusty'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  
  return (
    <div style={{fontStyle:"DM Sans"}} className=''>
            <div className='' >
                <CartHead cartlength={cartItems.length}/>
                 <div className='flex flex-col sm:flex-row '>
                    <div className='flex justify-center items-center'>
                        <CartList className=''/>
                    </div>
                    <div className='flex mt-[10vw] sm:mt-[0vw]'>
                    <CartSummary className=''/>
                    </div>
                 </div>
                 <Trusty/>
                <Footer />
            </div> 
    </div>
  )
}

export default Cart