import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { DevicePhoneMobileIcon,ShieldCheckIcon,UserIcon } from '@heroicons/react/24/solid'
const TotalList = ({orders,products,users}) => {
  return (
   <div className='my-6' >
        <div>
        <div className='' >
            <h5 className='font-[600]  text-[1.5rem] text-yellow-600 ' >Zinzraa Dashboard</h5>
            
            </div>
            <div className='flex my-6 items-center justify-start' >
            <div className='w-[35vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw] bg-gradient-to-r from-[#59A4FF] to-[#2967B0] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >Total Orders:</h5>
                        <p className='text-white font-[600] text-[2rem] tracking-wider ' >{orders.length}</p>
                    </div>
                        <div className='col-span-1' ><DevicePhoneMobileIcon className='w-[50px] text-[#2967B0] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
                 <div className='w-[40vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw]
                   bg-gradient-to-r from-[#D99D09] to-[#DE562C] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >
                            Total Products:</h5>
                        <p className='text-white font-[600] text-[2rem] tracking-wider ' >
                            {products?.length}</p>
                    </div>
                        <div className='col-span-1' ><ShieldCheckIcon className='w-[50px] text-[#DE562C] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
                 <div className='w-[35vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw]
                  bg-[#9e9d9d] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >Total Users:</h5>
                        <p className='text-white font-[600] text-[2rem] tracking-wider ' >{users?.length && users?.length}</p>
                    </div>
                        <div className='col-span-1' ><UserIcon className='w-[50px] text-[#9e9d9d] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalList