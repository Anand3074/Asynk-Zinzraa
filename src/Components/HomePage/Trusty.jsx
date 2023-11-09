import React from 'react'
import T1 from '../../assets/T1.png'
import T2 from '../../assets/T2.png'
import T3 from '../../assets/T3.png'
import T4 from '../../assets/T4.png'

const Trusty = () => {
  return (
    <div className='flex flex-row gap-[5vw] m-[5vw] justify-center items-center'>
        <div>
            <img src={T1} alt='' className='w-[18vw] h-[9vw]'/>
        </div>
        <div>
            <img src={T2} alt='' className='w-[18vw] h-[9vw]'/>
        </div>
        <div>
            <img src={T3} alt='' className='w-[18vw] h-[9vw]'/>
        </div>
        <div>
            <img src={T4} alt='' className='w-[18vw] h-[9vw]'/>
        </div>
    </div>
  )
}

export default Trusty