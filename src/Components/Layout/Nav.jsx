import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { HiShoppingBag } from 'react-icons/hi';
import Hamburger from '../HomePage/hamburger';
import { setSearchTerm } from '../../Redux/Product/filter';
import { useDispatch , useSelector} from 'react-redux';
import { logout } from '../../Redux/User/userAction';
import Loader from '../loader/Loader';
import { removeCart } from '../../Redux/cartActions';
import { clearWishlist } from '../../Redux/Wishlist/wishActions';
import { GoStack } from "react-icons/go";
import {  UserCircleIcon
} from "@heroicons/react/24/solid";
import { IoLogOutOutline } from "react-icons/io5";
import { Button } from '@material-tailwind/react';
import { Badge } from '@material-tailwind/react'

const Nav = () => {
  // for hamburger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated,user , userProfile} = useSelector((state) => state.users);
// console.log(user?.email)

  const cartItems = useSelector((state) => state.cart.cartItems);
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const handleLogout = () => {
    if(isAuthenticated){
      dispatch(logout());
      dispatch(removeCart());
      dispatch(clearWishlist());
      
    }
  
  
    }
  useEffect(() => {
    console.log(isAuthenticated)
    if(!isAuthenticated) {
      navigate("/")
      

    }
    
  }, [isAuthenticated])
    
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(setSearchTerm(searchValue));
      navigate('/Search');
    setSearchValue('')
    // console.log(searchTerm, searchValue)
  }

  };
  const handleSearchTermChange = (value) => {
    dispatch(setSearchTerm(value));
    // console.log(value);
    // let searchValue = ''
  };

  useEffect(() => {
    if (click) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [click]);
  const content =
    <>
    <div className='sm:hidden fixed block  w-[85vw] h-[760px] left-[15vw]
     relative top-[0.5vw]  sm:top-[1.2vw]
         font-bold text-[5vw]  right-0 bg-grey-ray transition'  
              style={{ zIndex: 9999}}>
                
                <div className=' flex flex-col pl-[3vw] justify-start  items-center
                 text-[1rem] font-[600] text-[#489DCC] pt-[4vw]'> 
                 <UserCircleIcon className='w-[25px] mr-4' /> 
                 <span className='mr-3  ' > Hii, {userProfile?.name ? userProfile?.name : "User"}
                 </span>
                 </div>
                 {/* <div className='text-gray-800 flex justify-end '>
                 Logout <IoLogOutOutline/>
                 </div> */}
                  <ul className="flex flex-col justify-center py-[8vw]
             items-center text-center text-xl px-[3vw] font-[400] h-[100vw]">
                <Link to="/Product3" >
                    <li className='flex w-[50vw] pl-[15vw] border-b-[2px] border-b-[#ff8f00] 
                    font-nunito  justify-start my-[3vw] pt-[3vw]  hover:text-black text-[#004d40]' 
                    onClick={closeMenu}>Products</li>
                </Link>
                <Link to="/Saree">
                    <li className='flex w-[50vw] pl-[15vw] border-b-[2px] border-b-[#ff8f00] 
                    font-nunito  justify-start my-[3vw] py-[3vw]  hover:text-black text-[#004d40] ' 
                    onClick={closeMenu}> Saree</li>
                </Link>
                <Link to="/Kurtas">
                    <li className='flex w-[50vw] pl-[15vw] border-b-[2px] border-b-[#ff8f00] 
                    font-nunito  justify-start my-[3vw] py-[3vw]  hover:text-black text-[#004d40]' 
                    onClick={closeMenu}>Kurtas</li>
                </Link>
                <Link to="/Dresses">
                    <li className='flex w-[50vw] pl-[15vw] border-b-[2px] border-b-[#ff8f00] 
                    font-nunito  justify-start my-[3vw] py-[3vw]  hover:text-black text-[#004d40]' 
                    onClick={closeMenu}>Dresses</li>
                </Link>
                <Link to="/User">
                    <li className='flex w-[50vw] pl-[15vw] border-b-[2px] 
                    font-nunito  justify-start my-[3vw] 
                    py-[3vw] border-b-[#ff8f00]  border-teal-dark hover:text-black text-[#004d40]'
                    onClick={closeMenu}>Contact us</li>
                </Link>
            </ul>
            <div className='flex font-nunito pl-[9vw] justify-center pr-[3vw] mt-[3vw] '>
            <Link to='/MyOrders'>
            <div onClick={closeMenu} className='flex flex-row text-xl 
             gap-[1.5vw] sm:text-[2vw] justify-center items-center '>
      
                My Orders 
                <GoStack/>
            </div>  
        </Link>
            </div>
            {/* <Button className='text-gray-800 flex justify-end '>
                 Logout <IoLogOutOutline className='text-white'/>
                 </Button> */}
        </div>
      </>
  return (
    <nav className='w-full'>
      <div className='h-[27.5vw] sm:h-[17vw]  w-full md:h-[8.5vw] lg:h-[7vw] align-center 
      bg-teal-dark w-full text-xl '>
      {/* md:py-[24px] */}
        <div id='parent-container' className='flex w-full justify-between
         items-center pt-[0.8vw] md:pt-0 md:pt-0 align-center'>
          <div className='flex md:my-[2.6vw] hidden md:flex lg:flex md:ml-[3vw]'>
            <ul className='flex text-white gap-[1.45vw] font-metro font-[600] text-[1.05vw]'>
              <Link to='/Product3'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>PRODUCTS</li>
              </Link>
              {/* <Link to='/Saree'> */}
              <Link to='/Saree'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>SAREE</li>
              </Link>
              {/* <Link to='/Kurtas'> */}
              <Link to='/Kurtas'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>KURTAS</li>
              </Link>
              <Link to='/Dresses'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>DRESSES</li>
              </Link>
              <Link to='/Dashboard'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>ORDERS</li>
              </Link>
              <Link onClick={handleLogout}>
                <li className='hover:text-[#CC911D] text-red transition cursor-pointer'>LOGOUT</li>
              </Link>
            </ul>
          </div>
          <div className='flex ml-7 md:ml-0 justify-self-start  align-center '>
          {/* md:max-lg:justify-center */}
            <Link to='/'>
              <img src={logo} alt='logo' className='  md:w-[10vw] md:mb-[1vw] w-[25vw] sm:w-[15vw]'/>
            </Link>
          </div>

          <div className='flex gap-[16px] ml-[1vw]'>
          {/* <div className='flex md:flex bg-grey-ray w-[20vw]  h-[28px] md:gap-[1.5vw] */}
            <div className='flex md:flex bg-white w-[20vw]  h-[28px] md:gap-[1.5vw]
            
             rounded-[2px] py-[1.35vw] items-center hidden'>
              <Link to='/Search'><FaSearch className='text-[#848484] ml-[1.5vw]' /></Link>
              <input
                placeholder='search your product'
                className='bg-transparent border-none text-xs focus:outline-none'
                onChange={(e) => setSearchValue(e.target.value) && handleSearchTermChange(searchValue)}
                onKeyDown={(e) => handleKeyPress(e)}
                value={searchValue}

              />
            </div>
            <div className='flex w-[40vw] md:w-auto gap-[10vw] mr-[3vw] md:gap-[0.5vw] md:space-x-[16px] 
            items-center ml-[0vw] md:ml-[1.5vw] mt-[3vw]  md:mt-[0vw]'>
            <Link to={`${isAuthenticated? '/User' : '/Signup'}`}>
              <FaUser className='text-white'  />
            </Link>
              <Link to='/Wishlist'>
                <AiFillHeart className='text-white'  />
              </Link>
              
            <Link to={`${!isAuthenticated? '/Cart' : '/Signup'}`}>
              <div>
              {cartItems?.length !== 0 ? (
              <Badge content={ cartItems?.length} className='w-[1.05vw] ' color='amber'>
              
                <HiShoppingBag className=' text-white'  />
              </Badge>)
              : 
              <HiShoppingBag className=' text-white'  />
            }
              </div>
            </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center md:hidden mt-[3.5vw] sm:mt-[0.5vw]'>
    <div className='flex md:hidden'>
        <div className='flex bg-white h-[9vw] sm:h-[5vw] w-[75vw] sm:w-[70vw] gap-[3vw] 
        rounded-[20px] items-center mb-[10px] '>
        <Link to='/Search'><FaSearch className='text-[#848484] w-[3.5vw] mx-[5vw] sm:mx-[3vw]' 
        fill='black' /></Link>
        
        <input
            placeholder='search your product'
            className='bg-transparent border-none text-[3vw] sm:text-[2vw]  focus:outline-none mx-[3vw]'
            onChange={(e) => setSearchValue(e.target.value)
            }
            onKeyDown={(e) => handleKeyPress(e)}
            value={searchValue}
          />
        </div>
    </div>
<div className='md:hidden  justify-start items-end pl-[5.5vw]'>
  <button className='transition'  onClick={handleClick}>
    {click ? <FaTimes className='w-[4vw] h-[9vw]' fill='white'/> : <CiMenuFries className='w-[6vw] h-[9vw]' fill='white' />}
  </button>
</div>
  </div>
  <div className='h-[760px]'>
     {click && content}
   {/* closeMenu={closeMenu} />} */}
   {/*  */}
  {/* {click && <Hamburger closeMenu={closeMenu} />} */}
  </div>
</div>
    </nav>
  );
};

export default Nav;

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
// import {FaTimes} from "react-icons/fa"
// import {CiMenuFries} from "react-icons/ci"
// import {FaUser} from "react-icons/fa"
// import {AiFillHeart} from "react-icons/ai"
// import {HiShoppingBag} from "react-icons/hi"
// import { FaSearch } from "react-icons/fa"




// const Nav = () => {    
//     // for hamburger menu
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(true);
    
//     const content =
//     <>
//         <div className='sm:hidden block absolute top-16 z- w-full left-0 right-0 bg-teal-dark transition'>
//             <ul className="text-center text-x1 p-20">
//                 <Link to="/" >
//                     <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Products</li>
//                 </Link>
//                 <Link to="/Category/*">
//                     <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Saree</li>
//                 </Link>
//                 <Link to="/Category/*">
//                     <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Kurtas</li>
//                 </Link>
//                 <Link to="/Category/*">
//                     <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Dresses</li>
//                 </Link>
//                 <Link to="/UserProfile">
//                     <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Contact us</li>
//                 </Link>

//             </ul>


//         </div>
//     </>
//   return (
//     <nav className='touch-none'>
//         <div className='h-auto md:h-[73px] w-full lg:h-auto align-center bg-teal-dark w-full text-base  md:py-[24px] md:px-[54px]'>
//             <div id="parent-container" className='flex w-full justify-between items-center py-4 md:py-0 align-center'>
//                 <div className='flex hidden md:flex lg:flex lg:'>
//                     <ul className='flex text-white space-x-[24px] font-[Poppins] text-[16px]'>
//                         <Link to="/">
//                             <li className='hover:text-[#CC911D] transition cursor-pointer'>Product</li>
//                         </Link>
//                         <Link to="/Saree">
//                             <li className='hover:text-[#CC911D] transition cursor-pointer'>Saree</li>
//                         </Link>
//                         <Link to="/Kurtas">
//                             <li className='hover:text-[#CC911D] transition cursor-pointer'>Kurtas</li>
//                         </Link>
//                         <Link to="/Dresses">
//                             <li className='hover:text-[#CC911D] transition cursor-pointer'>Dresses</li>
//                         </Link>
//                         <Link to="/User">
//                             <li className='hover:text-[#CC911D] transition cursor-pointer'>Contact Us</li>
//                         </Link>
//                     </ul>
//                 </div>    
//                 <div className='flex ml-7 md:ml-0 justify-self-start align-center md:max-lg:justify-center'>
//                     <Link to='/'><img src={logo} alt="logo" /></Link>
//                 </div>
                
//                 <div className='flex gap-[16px] '>
//                     <div className='flex md:flex bg-grey-ray md:w-[211px] h-[28px] md:gap-[22px] rounded-[2px] items-center hidden'>
//                         <FaSearch className='text-[#848484] ml-[17px]' />
//                         <input
//                         placeholder='search your product'
//                         className="bg-transparent border-none text-xs focus:outline-none"
//                         />
//                     </div>
//                     <div className='flex space-x-[30px]  md:space-x-[16px] items-center mr-7  md:mr-0'>
//                     <Link to="/Signup">
//                         <FaUser className="text-white"/>
//                     </Link>
//                     {/* <Link to=""> */}
//                     <Link to="/Wishlist">
//                         <AiFillHeart className="text-white"/>
//                     </Link>
//                     <Link to="/Cart">
//                         <HiShoppingBag className="text-white"/>
//                     </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-row justify-center'>
//             <div className= 'flex sm:hidden justify-center ml-[12.5vw]'>
//                 <div className='flex bg-grey-ray h-[9vw] w-[75vw] gap-[3vw] rounded-[20px] items-center  mb-[10px] '>
//                             <FaSearch className='text-[#848484] mx-[3vw]' />
//                             <input
//                             placeholder='search your product'
//                             className="bg-transparent border-none text-xs focus:outline-none mx-[3vw]"
//                             />
//                 </div>
//                 {/* <div>
//                     {click && content}
//                 </div> */}
//             </div>
//                 <div className='flex justify-center items-start ml-[5vw] pt-[1.2vw] mr-[2.5vw] sm:hidden'>
//                     <Link to='/hamburger'>
//                     <button className='transition'>
//                         {/* { click ? <FaTimes/> : <CiMenuFries/> } */}
//                         <CiMenuFries className='text-white w-[5vw] h-[5vw]'/>
//                     </button>
//                     </Link>
//                 </div>
//             </div>
    
//         </div>
//     </nav>
//   )
// }

// export default Nav
