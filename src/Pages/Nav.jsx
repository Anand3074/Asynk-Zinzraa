import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import {FaUser} from "react-icons/fa"
import {AiFillHeart} from "react-icons/ai"
import {HiShoppingBag} from "react-icons/hi"
import { FaSearch } from "react-icons/fa"


const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
        


    const content =
    <>
        <div className='lg:hidden block absolute top-16 w-full left-0 rigth-0 bg-teal-dark transition'>
            <ul className="text-center text-x1 p-20">
                <Link to="/" >
                    <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Products</li>
                </Link>
                <Link to="/Saree">
                    <li>Saree</li>
                </Link>
                <Link to="/Kurtas">
                    <li>Kurtas</li>
                </Link>
                <Link to="/Dresses">
                    <li>Dresses</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact us</li>
                </Link>

            </ul>
        </div>
    </>
  return (
    <nav>
        <div className="h-10vh bg-teal-dark flex justify-between z-50 text-white lg:py px-20 py-4 flex-1">
            <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10  h-[24]">
                    <ul className="flex  gap-[24px] inline-flex flex-end ml-[54px] mr-[16px] text-[16px]">
                        <Link to="/" >
                            <li>Products</li>
                        </Link>
                        <Link to="/Saree">
                            <li>Saree</li>
                        </Link>
                        <Link to="/Kurtas">
                            <li>Kurtas</li>
                        </Link>
                        <Link to="/Dresses">
                            <li>Dresses</li>
                        </Link>
                        <Link to="/Contact">
                           <li>Contact us</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex items-center flex-shrink-0  flex-1'>
                    <img src={logo} alt='logo' className='w-[88px] h-[38px] ml-[130px] mr-[211px] '/>
                    {/* <span className='text-3x1 font-bold'>ZINZRAA</span> */}
                </div>
                <div>
                <div className="flex bg-grey-ray w-[211px] h-[28px]  items-center inline-flex mr-[16px] ">
                    <FaSearch className="mr-[22px] ml-[17px] "/>
                    <input placeholder="search your product" className="bg-transparent border-none text-xs items-center focus:outline-none w-[122px] h-[18px]">
                    </input>
                </div>
                </div>

                    <div className='flex-1 h-[24px] w-[24px]'>
                        <ul className='flex  gap-[16px]  inline-flex flex-end mr-[54px] ml-[16px]'>
                        <Link to="">
                            <li><FaUser/></li>
                        </Link>
                        <Link to="">
                            <li><AiFillHeart/></li>
                        </Link>
                        <Link to="">
                           <li><HiShoppingBag/></li>
                        </Link>
                    
                        </ul>
                        

                    </div>     
            </div>
            {/* <div>
                {click && content}
            </div>
            <button>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>  */}
        </div>
    </nav>
  )
}

export default Nav