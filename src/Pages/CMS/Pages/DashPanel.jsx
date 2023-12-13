import React,{useState,useEffect} from 'react'
import SidebarNav from '../Component/Layout/sidebar.jsx'
import RightContent from "../Component/Home/RightContent.jsx"
import { doc, getDocs, onSnapshot,collection,deleteDoc } from "firebase/firestore";
import {database,fireDB} from "../../../firebase/firebase.jsx"
import {useSelector,useDispatch} from "react-redux"
import { loadUser } from '../../../Redux/User/userAction.js';
import {useNavigate} from "react-router-dom"
const Dashboard = () => {
  const [ordersList, setOrdersList] = useState([])
  const [products, setProducts] = useState([])
  const [users, setusers] = useState([])
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.users
  );

   const dispatch = useDispatch();
   const navigate = useNavigate()
  const fetchOrder =  async () =>{
    
    
    console.log("newOrder")
   const querySnapshot = await getDocs(collection(fireDB, "orders"));
    querySnapshot.forEach((doc) => {
     setOrdersList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
     const fetchProducts =  async () =>{
    const querySnapshot = await getDocs(collection(fireDB, "products"));
    querySnapshot.forEach((doc) => {
     setProducts((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
     const fetchUsers =  async () =>{
    const querySnapshot = await getDocs(collection(fireDB, "user"));
    querySnapshot.forEach((doc) => {
     setusers((prev)=>[...prev,doc.data()])
   
  
    });
    }
   useEffect(() => {
  if(!isAuthenticated){
    navigate("/login")
  }
 fetchOrder()
 fetchProducts()
 fetchUsers()
  },[] )
  console.log(users)
  console.log(ordersList)

  return (
    <div className='grid grid-cols-4 grid-flow-col' >
        <SidebarNav />
        <RightContent ordersList={ordersList} users={users} products={products} />
    </div>
  )
}

export default Dashboard

