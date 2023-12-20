import React from 'react'

const ProfileDetails = ({userProfile, user, uid}) => {
    // console.log(userProfile?.name)
    // console.log(userProfile?.email)
    // console.log(userProfile?.phone)
  return (
    <div className='w-[50vw] md:w-[70vw] mt-[2.5vw] mb-8 px-[5vw]' >
        <h4 className='text-[1rem] md:text-[2rem] mt-[2vw] font-semibold border-b border-gray-800  '>Profile Details</h4>
        <div className='' >
        <div className='flex flex-row gap-[5vw] items-center my-6 ' >
            <p className='lg:text-[1.25rem]  text-[0.9rem]' >Name:</p>
            <p className='lg:text-[1.35rem]  text-[0.9rem] font-medium text-[#875A33]'>{userProfile?.name}</p>
        </div>
        <div className='flex flex-row gap-[5vw] items-center my-6 ' >
            <p className='lg:text-[1.25rem]  text-[0.9rem]' >Email:</p>
            <p className='lg:text-[1.35rem]  text-[0.9rem] font-medium text-[#875A33]'>{userProfile?.email}</p>
        </div>
         <div className='flex flex-row gap-[5vw] items-center my-6 ' >
            <p className='lg:text-[1.25rem]  text-[0.9rem]' >Phone:</p>
            <p className='lg:text-[1.35rem]  text-[0.9rem] font-medium text-[#875A33]'>{userProfile?.name}</p>
        </div>
         <div className='flex flex-row gap-[5vw] items-center my-6 ' >
            <p className='lg:text-[1.25rem]  text-[0.9rem]' >Alternate Number:</p>
            <p className='lg:text-[1.25rem]  text-[0.9rem]'>{userProfile?.alternateNumber ? userProfile.alternateNumber : "Not Added" }</p>
        </div>
        </div>
    </div>
  )
}

export default ProfileDetails