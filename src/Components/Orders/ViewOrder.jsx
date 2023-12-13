import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { collection, query, where, getDoc,doc } from "firebase/firestore";
import {fireDB } from '../../firebase/firebase';
import OrderDetails from './OrderDetails'

const ViewOrder = () => {
      const {id} = useParams()
    const [orderDetails, setOrderDetails] = useState({})
    const { error, loading, isAuthenticated,user, } = useSelector(
    (state) => state.users
  );

     useEffect(() => {
    const fetchOrders = async () =>{
     const docRef = doc(fireDB, "orders", id);
const docSnap = await getDoc(docRef);
      
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setOrderDetails(docSnap.data())
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
    }
    fetchOrders()
  }, [id,user]) 
  console.log(orderDetails)
  return (
    <div style={{ fontFamily: "DM Sans" }} className='min-h-[100vh] bg-[#e9f3f9]' >
        <OrderDetails orderDetails={orderDetails} id={id}  />
    </div>
  )
}

export default ViewOrder