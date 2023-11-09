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
import Trusty from '../Components/HomePage/Trusty'
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
            <div className='' >
                {/* <CartList setTotalRealItemPrice={setTotalRealItemPrice} 
                totalItemPrice={totalItemPrice} setTotalItemPrice={setTotalItemPrice} cartItems={cartItems} />
                <CartPrice totalRealItemPrice={totalRealItemPrice}
                 totalItemPrice={totalItemPrice} cartItems={cartItems} />*/}
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