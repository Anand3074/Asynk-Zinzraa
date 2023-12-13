import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import SidebarNav from '../Component/Layout/sidebar.jsx'
import EditDetails from '../Component/Orders/EditDetail.jsx'
import { collection, query, where, getDoc,doc,updateDoc } from "firebase/firestore";
import { fireDB } from '../../../firebase/firebase';
// import { newShippingHandler } from '../actions/deliveryActions'
const EditOrder = ({}) => {
      const {id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [order, setOrder] = useState({})
    const [orderStatus, setOrderStatus] = useState()
//     const [shippingProducts, setShippingProducts] = useState([])
//     const { loading,isShipping,shippingDetails } = useSelector(
//     (state) => state.shipping
//   );
//    const { shippingToken } = useSelector(
//     (state) => state.shippingToken
//   );

//      const { error, loading, isAuthenticated,user, } = useSelector(
//     (state) => state.users
//   );
//    const { userProfile } = useSelector(
//     (state) => state.userProfile
//   );
//     console.log(userProfile.uid)



    const updateOrder= async () =>{
        const repairRef = doc(fireDB, "orders", id);

// Set the "capital" field of the city 'DC'
    await updateDoc(repairRef, {
        orderStatus:orderStatus
        });
        navigate(-1)
       

    }
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

   

  useEffect(() => {
    const fetchOrders = async () =>{
     const docRef = doc(fireDB, "orders", id);
const docSnap = await getDoc(docRef);
      
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setOrder(docSnap.data())
  setOrderStatus(docSnap.data().orderStatus)
 
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
    }
    fetchOrders()
    
   

   
  }, [id]) 
  return (
    <div className='grid grid-cols-4 grdi-flow-cols' >
        <SidebarNav />
       <EditDetails id={id} 
        order={order}
        orderStatus={orderStatus} updateOrder={updateOrder} 
        setOrderStatus={setOrderStatus} />
    </div>
  )
}

export default EditOrder