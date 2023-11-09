import {
    LOGIN_REQUEST,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    GOOGLE_REQUEST,
    GOOGLE_SUCCESS,
    GOOGLE_FAIL,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS
}
from "../Constants/UserConstants"
import {auth,db,googleProvider} from "../firebase.config"

import {
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  onSnapshot
} from "firebase/firestore";
import {createUserWithEmailAndPassword, sendEmailVerification,signInWithEmailAndPassword,signOut,signInWithPopup} from "firebase/auth"
 

export const signUpUsingEmail = (email,password,name,phone) => async (dispatch) =>{
     try{
     dispatch({ type: REGISTER_USER_REQUEST });
     const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", email));
    const getUserInfo = await getDocs(q);
    const userMobileRef = collection(db, "user");
    const qMobile = query(userMobileRef, where("phone", "==", phone));
    const getUserMobileInfo = await getDocs(qMobile)
    if (getUserInfo.docs.length === 0 && getUserMobileInfo.docs.length === 0 ){
        createUserWithEmailAndPassword(auth, email, password)
  .then( async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
   
  
          await setDoc(doc(db, "user",user.uid ), {
            name: name,
            email: email,
            phone: phone,
            uid:user.uid,
            role:"user",
            address:[]
          });   
          const data = {
            uid:user.uid,
          }

    dispatch({ type: REGISTER_USER_SUCCESS, payload: user.uid });
    // ...
  })

  
    }
      else{
        console.log("user exists")
  }
     } catch(err){
         dispatch({
      type: REGISTER_USER_FAIL,
      payload: err,
    });
     }
}

export const loginUsingPhone = (phone,otp,userUid) => async (dispatch) => {
  try{
     dispatch({ type: LOGIN_REQUEST });
     console.log(otp)
      window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res.user);
        //  const token = await Object.entries(res.user).b
        
        dispatch({ type: LOGIN_SUCCESS, payload:userUid});
      })
      .catch((err) => {
        console.log(err);
          dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
      });
  }
  catch(err){
       dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
}


export const loadUser = (uid) => async (dispatch) =>{
  try{
    dispatch({ type: LOAD_USER_REQUEST });
    const userRef = doc(db, "user", uid);
    // const userSnap = await getDoc(userRef);
   
const userData = await onSnapshot(doc(db, "user", uid), (doc) => {
    console.log("Current data: ", doc.data());
    dispatch({ type: LOAD_USER_SUCCESS, payload: doc.data()  });
});
console.log(userData)




  } catch(error){
     dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
}

export const loginUsingEmail = (email,password) => async (dispatch) => {
    try{
     dispatch({ type: LOGIN_REQUEST });
     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({ type:LOGIN_SUCCESS, payload: user.uid });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    catch (err){
         dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
    }
}


export const logout = () => async (dispatch) => {
    try {
    signOut(auth).then(() => {
      console.log("user logged out")
}).catch((error) => {
    console.log(error.message)
});

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
   
  }
}

export const signUpUsingGoogle = () => async (dispatch) => {
     try{
     dispatch({ type: GOOGLE_REQUEST });
     signInWithPopup(auth, googleProvider)
     .then(async (result) => {
        const user = result.user;
    console.log(user)
        const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", user.email));
    const getUserInfo = await getDocs(q);
    if (getUserInfo.docs.length === 0){
         await setDoc(doc(db, "user",user.uid ), {
            name: user.displayName,
            email: user.email,
            phone: '',
            uid:user.uid,
            role:"user",
            address:[]
          });   
    }
    
     dispatch({ type: GOOGLE_SUCCESS, payload: user.uid });
  }).catch((error) => {
    // Handle Errors here.
    console.log(error.message)
    // ...
  });
     } catch (error){
        dispatch({ type: GOOGLE_FAIL, payload: error.message });
     }
}
export const updateProfile = (uid,name,email,phone,role) => async (dispatch) => {
   try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    await setDoc(doc(db, "user", uid), {
      name: name,
      email:email,
  
       uid:uid,
       phone:phone,
       role:role
    }).then(()=>{
      console.log("User Updated")
    }).catch((error) => {
    console.log(error.message)
});
   
    dispatch({ type: UPDATE_PROFILE_SUCCESS  });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });
   
  }
};


