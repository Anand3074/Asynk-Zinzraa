import React from 'react'

const ProfileDetails = ({userProfile, user, uid}) => {
    console.log(userProfile)
    console.log(user)
    console.log(uid)

  return (
    <div className='xl:px-72 px-4 py-6' >
        <h4 className='text-[1.6rem]' >Profile Details</h4>
        <div className='border-[1px] w-[120px] mt-3 mb-8 boder-gray-300' ></div>
        <div className='flex items-center my-6 justify-between' >
            <p className='lg:text-[1.2rem] text-[0.9rem]' >Name</p>
            <p className='lg:text-[1.2rem] text-[0.9rem]'>{userProfile?.name}</p>
        </div>
        <div className='flex items-center my-6 justify-between' >
            <p className='lg:text-[1.2rem] text-[0.9rem]' >Email</p>
            <p className='lg:text-[1.2rem] text-[0.9rem]'>{userProfile?.email}</p>
        </div>
         <div className='flex items-center my-6 justify-between' >
            <p className='lg:text-[1.2rem] text-[0.9rem]' >Phone</p>
            <p className='lg:text-[1.2rem] text-[0.9rem]'>{userProfile?.phone}</p>
        </div>
         <div className='flex items-center my-6 justify-between' >
            <p className='lg:text-[1.2rem] text-[0.9rem]' >Alternate Number</p>
            <p className='lg:text-[1.2rem] text-[0.9rem]'>{userProfile?.alternateNumber ? userProfile.alternateNumber : "Not Added" }</p>
        </div>
    </div>
  )
}

export default ProfileDetails