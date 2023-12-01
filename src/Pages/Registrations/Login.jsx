import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import Loader from '../../Components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsingEmail } from '../../Redux/User/userAction';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { loading, user, isAuthenticated } = useSelector((state) => state.users);
//   const users = JSON.parse(localStorage.getItem('user'))


  const login = async () => {

    try {
      if ( !email || !password) {
        setErrorMessage("All fields must be filled out");
        return;
      }
      // Sign in using Firebase authentication
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginUsingEmail(email, password));
      setSuccessMessage('Login Successful');
    //   localStorage.setItem('user', JSON.stringify(result))
      console.log(user?.email)
    // {users?.user?.email === 'anandsaeiou@gmail.com' ? navigate('/Dashboard') : navigate('/')}
    // console.log(user?.email)

      console.log('Login Successful ')
    }     
    catch (error) {
      console.error('Login Error:', error.message);
      // Handle login error, display error message, etc.
    }
        // {user?.email === 'anandsaeiou@gmail.com' ? navigate('/Dashboard') : navigate('/')}

  };
  useEffect(() => {
    if (isAuthenticated && user && user.email === 'anandsaeiou@gmail.com') {
      navigate('/Dashboard');
    } else if (isAuthenticated && user) {
        navigate('/');
    } else {
        
    } {
    }
  }, [user, navigate]);
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>{successMessage && (
            <div className='text-green-500 my-[1vw]'>{successMessage}</div>)}
            {errorMessage && (
            <div className='text-red-500 my-[1vw]'>*{errorMessage}</div>
          )}</div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login


// const context = useContext(myContext)
// const {loading, setLoading} = context;

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const navigate = useNavigate();
// const user = JSON.parse(localStorage.getItem('user'))


// const login = async () => {
//     setLoading(true)
//     try {
//         const result = await signInWithEmailAndPassword(auth,email,password);
//         toast.success("Login successful", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//           })
//         localStorage.setItem('user', JSON.stringify(result))
//         {user?.user?.email === 'anandsaeiou@gmail.com' ? navigate('/Dashboard') : navigate('/')}
        
//         setLoading(false)
        
//     } catch (error) {
//         console.log(error)
//         setLoading(loading)
//     }

// }