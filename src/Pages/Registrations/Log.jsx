import React,{useState,useEffect} from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Logo from "../../assets/logo.png"
import GoogleIcon from "../../assets/search.png"
import { InformationCircleIcon, EyeIcon,EyeSlashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { signUpUsingEmail,loginUsingEmail, signUpUsingGoogle,  } from '../../Redux/User/userAction.js';
import { PhoneIcon,EnvelopeIcon } from '@heroicons/react/24/outline';
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
import { auth, fireDB } from '../../firebase/firebase.jsx';
import { loadUser } from '../../Redux/User/userAction.js';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [active, setActive] = useState("phone")
  const { error, loading, isAuthenticated,user , userProfile } = useSelector(
  (state) => state.users
  );
  const dispatch = useDispatch()
      const navigate = useNavigate()
    //   const handleLogin = ()=>{
    //     if((email!=="" && email.length!==0) || (password!=="" && password.length!==0)){
    //        dispatch(loginUsingEmail(email,password))
    //        navigate("/")
    //     }
    //     else{
    //         alert("Please enter both Email and Password")
    //     }
    // }
        // Validation checks
        const handleRegister = async ()=>{
          const userRef = collection(fireDB, "user");
          const emailQuery = query(userRef, where("email", "==", email));
          const getEmailInfo = await getDocs(emailQuery);
            var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
           
          if(email!=="" && getEmailInfo.docs.length===0 ){
          
            alert("Email Does Not Present")
            setEmailError(true)
            setEmailErrorMessage("Email Does Not Present")
          }
         if(email=== ""  || emailRegex.test(email)===false){
            alert("Enter Valid Email")
            setEmailError(true)
            setEmailErrorMessage("Enter a Valid Email")
          }
           if( emailRegex.test(email)===true){
           setEmailError(false)
          }
          
         
           if(password===""  ){
            alert("Enter Valid Password")
            setPasswordError(true)
            setPasswordErrorMessage("Enter a Valid Password")
          }
          else{
           dispatch(loginUsingEmail(email,password))
          if(!error){
            setEmail('')
            setPassword('')
          }
          }
         
          
        }
        
        
        const handleGoogleLogin = async () =>{
          
          dispatch(signUpUsingGoogle())
        }
      
        // useEffect(() => {
        //   if(isAuthenticated){
        //     navigate(-1)
        //   }
        // }, [isAuthenticated])

        useEffect(() => {
          if (isAuthenticated) {
            dispatch(loadUser(user));
          } 
          },[isAuthenticated]) 
          useEffect(() => {
          console.log(userProfile?.role, isAuthenticated)

          if(isAuthenticated  && userProfile?.role=== "user"     ) {
            navigate("/")
          }
          if(isAuthenticated  && userProfile?.role=== "admin"     ) {
            navigate("/Dashboard")
          }
        }, [userProfile])

  return(
    <div className='flex justify-center items-center'>
        <Card shadow={false} className="lg:w-[500px] py-3 px-6 ">
      <CardHeader
        variant="gradient"
        // color='grey'
        shadow={false}
        floated={false}
        
        className="mb-0 grid h-20 place-items-center"
      >
      {/* <img className='w-[80px]' src={Logo} alt="" /> */}
      {/* <div className='text-red text-xs'>{errorMessage}</div> */}
        <Typography variant="h5" className="text-[#1287E3]" >
         Login to your Account
        </Typography>
      
      </CardHeader>
      
      <CardBody className="flex flex-col gap-4">
      <div className='flex items-center mb-2 flex-col justify-center' >
       <Button
        size="lg"
        variant="outlined"
        onClick={handleGoogleLogin}
        color="blue-gray"
        className="flex w-full  py-[0.6vw]   items-center justify-center gap-6"
      >
        <img src={GoogleIcon} alt="google" className="h-4 w-4" />
      <p className='text-[0.7rem]' > Continue with Google</p>  
      </Button>     
      </div>
          <Input type='email'  value={email} error={emailError ? true : false }  onChange={(e)=>
            {setEmail(e.target.value)}} label="Email" size="lg" />
           {emailError && <div className='text-red-400 text-[0.7rem] flex items-center justify-end ' >
            <InformationCircleIcon className='w-[15px] mr-2' /> 
            {emailErrorMessage && emailErrorMessage}</div>}
         <div className="relative flex w-full ">
      <Input
        
        label="Password"
        value={password} 
        error={passwordError ? true : false }
        onChange={(e)=>{setPassword(e.target.value)}}
        type={showPassword ? "text" : "password"}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={password ? "white" : "gray"}
        disabled={!password}
        onClick={()=>setShowPassword(!showPassword)}
        className="!absolute right-1 top-1 rounded"
      >
        {showPassword ? <EyeSlashIcon className='w-[15px] text-blue-500' /> 
        :<EyeIcon className='w-[15px] text-blue-500' />}
      </Button>
      
    </div>
    {/* {passwordError && <p className='text-red-400 text-[0.7rem] flex items-center justify-end ' ><InformationCircleIcon className='w-[15px] mr-2' /> {passwordErrorMessage && passwordErrorMessage}</p>} */}
      </CardBody>
      <CardFooter className="pt-0  ">
      {/* <Link to="/forgotPassword"> */}
      <div className='mb-4 flex items-cente justify-end ' >
        <button onClick={()=>setActive('forgot')} className='text-red-500 text-[0.8rem] ' >Forgot Password ?</button>
      </div>
      {/* </Link> */}
        <Button onClick={handleRegister}  variant="solid" className='bg-[#1287E3]' fullWidth>
          Login
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
        Do not have a account?
        <Link to="/Signup">
          <Typography
            
            variant="small"
           
            className="ml-1 text-[#1287E3] font-bold"
          >
            Sign Up
          </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}
export default Login
  // const handleRegister = async ()=>{
  //   const userRef = collection(fireDB, "user");
  //   const emailQuery = query(userRef, where("email", "==", email));
  //   const getEmailInfo = await getDocs(emailQuery);
  //     var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
  //     if( emailRegex.test(email)===true){
  //       setEmailError(false)
  //     }
  //   if(email=="" && getEmailInfo.docs.length===0 ){
  //     alert("Email Does Not Present")
  //     setEmailError(true)
  //     setEmailErrorMessage("Email Does Not Present")
  //   }
  //    if(password===""  ){
  //     alert("Enter Valid Password")
  //     setPasswordError(true)
  //     setPasswordErrorMessage("Enter a Valid Password")
  //   }
  //   else{
  //    dispatch(loginUsingEmail(email,password))
  //   if(!error){
  //     setEmail('')
  //     setPassword('')
  //   }
  //   }
   
    
  // }