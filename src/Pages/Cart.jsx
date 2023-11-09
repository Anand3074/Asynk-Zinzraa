// import React from 'react'
// import bagicon from '../assets/bagicon.png'
// import CartItem from '../Components/Cart/CartItem.jsx'
// import CartHead from '../Components/Cart/CartHead.jsx'
// import CartSummary from '../Components/Cart/CartSummary.jsx'

// const Cart = () => {
//     let bigPrice='$3782'
//     let CartItems = 0
//   return (
//     <div>
//         <div><CartHead/></div>
//         <div className='flex sm:flex-row flex-col gap-[5vw]'>
//             <div id='detail-tem' className='sm:w-[47vw] mt-[2vw]'>
//                 <CartItem/>
//             </div>
//             <div>
//                 <CartSummary/>
//             </div>
//         </div>
        

//     </div>
//   )
// }

// export default Cart

import React,{useState,useEffect} from 'react'
// import Navbar from '../components/Layout/Navbar'
// import { useSelector,useDispatch } from 'react-redux'
import CartList from '../Components/Cart/CartList'
import Footer from '../Components/Footer'
import CartSummary from '../Components/Cart/CartSummary'
// import { removeItemsFromCart } from '../actions/cartActions'
import CartPrice from '../Components/Cart/CartSummary'
import { useNavigate } from 'react-router-dom'
import CartItem from '../Components/Cart/CartItem'
import CartHead from '../Components/Cart/CartHead'
const Cart = () => {
//     const {cartItems,shippingInfo} = useSelector(
//         (state) => state.cart
//     )
//     const { error, loading, isAuthenticated, user, userProfile } = useSelector(
//     (state) => state.users
//   );
    // const [totalItemPrice, setTotalItemPrice] = useState(0)
    // const [totalRealItemPrice, setTotalRealItemPrice] = useState(0)
    // const navigate = useNavigate()
    //  const dispatch = useDispatch();
    const CartProduct=[]
     
     useEffect(() => {
     if(CartProduct!==[]){
        CartProduct.map((item)=>{
            // setTotalItemPrice((prev)=>(prev+Number(item.price)))
            // setTotalRealItemPrice((prev)=>(prev+Number(item.realPrice)))
        })
        
     }
    //  if(!isAuthenticated){
    //     navigate("/login")
    //  }
     
     }, [])
    // console.log(totalItemPrice,totalRealItemPrice)
  return (
    <div style={{fontStyle:"DM Sans"}} className=''>
        {/* <Navbar /> */}
            <div className='' >
                {/* <CartList setTotalRealItemPrice={setTotalRealItemPrice} totalItemPrice={totalItemPrice} setTotalItemPrice={setTotalItemPrice} cartItems={cartItems} />
                <CartPrice totalRealItemPrice={totalRealItemPrice}
                 totalItemPrice={totalItemPrice} cartItems={cartItems} />*/}
                 <CartHead/>
                 <div className='flex flex-col sm:flex-row justify-center items-cenet'>
                 <CartList/>
                 <CartSummary/>

                 </div>
                 
                 
            </div> 
            <Footer />
    </div>
  )
}

export default Cart