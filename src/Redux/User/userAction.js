import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    GOOGLE_REQUEST,
    GOOGLE_SUCCESS,
    GOOGLE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    RESET_PASSWORD_FAIL
}
from "./userConstants"
import {auth,fireDB,googleProvider} from "../../firebase/firebase"

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
  const userRef = collection(fireDB, "user");
 const q = query(userRef, where("email", "==", email));
 const getUserInfo = await getDocs(q);
 if (getUserInfo.docs.length === 0  ){
     createUserWithEmailAndPassword(auth, email, password)
.then( async (userCredential) => {
 // Signed in 
 const user = userCredential.user;



       await setDoc(doc(db, "user",user.uid ), {
         name: name,
         email: email,
         uid:user.uid,
         role:"user",
        //  address:[]
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


export const loginUsingEmail = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch additional user data if needed
    const userData = await getDoc(doc(fireDB, "user", user.uid));

    dispatch({ type: LOGIN_SUCCESS, payload: { uid: user.uid, email: user.email, ...userData.data() } });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
};

export const loadUser = (uid) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const userRef = doc(fireDB, "user", uid);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot.data();

    dispatch({ type: LOAD_USER_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
};

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
     const userRef = collection(fireDB, "user");
 const q = query(userRef, where("email", "==", user.email));
 const getUserInfo = await getDocs(q);
 if (getUserInfo.docs.length === 0){
      await setDoc(doc(fireDB, "user",user.uid ), {
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
   await setDoc(doc(fireDB, "user", uid), {
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