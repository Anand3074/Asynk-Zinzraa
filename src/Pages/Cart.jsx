import React,{useState,useEffect} from 'react'
// import Navbar from '../components/Layout/Navbar'
import CartList from '../Components/Cart/CartList'
import Footer from '../Components/Footer'
import CartSummary from '../Components/Cart/CartSummary'
// import { removeItemsFromCart } from '../actions/cartActions'
import CartHead from '../Components/Cart/CartHead'
import Trusty from '../Components/HomePage/Trusty'
const Cart = () => {
  
  
  return (
    <div style={{fontStyle:"DM Sans"}} className=''>
            <div className='' >
                <CartHead/>
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