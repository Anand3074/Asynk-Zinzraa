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
// import { Button, Menu, Dialog } from '@material-tailwind/react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
} from "@material-tailwind/react";
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
  
  console.log(isAuthenticated)
    }
  useEffect(() => {
    console.log(isAuthenticated)
    if(!isAuthenticated)  {
      navigate("/")
    }
    
  }, [isAuthenticated])
  const [activeTab, setActiveTab] = useState('');


const handleActiveTab = (index, category) => {
  setActiveTab(index === activeTab ? activeTab : index);
};

  const tabStyles = (index) => {
    return `cursor-pointer ${
      index === activeTab ? 'shadow-xl dark:shadow-xl text-[#CC911D] text-[1.55vw] font-[600]' : 'hover:text-[#875A33]'
    } flex justify-center items-center`;
  };


    
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const [open , setOpen] = useState(false)

  const handleOpen = () => {

    if (true) {
        setOpen(!open)
      // setReview(!review);
    } else {
    //   navigate("/login");
    }
  };

  const toggleMenu = () => {
    console.log(isMenuOpen , 
      'menu')
    setMenuOpen(!isMenuOpen);
  };
  const Content = () => {

  return (
    <>
   <Dialog 
    //   open={open} 
    open={open}
      handler={handleOpen}
      className='h-[85%] w-[90%] absolute m-[0vw] right-[0vw] bottom-[0vw]'>
        <div >
          <DialogBody>
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
                 </DialogBody>
        </div>
    </Dialog>
      </>
  )}

// const MobileMenuOverlay = ({ isMenuOpen, toggleMenu, content }) => {
//   return (
//     <div
//     style={{ zIndex: 9999 }}
//       className={`overlay ${isMenuOpen ? 'overlay-visible' : ''}`}
//       onClick={toggleMenu}
//     >
//       {content}
//     </div>
//   );
// };
  return (
    <nav className='w-full'>
      <div className='h-[27.5vw] sm:h-[17vw]  w-full md:h-[8.5vw] lg:h-[7vw] align-center 
      bg-teal-dark w-full text-xl '>
      {/* md:py-[24px] */}
        <div id='parent-container' className='flex w-full justify-between
         items-center pt-[0.8vw] md:pt-0 md:pt-0 align-center'>
          <div className='flex md:my-[2.6vw] hidden md:flex lg:flex md:ml-[3vw]'>
            <ul className='flex text-white w-[32.5vw] gap-[1.75vw] font-metro font-[500] text-[1.4vw]'>
              <Link to='/Product3'>
                <li onClick={() => handleActiveTab(0)} className={`hover:text-[#CC911D] 
                ${tabStyles(0)} transition cursor-pointer`}>Products</li>
              </Link>
              {/* <Link to='/Saree'> */}
              <Link to='/Saree'>
                <li onClick={() => handleActiveTab(1)} className={`hover:text-[#CC911D] 
                ${tabStyles(1)} transition cursor-pointer`}>Saree</li>
              </Link>
              {/* <Link to='/Kurtas'> */}
              <Link to='/Kurtas'>
                <li onClick={() => handleActiveTab(2)} className={`hover:text-[#CC911D] 
                ${tabStyles(2)} transition cursor-pointer`}>Kurtas</li>
              </Link>
              <Link to='/Dresses'>
                <li onClick={() => handleActiveTab(3)} className={`hover:text-[#CC911D] 
                ${tabStyles(3)} transition cursor-pointer`}>Dresses</li>
              </Link>
              <Link to='/Dashboard'>
                <li onClick={() => handleActiveTab(4)} className={`hover:text-[#CC911D] 
                ${tabStyles(4)} transition cursor-pointer`}>Orders</li>
              </Link>
              <Link onClick={handleLogout}>
                <li className='hover:text-[#CC911D] text-red transition cursor-pointer'>Logout</li>
              </Link>
            </ul>
          </div>
          <div className='flex ml-7 md:ml-0 justify-self-start  align-center '>
          {/* md:max-lg:justify-center */}
            <Link to='/'>
              <img onClick={() => handleActiveTab('')} src={logo} alt='logo' className='  md:w-[10vw] md:mb-[1vw] w-[25vw] sm:w-[15vw]'/>
            </Link>
          </div>

          <div className='flex gap-[16px] ml-[1vw]'>
          {/* <div className='flex md:flex bg-grey-ray w-[20vw]  h-[28px] md:gap-[1.5vw] */}
            <div  className='flex md:flex bg-white w-[20vw]  h-[28px] md:gap-[1.5vw]
            
             rounded-[2px] py-[1.35vw] items-center hidden'>
              <Link to='/Search'><FaSearch onClick={() => handleActiveTab('')} className='text-[#848484] ml-[1.5vw]' /></Link>
              <input
                placeholder='search your product'
                className='bg-transparent border-none text-[1.1vw] focus:outline-none'
                onChange={(e) => setSearchValue(e.target.value) && handleSearchTermChange(searchValue)}
                onKeyDown={(e) => handleKeyPress(e)}
                value={searchValue}

              />
            </div>
            <div className='flex w-[40vw] md:w-auto gap-[10vw] mr-[3vw] md:gap-[0.5vw] md:space-x-[16px] 
            items-center ml-[0vw] md:ml-[1.5vw] mt-[3vw]  md:mt-[0vw]'>
            <Link to={`${isAuthenticated? '/User' : '/Signup'}`}>
              <FaUser onClick={() => handleActiveTab('')} className='text-white'  />
            </Link>
              <Link to='/Wishlist'>
                <AiFillHeart onClick={() => handleActiveTab('')} className='text-white'  />
              </Link>
            
            <Link to={`${isAuthenticated? '/Cart' : '/Signup'}`}>
              <div>
              {cartItems?.length !== 0 ? (
              <Badge content={ cartItems?.length} className='w-[1.05vw] ' color='amber'>
              
                <HiShoppingBag onClick={() => handleActiveTab('')} className=' text-white'  />
              </Badge>)
              : 
              <HiShoppingBag onClick={() => handleActiveTab('')} className=' text-white'  />
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
  <button className='transition'  onClick={handleOpen}>
    {open ? <FaTimes className='w-[4vw] h-[9vw]' fill='white'/> : <CiMenuFries className='w-[6vw] h-[9vw]' fill='white' />}
  </button>
</div>
  </div>
  <div className='h-[50%]'
>
            {open && (
              <Content
              />
            )}
          </div>

</div>
    </nav>
  );
};

export default Nav;

