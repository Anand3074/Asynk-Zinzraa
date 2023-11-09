import React from 'react'
import WishProduct from '../Components/Wishlist/WishProducts'
import WishHead from '../Components/Wishlist/WishHead'
import {useState, useEffect} from 'react'
import Footer from '../Components/Footer'

const Wishlist = () => {
//     const {WishProduct,shippingInfo} = useSelector(
//         (state) => state.cart
//     )
//     const { error, loading, isAuthenticated, user, userProfile } = useSelector(
//     (state) => state.users
//   );
//     const [totalItemPrice, setTotalItemPrice] = useState(0)
//     const [totalRealItemPrice, setTotalRealItemPrice] = useState(0)
//     const navigate = useNavigate()
//      const dispatch = useDispatch();

  let WishArray = []   
     useEffect(() => {
     if(WishArray!==[]){
        WishArray.map((item)=>{
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
    <div style={{fontStyle:"DM Sans"}} className=' '>
            <div className='' >
              <WishProduct/>
            </div>
            <Footer />
    </div>
  )
}

export default Wishlist