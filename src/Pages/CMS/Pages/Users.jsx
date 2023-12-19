import React,{useState, useEffect} from 'react'
import AllUsers from '../Component/Users/AllUsers.jsx'
import SidebarNav from '../Component/Layout/sidebar.jsx'
import {useNavigate} from "react-router-dom"
import { doc, getDocs, onSnapshot,collection,deleteDoc } from "firebase/firestore";
import { fireDB } from '../../../firebase/firebase';
const Users = () => {
     const [usersList, setUsersList] = useState([])
  const navigate = useNavigate()
  const deleteUser = async (id) =>{
    
  await deleteDoc(doc(fireDB, "user", id));
  // navigate("/users")
  window.location.reload()

}
  
   const fetchUsers =  async () =>{
    const querySnapshot = await getDocs(collection(fireDB, "user"));
    querySnapshot.forEach((doc) => {
     setUsersList((prev)=>[...prev,doc.data()])
   
  
    });
    }
  useEffect(() => {
  fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(usersList)

  
  return (
    <div className='grid grid-cols-4 grid-flow-col ' >
        <SidebarNav />
        <AllUsers usersList={usersList} deleteUser={deleteUser} />
    </div>
  )
}

export default Users