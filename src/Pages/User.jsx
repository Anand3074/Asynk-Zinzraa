import React from 'react'
import Userjpg from '../Components/UserInfo/userphoto'
import { useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import Footer from '../components/Footer'
import ProfileDetails from '../Components/UserInfo/ProfileDeetails.jsx'
// import History from '../Components/UserInfo/History'
// import Payments from '../Components/UserInfo/Payments'
import { loadUser, updateProfile } from '../Redux/User/userAction.js'
import ProfileNav from '../Components/UserInfo/testprofileNAv.jsx'

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
  onSnapshot
} from "firebase/firestore";
// import EditProfile from '../components/profile/EditProfile'
import { ToastContainer, toast } from 'react-toastify';
import { auth, fireDB, googleProvider } from '../firebase/firebase.jsx'

import { ref, set, push, onValue,remove } from "firebase/database";
const User = () => {
  const { error, loading, isAuthenticated,user,userProfile, uid } = useSelector(
    (state) => state.users
  );
  // console.log(user)
  // console.log(userProfile)
  // console.log(uid)

    const dispatch = useDispatch();

  const [name, setName] = useState(userProfile?.name ? userProfile.name : "")
  const [email, setEmail] = useState(userProfile?.email ? userProfile?.email : "")
  const [emailChange, setEmailChange] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  let [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("profile")


  const updateProfileInfo = async  () => {
    const userRef = collection(fireDB, "user");
    const emailQuery = query(userRef, where("email", "==", email));
    const getEmailInfo = await getDocs(emailQuery);
    const userMobileRef = collection(fireDB, "user");
    const mobileQuery = query(userRef, where("phone", "==", phone));
    const getMobileInfo = await getDocs(mobileQuery);
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
  useEffect(() => {
    dispatch(loadUser(user))
    // setAddressAdded(false)
    // fetchOrders()
    // fetchAddresses()
 }, [user,
  // addressRemoved
])
//  console.log(orderList)




  return (
    <div style={{ fontFamily: "DM Sans" }} className='bg-[#e9f3f9] ' >
        {/* <ToastContainer /> */}
        <div>
        <Userjpg/>
        </div>
        <div className='xl:px-36 px-3 xl:py-12 mt-3  ' >
            <div className='bg-white px-2 xl:px-12 py-8 rounded-[20px]' >
                <ProfileNav active={active} setActive={setActive} />
                    {
                        active==="profile" && <ProfileDetails userProfile={userProfile} />
                    }
                     {/* {
                        active==="address" && <SavedAddress removeAddresss={removeAddresss} addressType={addressType} setAddressType={setAddressType} setIsDefault={setIsDefault} isDefault={isDefault} addressAdded={addressAdded} setAddressAdded={setAddressAdded} addressPersonName={addressPersonName} setAddressPersonName={setAddressPersonName} state={state} setState={setState} briefAddress={briefAddress} setBriefAddress={setBriefAddress} city={city} setCity={setCity} pinCode={pinCode} setPinCode={setPinCode} alternateNumber={alternateNumber} setAddresses={setAddresses} setAlternateNumber={setAlternateNumber} updateAddressInfo={updateAddressInfo} updateProfileInfo={updateProfileInfo} isOpen={isOpen} setIsOpen={setIsOpen}  name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} addresses={addresses}  />
                    }
                    {
                        active==="edit" && <EditProfile phoneChange={phoneChange} setPhoneChange={setPhoneChange} emailChange={emailChange} setEmailChange={setEmailChange} phoneError={phoneError} phoneErrorMessage={phoneErrorMessage}  addressAdded={addressAdded} emailError={emailError} emailErrorMessage={emailErrorMessage} setAddressAdded={setAddressAdded} addressPersonName={addressPersonName} setAddressPersonName={setAddressPersonName} state={state} setState={setState} briefAddress={briefAddress} setBriefAddress={setBriefAddress} city={city} setCity={setCity} pinCode={pinCode} setPinCode={setPinCode} alternateNumber={alternateNumber} setAddresses={setAddresses} setAlternateNumber={setAlternateNumber} updateAddressInfo={updateAddressInfo} updateProfileInfo={updateProfileInfo} isOpen={isOpen} setIsOpen={setIsOpen}  name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} addresses={addresses}  />
                    } */}
            </div>
        </div>
          {/* <div><Footer/></div> */}
    </div>
  )
}

export default User