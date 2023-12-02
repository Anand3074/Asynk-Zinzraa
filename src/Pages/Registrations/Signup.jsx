import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/firebase.jsx';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Google from './Google.jsx';

const  Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate()

  const signup = async () => {
  
    try {
      // Check for empty fields
      if (!name || !email || !password) {
        setErrorMessage("All fields must be filled out");
        return;
      }

      // Check for incomplete fields
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long");
        return;
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
        console.log("Password complexity not met");
      setErrorMessage("Password must include at least one uppercase letter, one lowercase letter, and one number");
      return;
    }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user data to Firestore
      const usersCollection = collection(fireDB, 'users');
      const userDoc = await addDoc(usersCollection, {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: serverTimestamp(),
      });

      console.log("User registered successfully with ID: ", userDoc.id);
      setSuccessMessage('User registered successfully')


      ("Signup successful!");
      navigate('/login')
      // You can redirect the user to another page or perform additional actions here
    } catch (error) {
        console.error("Error during signup:", error.message);
    
        // Handle the case where a user with the same email already exists
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("The email address is already Registered");
        } else {
          setErrorMessage(`Error: ${error.message}`);
        }
    }
}


  return (
    <div className='flex justify-center items-center mt-[15vw]'>
      <div className='bg-teal-dark px-10 py-10 rounded-xl'>
        <div>
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup With Firebase</h1>
        </div>
        <div>
        {errorMessage && (
            <div className='text-red-500 my-[1vw]'>*{errorMessage}</div>
          )}
          {successMessage && (
            <div className='text-green-500 my-[1vw]'>{successMessage}</div>)}
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Name'
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Email'
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Password'
          />
        </div>
        <div className='flex justify-center mb-3'>
          <button
            onClick={signup}
            className='bg-yellow-600 w-full text-white font-bold px-2 py-2 rounded-lg'>
            Signup
          </button>
        </div>
        <div>
        <div className='w-full px-[2vw] flex justify-center items-center'><Google/></div>

              {/* <div><GooglePRofile/></div>  <button className='w-full bg-white rounded-[0.3vw]' onClick={() => login()}>Sign in with Google 🚀 </button> */}
        </div>

        <div>
          <h2 className='text-white'>
            Already Registered? <Link className='ml-[1vw] text-red-500 font-bold' to={'/login'}>Login</Link>
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Signup;

// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, fireDB } from '../../firebase/firebase.jsx';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';




// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//         <div className=' flex justify-center items-center h-screen'>
            
//             <div className=' bg-teal-dark px-10 py-10 rounded-xl '>
//                 <div className="">
//                     <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
//                 </div>
//                 <div>
//                     <input type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         name='name'
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Name'
//                     />
//                 </div>

//                 <div>
//                     <input type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         name='email'
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Email'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Password'
//                     />
//                 </div>
//                 <div className=' flex justify-center mb-3'>
//                     <button
//                         onClick={signup}
//                         className=' bg-yellow-600 w-full text-white font-bold  px-2 py-2 rounded-lg'>
//                         Signup
//                     </button>
//                 </div>
//                 <div>
//                     <h2 className='text-white'>Already Registered? <Link className=' ml-[1vw] text-red-500 font-bold' to={'/login'}>Login</Link></h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup

// const signup = async () => {

//     if (name === "" || email === "" || password === "") {
//         return toast.error("All fields are required")
//     }

//     try {
//         const users = await createUserWithEmailAndPassword(auth, email, password);

//         // console.log(users)

//         const user = {
//             name: name,
//             uid: users.user.uid,
//             email: users.user.email,
//             time : Timestamp.now()
//         }
//         const userRef = collection(fireDB, "users")
//         await addDoc(userRef, user);
//         toast.success("Signup Succesfully")
//         setName("");
//         setEmail("");
//         setPassword("");


//     } catch (error) {
//         console.log(error)

//     }
// }