import React,{useState,useEffect} from 'react'
import SidebarNav from '../Component/Layout/sidebar.jsx'
import { doc, getDocs, onSnapshot,collection,deleteDoc,orderBy,query } from "firebase/firestore";
import {database,fireDB} from '../../../firebase/firebase'
import OrderList from '../Component/Orders/OrderList';
const Orders = () => {
     
  const [orderList, setOrderList] = useState([])
  const deleteProduct = async (id) =>{
    await deleteDoc(doc(fireDB, "orders", id))
    window.location.reload()
  
  }
  
   const fetchOrder =  async () =>{
    
    
    console.log("newOrder")
    const q = query(collection(fireDB, "orders"), orderBy("date", "desc"));
   const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     setOrderList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
   useEffect(() => {
 
 fetchOrder()
  },[] )
  return (
   <div className='grid grid-cols-4 grid-flow-col ' >
        <SidebarNav />
        <OrderList orderList={orderList} deleteProduct={deleteProduct} />
    </div>
  )
}

export default Orders