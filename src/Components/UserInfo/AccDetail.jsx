import React from 'react'
import {HiPencilSquare} from 'react-icons/hi2'

const AccDetail = ({DataAcc}) => {
  return (
        <div className='mx-[4vw] mt-[2vw] '>
            <div>
                <div className='flex flex-row mt-[1vw] '>
                    <div className='flex flex-col w-[75vw] h-[10vw] '>
                        <div className='text-[2vw] text-slate-500'>{DataAcc.DataName}</div>
                        <div className='text-[2.5vw]'>{DataAcc.data}</div>
                    </div>
                    <div className='flex justify-center items-center gap-[2vw]
                                    border border-solid border-1px border-[#875A33] 
                                    text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
                        <div>
                            <HiPencilSquare/>
                        </div>
                        <div>
                            <button className=''>Change</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
  )
}

export default AccDetail