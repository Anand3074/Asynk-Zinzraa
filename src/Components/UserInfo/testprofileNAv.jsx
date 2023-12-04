import { MapPinIcon, PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ProfileNav = ({active,setActive}) => {
    const activeBtn = "text-center rounded-lg mx-1 xl:mx-6 l:text-[1rem] text-[0.7rem] cursor-pointer px-1 lg:px-6 py-2 text-white bg-[#DE562C] "
    const inActiveBtn ="text-center rounded-lg mx-1 xl:mx-6 lg:text-[1rem] text-[0.7rem] cursor-pointer px-1 lg:px-6 py-2"
  return (
    <div className=' border-r-[1px] flex items-center justify-center  bg-gray-100 rounded-xl mt-3 py-4 xl:px-3' >
       <button value="profile" onClick={(e)=>setActive("profile")} 
        className={active==="profile" ? activeBtn :inActiveBtn} >
            <h4 className='font-[500] lg:text-[1.1rem] text-[0.5rem] 
            flex items-center justify-center ' ><UserCircleIcon className='lg:w-[30px] w-[15px] mr-1 lg:mr-2' /> Profile Details</h4>
       </button>
         
       <button value="address" onClick={(e)=>setActive("address")} className={active==="address" ? activeBtn :inActiveBtn} >
            <h4 className='font-[500] lg:text-[1.1rem] text-[0.5rem] flex items-center justify-center' ><MapPinIcon className='lg:w-[30px] w-[15px] mr-1 lg:mr-2' />Saved Address</h4>
       </button>
       <button value="edit" onClick={(e)=>setActive("edit")} className={active==="edit" ? activeBtn :inActiveBtn} >
            <h4 className='font-[500] lg:text-[1.1rem] text-[0.5rem] flex items-center justify-center' ><PencilSquareIcon className='lg:w-[30px] mr-1 w-[15px] lg:mr-2' />Edit Profile</h4>
       </button>
    </div>
  )
}

export default ProfileNav