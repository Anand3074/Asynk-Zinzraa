import React from 'react'
import {Link} from 'react-router-dom'

const hamburger = ({closeMenu}) => {
    
  return (
         <div className='sm:hidden block w-full right-0 relative top-20vw text-white 
         font-bold font-[playfair] text-[5vw] z-6000   right-0 bg-teal-dark transition'>
            <ul className="text-center text-x1 p-[3vw]">
                <Link to="/" >
                    <li className='my-[3vw] pt-[3vw]  hover:text-white text-[#CC911D]' onClick={closeMenu}>Products</li>
                </Link>
                <Link to="/Saree">
                    <li className='my-[3vw] py-[3vw]  hover:text-white text-[#CC911D] ' onClick={closeMenu}> Saree</li>
                </Link>
                <Link to="/Kurtas">
                    <li className='my-[3vw] py-[3vw]  hover:text-white text-[#CC911D]' onClick={closeMenu}>Kurtas</li>
                </Link>
                <Link to="/Dresses">
                    <li className='my-[3vw] py-[3vw]  hover:text-white text-[#CC911D]' onClick={closeMenu}>Dresses</li>
                </Link>
                <Link to="/Dashboard">
                    <li className='my-[3vw] 
                    py-[3vw] border-b border-teal-dark hover:text-white text-[#CC911D]'onClick={closeMenu}>Contact us</li>
                </Link>
            </ul>
        </div>
  )
}

export default hamburger