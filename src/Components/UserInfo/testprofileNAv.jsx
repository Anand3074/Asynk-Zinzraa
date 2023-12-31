import { MapPinIcon, PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProfileNav = ({active,setActive}) => {
    const activeBtn = "text-center rounded-lg mx-1 xl:mx-6 l:text-[1rem] text-[0.7rem] cursor-pointer px-1 lg:px-6 py-2 text-white bg-teal-dark "
    const inActiveBtn ="text-center rounded-lg mx-1 xl:mx-6 lg:text-[1rem] text-[0.7rem] cursor-pointer px-1 lg:px-6 py-2"
  return (
    <div className=' border-r-[1px] flex items-center md:justify-center space-between  gap-[7vw] md:gap-[1vw]
      bg-gray-100 rounded-xl mt-3 py-4 xl:px-1' >
       <button value="profile" onClick={(e)=>setActive("profile")} 
        className={active==="profile" ? activeBtn :inActiveBtn} >
            <h4 className='text-white-200 font-[600] lg:text-[1.5rem] text-[0.65rem] 
            flex items-center justify-center ' >
               <UserCircleIcon className='lg:w-[30px] w-[15px] mr-1
                lg:mr-2' /> Profile Details</h4>
       </button>
         
       <button value="address" onClick={(e)=>setActive("address")} className={active==="address" ? activeBtn :inActiveBtn} >
            <h4 className='text-white-200 font-[600] lg:text-[1.5rem] text-[0.65rem] flex items-center justify-center' >
               <MapPinIcon className='lg:w-[30px] w-[15px] mr-1 lg:mr-2' />Saved Address</h4>
       </button>
       <button value="orders" onClick={(e)=>setActive("orders")} className={active==="orders" 
       ? activeBtn :inActiveBtn} >
            <h4 className='text-white-200 font-[600] lg:text-[1.5rem] text-[0.65rem] flex items-center justify-center' >
               {/* <PencilSquareIcon className='lg:w-[30px] mr-1 w-[15px] lg:mr-2' /> */}
               Orders</h4>
       </button>
    </div>
  )
}

export default ProfileNav