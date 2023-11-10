import React from 'react'
import Vec2 from '../../assets/vec2.png'
import C1 from '../../assets/c1.png'
import C2 from '../../assets/c2.png'
import C3 from '../../assets/c3.png'
import Vec3 from '../../assets/vec3.png'
import { Link } from 'react-router-dom'

const Categ1 = () => {
  let Category1='KURTA SET'
  let Category2='SAREES'
  let Category3='DRESSES'
  let Category1img=C1
  let Category2img=C2
  let Category3img=C3




  return (
    <div>
        <div className='flex w-full md:h-40vw justify-center md:px-[54px] mt:[18px] md:gap-[25px] gap-[3px]' style={{ backgroundImage: `url(${Vec2})` }}>
          <div className=''>     
              <img src={Category1img} alt='' className='rounded-t-full md:h-[35vw] md:mt-[38px] mt-[12px]'></img>
          </div>
          <div>     
              <img src={Category2img} alt='' className='rounded-t-full md:h-[35vw] md:mt-[38px] mt-[12px]'></img>
          </div>
          <div>     
              <img src={Category3img} alt='' className='rounded-t-full md:h-[35vw] md:mt-[38px] mt-[12px]'></img>
          </div>
        </div>
        <div className='flex flex-row text-[#C99359] md:h-[96px] h-[32px] items-center md:text-[48px] md:px-[54px] md:gap-[25px] text-[16px] font-playfair w-full gap-[3px]'>
          <div className='w-1/3 flex justify-center'>
              <Link to='/Kurtas'><span className='text-[4vw]' >
                {Category1}
              </span></Link>
          </div>
          <div className='w-1/3 flex justify-center'>
          <Link to='/Sarees'><span className='text-[4vw]' >
                {Category2}
              </span></Link>
          </div>
          <div className='w-1/3 flex justify-center'>
          <Link to='/Dresses'><span className='text-[4vw]' >
                {Category3}
              </span></Link>
          </div>
        </div>
        <div className='w-full md:h-[60px] h-[20px]'>
          <img src={Vec3}/>
        </div>
        

    </div>
      
    
  )
}

export default Categ1