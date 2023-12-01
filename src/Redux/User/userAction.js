import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS
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