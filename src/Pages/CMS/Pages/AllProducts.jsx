import React from 'react'
import SidebarNav from '../Component/Layout/sidebar.jsx'
import ProductList from '../Component/Product/ProductList.jsx'
import { useEffect,useState } from 'react';
import { doc, getDocs, onSnapshot,collection,deleteDoc } from "firebase/firestore";
import {fireDB} from '../../../firebase/firebase'
const AllProduct = () => {
    const [productsList, setProductsList] = useState([])
  const deleteProduct = async (id) =>{
     await deleteDoc(doc(fireDB, "products", id)).
    then(()=>{
      console.log("Product Removed Succesfully")
    }).catch((err)=>{
      console.log(err.message)
    })
  
  }
  const fetchProducts =  async () =>{
    const querySnapshot = await getDocs(collection(fireDB, "products"));
    querySnapshot.forEach((doc) => {
     setProductsList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
   useEffect(() => {
   
//   const repairCountRef = ref(database, 'products/' );
//   if(repairCountRef){
//    onValue(repairCountRef, (snapshot) => {
//   const data = snapshot.val();
//   if(data){
//   const newProducts = Object.keys(data).map(key=>({
//     id:key,
//     ...data[key]
//   }));
//    setProductsList(newProducts)
// }
 
// },);
//   }
fetchProducts()
  },[] )
  console.log(productsList)
  return (
   <div className='grid grid-cols-4 grid-flow-col ' >
        <SidebarNav />
        <ProductList productsList={productsList} />
    </div>
  )
}

export default AllProduct