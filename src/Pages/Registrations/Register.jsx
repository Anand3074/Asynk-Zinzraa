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
import GoogleIcon from "../../assets/search.png"
import {useDispatch,useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
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
import { signUpUsingEmail, signUpUsingGoogle } from '../../Redux/User/userAction.js';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Register = () => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const [active, setActive] = useState("email")
    const [showPassword, setShowPassword] = useState(false)
    const { error, loading, isAuthenticated,users } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch()
      const navigate = useNavigate()
  const handleGoogleRegister = async () =>{
    dispatch(signUpUsingGoogle())
  }
  const userRef = collection(fireDB, "user");
    // console.log(users)

  const handleRegister = async ()=>{
    const userRef = collection(fireDB, "user");
    const emailQuery = query(userRef, where("email", "==", email));
    const getEmailInfo = await getDocs(emailQuery);
    console.log(emailQuery)
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
      if(name===""){
        alert("Enter a name")
      }
    if(email!=="" && getEmailInfo.docs.length!==0 ){
    
      alert("Email Already Present")
      setEmailError(true)
      setEmailErrorMessage("Email is Already Present")
    }
   if(email===""  || emailRegex.test(email)===false){
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
     dispatch(signUpUsingEmail(email,password,name,))
    if(!error){
      setName('')
      setEmail('')
      setPassword('')
    }
    }
    
  }

  // const handleRegister = async () => {
  //   // Reset error state
  //   setEmailError(false);
  //   setEmailErrorMessage('');
  //   setPasswordError(false);
  //   setPasswordErrorMessage('');
  
  //   const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
  
  //   if (name === "") {
  //     setEmailError(true);
  //     setEmailErrorMessage("Please enter your name.");
  //   }
  
  //   if (email === "" || !emailRegex.test(email)) {
  //     setEmailError(true);
  //     setEmailErrorMessage("Please enter a valid email.");
  //   }
  
  //   if (password === "") {
  //     setPasswordError(true);
  //     setPasswordErrorMessage("Please enter a valid password.");
  //   }
  
  //   if (!emailError && !passwordError) {
  //     const userRef = collection(fireDB, "user");
  //     const emailQuery = query(userRef, where("email", "==", email));
  //     const getEmailInfo = await getDocs(emailQuery);
  
  //     if (getEmailInfo.docs.length !== 0) {
  //       setEmailError(true);
  //       setEmailErrorMessage("Email is already registered.");
  //     } else {
  //       dispatch(signUpUsingEmail(email, password, name));
  //     }
  //   }
  //   console.log(emailError)
  //   console.log(isAuthenticated)
    

  // };
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  

  // useEffect(() => {
  //   if(isAuthenticated){
  //     navigate("/")
  //   }
  // }, [isAuthenticated])


  
  return (
    <div className='w-full  h-[100vh] bg-[#e0e7ed] flex items-center justify-center ' >
         <Card shadow={false} className="xl:w-[550px] w-full mx-2 xl:mx-0 py-3 px-6 ">
      <CardHeader
        // variant="gradient"
        color='grey'
        shadow={false}
        floated={false}
        
        className="mb-0 grid h-20 place-items-center"
      >
        {/* <img className='w-[80px]' src={Logo} alt="" /> */}
        <Typography 
        // variant="h5" 
        className="text-[#1287E3]" >
          Create a New Account
        </Typography>
      
      </CardHeader>
      
      <CardBody className="flex flex-col gap-4">
      <div className='flex items-center justify-center' >
       <Button
       onClick={handleGoogleRegister}
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex w-full  items-center justify-center gap-4"
      >
        <img src={GoogleIcon} alt="google" className="h-4 w-4" />
      <p className='text-[0.7rem]' > Continue with Google</p>  
      </Button>
      </div>
        <Input value={name} onChange={(e)=>{setName(e.target.value)}} label="Name" size="lg" />
          < Input type='email' error={emailError ? true : false } value={email}
           onChange={(e)=>setEmail(e.target.value)} label="Email" size="lg"/>
          {/* <div> ({emailError && <p className='text-red-400 text-[0.7rem] flex items-center
            justify-end ' ><InformationCircleIcon className='w-[15px] mr-2' />
             {emailErrorMessage && emailErrorMessage}</p>}) </div> */}
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
        color={password ? "blue" : "blue-gray"}
        disabled={!password}
        onClick={()=>setShowPassword(!showPassword)}
        className="!absolute right-1 top-1 rounded"
      >
        {showPassword ? "hide" : "show"}
      </Button>
      
    </div>

    {passwordError && <div className='text-red-400 text-[0.7rem] flex items-center justify-end ' >
        <InformationCircleIcon className='w-[15px] mr-2' /> 
        {passwordErrorMessage && passwordErrorMessage}</div>}
       
   
      </CardBody>
      <CardFooter className="pt-0">
        <button onClick={handleRegister} 
         className='bg-teal-dark h-[3vw]  text-white font-[300] rounded-[0.5vw] w-full rounded-[1vw'>
          Sign Up
        </button>
        <Typography variant="small" className="mt-6 flex justify-center">
         Already Registered?
         <Link to="/login">
          <Typography 
          // onClick={handleRegister}
            
            // variant="small"
           
            className="ml-1 text-[#1287E3] font-bold"
          >
            Sign In
          </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Register
