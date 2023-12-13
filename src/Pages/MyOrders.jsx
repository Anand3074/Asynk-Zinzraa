import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Layout/Navbar'
import OrderList from '../Components/Orders/OrderList.jsx'
import { useSelector,useDispatch } from 'react-redux'
import { ref, onValue, get,remove} from "firebase/database";
import {database,fireDB} from "../firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
// import Footer from '../Components/Footer';
import CancelOrder from "../assets/cancelOrder.png"
import { Link } from 'react-router-dom';
const MyOrders = () => {
    
    const [orders, setOrders] = useState([])
    
   const { error, loading, isAuthenticated,user ,userProfile } = useSelector(
    (state) => state.users
  );

  const fetchOrders = async () =>{
      const q = query(collection(fireDB, "orders"), where("data.userId", "==", user));
       console.log("newOrder")
 
   
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     setOrders((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
  
    });
    }
    useEffect(() => {
          const fetchOrders = async () =>{
      const q = query(collection(fireDB, "orders"), where("userId", "==", user));
       console.log("newOrder")
 
   
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     setOrders((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
  
    });
    }
        fetchOrders()
    }, [user])

  return (
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#e9f3f9] '>
        {/* <Navbar /> */}
       {orders.length !== 0 ?  <OrderList orders={orders} /> : (
        <div className='flex   items-center flex-col justify-center h-[30vh] lg:h-[50vh]' >
        <img className='w-[80px] my-3' src={CancelOrder} alt="" />
          <h4>No Order Present</h4>
         <Link to="/All" > <button className='mt-4 bg-blue-400 px-4 py-2 text-white rounded-[5px] ' >Shop Now</button></Link>
        </div>
       ) }
       {/* <Footer /> */}
    </div>
  )
}

export default MyOrders