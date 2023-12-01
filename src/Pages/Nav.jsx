import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { HiShoppingBag } from 'react-icons/hi';
import Hamburger from '../Components/HomePage/hamburger';
import { setSearchTerm } from '../Redux/Product/filter';
import { useDispatch , useSelector} from 'react-redux';
import { logout } from '../Redux/User/userAction';
import Loader from '../Components/loader/Loader';


const Nav = () => {
  // for hamburger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated,user } = useSelector((state) => state.users);
// console.log(user?.email)
  const handleSearchTermChange = (value) => {
    dispatch(setSearchTerm(value));
    console.log(value);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate('/Search');
      dispatch(setSearchTerm('')); // Clear the search term
    }
  };
  return (
    <nav className='touch-none'>
      <div className='h-auto md:h-[73px] w-full lg:h-[73px] align-center bg-teal-dark w-full text-base md:py-[24px] md:px-[54px]'>
        <div id='parent-container' className='flex w-full justify-between items-center pt-[0.8vw] md:py-0 align-center'>
          <div className='flex hidden md:flex lg:flex lg:'>
            <ul className='flex text-white space-x-[24px] font-[Poppins] text-[16px]'>
              <Link to='/'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>Product</li>
              </Link>
              <Link to='/Saree'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>Saree</li>
              </Link>
              <Link to='/Kurtas'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>Kurtas</li>
              </Link>
              <Link to='/Dresses'>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>Dresses</li>
              </Link>
              <Link onClick={handleLogout}>
                <li className='hover:text-[#CC911D] transition cursor-pointer'>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className='flex ml-7 md:ml-0 justify-self-start align-center md:max-lg:justify-center'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          <div className='flex gap-[16px] '>
            <div className='flex md:flex bg-grey-ray md:w-[211px] h-[28px] md:gap-[22px] rounded-[2px] items-center hidden'>
              <Link to='/Search'><FaSearch className='text-[#848484] ml-[17px]' /></Link>
              <input
                placeholder='search your product'
                className='bg-transparent border-none text-xs focus:outline-none'
                onChange={(e) => handleSearchTermChange(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
              />
            </div>
            <div className='flex space-x-[30px] md:space-x-[16px] items-center  mr-7 md:mr-0'>
            <Link to={`${isAuthenticated? '/User' : '/Signup'}`}>
            {/* <Link to='/Signup'> */}
                <FaUser className='text-white'  />
              </Link>
              <Link to='/Wishlist'>
                <AiFillHeart className='text-white'  />
              </Link>
              <Link to='/Cart'>
                <HiShoppingBag className='text-white'  />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center sm:hidden mt-[3.5vw]'>
    <div className='flex  sm:hidden'>
        <div className='flex bg-grey-ray h-[9vw] w-[75vw] gap-[3vw] rounded-[20px] items-center mb-[10px] '>
        <Link to='/Search'><FaSearch className='text-[#848484] mx-[3vw]' /></Link>
        <input
            placeholder='search your product'
            className='bg-transparent border-none text-xs focus:outline-none mx-[3vw]'
            onChange={(e) => handleSearchTermChange(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
    </div>
<div className='sm:hidden  justify-start items-end pl-[5.5vw]'>
  <button className='transition'  onClick={handleClick}>
    {click ? <FaTimes className='w-[4vw] h-[9vw]' fill='white'/> : <CiMenuFries className='w-[6vw] h-[9vw]' fill='white' />}
  </button>
</div>
  </div>
  <div>
    {click && <Hamburger closeMenu={closeMenu} />}
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
