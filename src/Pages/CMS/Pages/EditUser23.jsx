import React from 'react'
import SidebarNav from '../Component/Layout/sidebar.jsx'
import EditUserForm from '../Component/Users/EditUser.jsx'
import {useParams,useNavigate} from "react-router-dom"
import { doc, onSnapshot,setDoc } from "firebase/firestore";
import { fireDB } from '../../../firebase/firebase.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
const EditUsers = () => {
    const {id} = useParams()
     const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")


    const editUser = async () =>{
         await setDoc(doc(fireDB, "user", id), {
      name: name,
      email:email,
       uid:id,
       phone:phone,
       role:role
    }).then(()=>{
      console.log("User Updated")
        navigate("/users")
    }).catch((error) => {
    console.log(error.message)
});
    }

    useEffect(() => {
    const userData = onSnapshot(doc(fireDB, "user", id), (doc) => {
    console.log("Current data: ", doc.data());
    setUserInfo(doc.data())
    const data = doc.data()
    setName(data.name && data.name)
    setEmail(data.email && data.email)
    setPhone(data.phone && data.phone)
    setRole(data.role && data.role)
    });
  
    
    }, [id]) 
    console.log(userInfo)
  return (
    <div className='grid grid-cols-4 grid-flow-col' >
        <SidebarNav />
        <EditUserForm editUser={editUser} name={name} setName={setName} setEmail={setEmail} email={email} phone={phone} setPhone={setPhone} role={role} setRole={setRole} userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  )
}

export default EditUsers