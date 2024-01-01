import React,{useState,useEffect,} from 'react'
import { useSelector } from 'react-redux'
import CartList from '../Components/Cart/CartList'
import Footer from '../Components/Layout/Footer.jsx'
import CartSummary from '../Components/Cart/CartSummary'
import CartHead from '../Components/Cart/CartHead'
import Trusty from '../Components/HomePage/Trusty'
import EmptyCart from '../Components/Cart/EmptyCart'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  
  return (
    <div>
      { cartItems.length!==0 ? (
        <div style={{fontStyle:"DM Sans"}} className=''>
        <div className='' >
            <CartHead cartlength={cartItems.length}/>
             <div className='flex flex-col sm:flex-row '>
                <div className='flex justify-center items-start'>
                    <CartList className=''/>
                </div>
                <div className='flex mt-[10vw] sm:mt-[0vw]'>
                <CartSummary className=''/>
                </div>
             </div>
             <div className='mt-[25vw] md:mt-[15vw]'>

             <Trusty />
            <Footer />
            </div>
        </div> 
        </div>

      ):
      (<div>
                <EmptyCart/>
      </div>
      )}
      

    </div>
    
  )
}

export default Cart