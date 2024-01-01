import React from 'react'
import Userjpg from '../Components/UserInfo/userphoto'
import { useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import Footer from '../components/Footer'
import ProfileDetails from '../Components/UserInfo/ProfileDeetails.jsx'
// import History from '../Components/UserInfo/History'
// import Payments from '../Components/UserInfo/Payments'
import { database } from "../firebase/firebase.jsx";
import { loadUser, updateProfile } from '../Redux/User/userAction.js'
import ProfileNav from '../Components/UserInfo/testprofileNAv.jsx'
import SavedAddress from '../Components/UserInfo/SavedAddress.jsx'
import OrderDetails from '../Components/Orders/OrderDetails.jsx'
import { updateEmail } from 'firebase/auth'
import {
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  onSnapshot,deleteDoc, 
} from "firebase/firestore";
// import EditProfile from '../components/profile/EditProfile'
import { ToastContainer, toast } from 'react-toastify';
import { auth, fireDB, googleProvider } from '../firebase/firebase.jsx'

import { ref, set, push, onValue,remove } from "firebase/database";
// import EditProfile from '../Components/UserInfo/EditProfile.jsx'
import MyOrders from '../Pages/MyOrders.jsx'
import Footer from '../Components/Layout/Footer.jsx'
const User = () => {
    const { error, loading, isAuthenticated,user,userProfile } = useSelector(
    (state) => state.users
  );
    const dispatch = useDispatch();

  const [name, setName] = useState(userProfile?.name ? userProfile.name : "")
  const [email, setEmail] = useState(userProfile?.email ? userProfile?.email : "")
  const [emailChange, setEmailChange] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [phone, setPhone] = useState(userProfile?.phone ? userProfile.phone : "")
  const [phoneError, setPhoneError] = useState(false)
  const [phoneChange, setPhoneChange] = useState(false)
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("")
 const [addresses, setAddresses] = useState(userProfile?.addresses ? userProfile?.addresses : [])     
  // const [addAddress, setAddAddress] = useState(false);
  const [briefAddress, setBriefAddress] = useState("");
  // const [pinCodeError, setPinCodeError] = useState(false)
  const [pinCode, setPinCode] = useState("");
  const [alternateNumber, setAlternateNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("")
  const [addressType, setAddressType] = useState("")
  const [isDefault, setIsDefault] = useState("")
  const [addressPersonName, setAddressPersonName] = useState("")
  let [isOpen, setIsOpen] = useState(false);
  const [addressAdded, setAddressAdded] = useState(false)
  const [addressRemoved, setAddressRemoved] = useState(false)
  // const [role, setRole] = useState(userProfile?.role ? userProfile.role : '')
  const [orderList, setOrderList] = useState([])
  const updateProfileInfo = async  () => {
    const userRef = collection(fireDB, "user");
    const emailQuery = query(userRef, where("email", "==", email));
    const getEmailInfo = await getDocs(emailQuery);
     var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
    if(email!=="" && emailChange && getEmailInfo.docs.length!==0 ){
      alert("Email Already Present")
      setEmailError(true)
      setEmailErrorMessage("Email Already Present")
    }
    if(email=== ""  || emailRegex.test(email)===false){
       alert("Enter Valid Email")
      setEmailError(true)
      setEmailErrorMessage("Enter a Valid Email")
    }
    if(phone!=="" && phoneChange && getMobileInfo.docs.length!==0 ){
       alert("Phone Number Already Present")
      setPhoneError(true)
      setPhoneErrorMessage("Phone Number is Already Present")
    }
      if(phone!==""  && phoneRegex.test(phone)!==true){
      alert("Enter Valid Phone Number")
      setPhoneError(true)
      setPhoneErrorMessage("Enter a Valid Phone Number")
    }
    else{
       updateEmail(auth.currentUser, email).then(() => {
        dispatch(updateProfile(user,name,email,phone,role))
         toast("Profile Saved Successfully")
    dispatch(loadUser(user))
    }).catch((error) => {
      alert(error.message, "Please Login Again To Change the Information")
     setEmail(userProfile?.email ? userProfile?.email : "")
    });
    
    }
   
   
  }
  console.log(briefAddress)
  const updateAddressInfo = async ()=>{
    try {
    console.log('add')
      if(userProfile){
        const userCollection = collection( fireDB, "addresses" );
        const newDocRef = await addDoc(userCollection,{
     userId:user,
     briefAddress:briefAddress,
     addressPersonName:addressPersonName,
     alternateNumber:alternateNumber,
     city:city,
     state:state,
     pincode:pinCode,
     default:isDefault,
     addressType:addressType
    });
    setAddresses((prevAddresses) => [
      ...prevAddresses,
      {
        id: newDocRef.id, // Use the new document ID as the address ID
        userId: user,
        briefAddress: briefAddress,
        addressPersonName: addressPersonName,
        alternateNumber: alternateNumber,
        city: city,
        state: state,
        pincode: pinCode,
        default: isDefault,
        addressType: addressType,
      },
    ]);
   
       setBriefAddress("")
    setAlternateNumber("")
    setAddressPersonName("")
    setCity("")
    setState("")
    setPinCode("")
    console.log(addresses)
    setAddressAdded(true)
    console.log(addresses)
    setIsOpen(false)
    }
  } catch (error) {
      console.error("Error updating address info:", error.message);
    }
    }
     

  
    const fetchOrders = async () =>{
     const q = query(collection(fireDB, "orders"), where("userId", "==", user));
       console.log("newOrder")
 
   
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
     setOrderList((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
  
    });
    }

    // const fetchAddresses = () =>{
    //   const reviewCountRef = ref(fireDB, 'addresses/' + user);

    // onValue(reviewCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   if (data) {
    //     const newProducts = Object.keys(data).map(key => ({
    //       id: key,
    //       ...data[key]
    //     }));

    //   setAddresses(newProducts)
    //   }
   


    // },);
    // }
    // const removeAddresss = (id) =>{
      const removeAddress = async (id) => {
        try {
          const addressDocRef = doc(fireDB, "addresses", user, id);
          await deleteDoc(addressDocRef);
          toast("Address Removed Successfully");
          setAddressRemoved(true);
        } catch (error) {
          console.error("Error removing address:", error.message);
        }
      };
      
      // ...
      
      const removeAddresss = () => {
        removeAddress(id);
      };
      
    
  useEffect(() => {
     dispatch(loadUser(user))
     setAddressAdded(false)
     fetchOrders()
    //  fetchAddresses()
  }, [user,addressRemoved])
  console.log(orderList)

  const [active, setActive] = useState("profile")
  return (
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#e9f3f9] ' >
        {/* <ToastContainer /> */}
        {/* <div>
        <Userjpg/>
        </div> */}
        <div className='md:px-[5vw] px-3 md:py-[2vw]' >
            <div className='bg-white px-2 xl:px-12 py-[2vw] rounded-[20px]' >
                <ProfileNav active={active} setActive={setActive} />
                    {
                        active==="profile" && <ProfileDetails userProfile={userProfile} />}
                     {
                        active==="address" && <SavedAddress
                        addressType={addressType} 
                         setAddressType={setAddressType} setIsDefault={setIsDefault}
                          isDefault={isDefault} addressAdded={addressAdded} 
                          setAddressAdded={setAddressAdded
                          } addressPersonName={addressPersonName} 
                          setAddressPersonName={setAddressPersonName}
                           state={state} setState={setState} briefAddress={briefAddress} 
                          setBriefAddress={setBriefAddress} city={city} setCity={setCity}
                          pinCode={pinCode} setPinCode={setPinCode} 
                          alternateNumber={alternateNumber} setAddresses={setAddresses} 
                          setAlternateNumber={setAlternateNumber}
                         updateAddressInfo={updateAddressInfo} 
                         updateProfileInfo={updateProfileInfo} 
                           isOpen={isOpen} setIsOpen={setIsOpen} 
                          name={name} setName={setName} email={email}
                         setEmail={setEmail} phone={phone} setPhone={setPhone} 
                         addresses={addresses}  />
                    }
                    {
                        active==="orders" && <MyOrders/>
                        // <EditProfile phoneChange={phoneChange} 
                        // setPhoneChange={setPhoneChange} emailChange={emailChange} 
                        // setEmailChange={setEmailChange} phoneError={phoneError} 
                        // phoneErrorMessage={phoneErrorMessage} addressAdded={addressAdded}
                        //  emailError={emailError} emailErrorMessage={emailErrorMessage} 
                        //  setAddressAdded={setAddressAdded} addressPersonName={addressPersonName} 
                        //  setAddressPersonName={setAddressPersonName} state={state} setState={setState}
                        //   briefAddress={briefAddress} setBriefAddress={setBriefAddress} city={city} 
                        //   setCity={setCity} pinCode={pinCode} setPinCode={setPinCode} 
                        //   alternateNumber={alternateNumber} 
                        //   setAddresses={setAddresses} setAlternateNumber={setAlternateNumber} 
                        //   updateAddressInfo={updateAddressInfo} updateProfileInfo={updateProfileInfo}
                        //    isOpen={isOpen} setIsOpen={setIsOpen}  name={name} setName={setName} 
                        //    email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} addresses={addresses}  />
                    }

            </div>
        </div>
          <div><Footer/></div>
    </div>
  )
}

export default User