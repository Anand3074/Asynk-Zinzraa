// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZWRfD2s59tSblLsd0K3vsvjsiJfKpeA0",
  authDomain: "zinzara-1c2e5.firebaseapp.com",
  projectId: "zinzara-1c2e5",
  storageBucket: "zinzara-1c2e5.appspot.com",
  messagingSenderId: "588259852874",
  appId: "1:588259852874:web:191e21184893c00040dcb3",
  measurementId: "G-SM4RRS116B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export{fireDB, auth}