import { ORDER_REQUEST,ORDER_FAIL,ORDER_SUCCESS } from "../Constants/OrderConstants";
import { addDoc,collection,updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

export const saveOrder = (data,items) => async (dispatch, getState) => {
  try{
   
   
        dispatch({ type: ORDER_REQUEST });
          console.log(data)
    await addDoc(collection(db, "orders"), data).then((res)=>{
       dispatch({ type: ORDER_SUCCESS,payload:data });
       items.map((item)=>{
            updateDoc(doc(db, "products", item.product), {
       stock:"out of stock"
  
    }).then(()=>{
      console.log("Product Updated")
    }).catch((error) => {
    console.log(error.message)
    });
       })
     
    })
    
     
  }catch(err){
     dispatch({
      type: ORDER_FAIL,
      payload: err.message,
    });
  }
}