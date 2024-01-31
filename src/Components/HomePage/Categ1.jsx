import React from 'react'
import Vec2 from '../../assets/vec2.png'
import cat1 from '../../assets/cat1.png'
import cat2 from '../../assets/cat2.png'
import cat3 from '../../assets/cat3.png'
import Vec3 from '../../assets/vec3.png'
import { Link } from 'react-router-dom'
// import 'aos/dist/aos.css'; // Import AOS styles
// import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react'

const Categ1 = () => {
  let Category1='KURTA SET'
  let Category2='SAREES'
  let Category3='DRESSES'
  let Category1img=cat1
  let Category2img=cat2
  let Category3img=cat3

  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);




  return (
    <div className=''>
        <div className='flex w-full gap-[2vw] md:h-[40vw] justify-center' style={{
            backgroundImage: `url(${Vec2})`,
            backgroundSize: 'cover',  // You can use 'contain', 'auto', '100%', etc.
            backgroundRepeat: 'no-repeat',  // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
            backgroundPosition: 'center center',  // 'left top', 'right bottom', '50% 50%', etc.
            width: '100%',  // Set width as needed
          }}>
        <div className='' data-aos='zoom-out' >     
        <Link to='/Kurtas'><img src={Category1img} alt=''
         className='rounded-t-full object-cover object-top  border border-[0.4px] border-solid border-[#875A33] 
         p-[0.5vw] md:max-h-[37vw] md:mt-[2.5vw] mt-[2.5vw]'></img></Link>
          </div>
        <div data-aos='zoom-out'>     
        <Link to='/Saree'><img src={Category2img} alt='' 
        className='rounded-t-full object-cover object-top  border border-[0.4px] border-solid border-[#875A33] 
        p-[0.5vw] md:max-h-[37vw] md:mt-[2.5vw] mt-[2.5vw]'></img></Link>
          </div>
          <div data-aos='zoom-out'>     
          <Link to='/Dresses'> <img src={Category3img} alt='' 
          className='rounded-t-full object-cover object-top  border border-[0.4px] border-solid border-[#875A33] 
          p-[0.5vw] md:max-h-[37vw] md:mt-[2.5vw] mt-[2.5vw]'></img></Link>
          </div>
        </div>
        
        <div className='flex flex-row text-[#875A33] md:h-[3vw] h-[7vw] items-center 
        md:text-[4vw]  md:gap-[10vw] md:px-[9vw] text-[16px] font-playfair font-[700] w-full gap-[3vw]'>
          <div className='md:w-[20vw] w-[30vw] flex justify-center'>
              <Link to='/Kurtas'><span className='text-[4vw] sm:text-[2.5vw]' >
                KURTAS
              </span></Link>
          </div>
          <div className='md:w-[20vw] w-[30vw] flex justify-center'>
          <Link to='/Saree'><span className='text-[4vw] sm:text-[2.5vw]' >
                SAREES   
           </span></Link>
          </div>
          <div className='md:w-[20vw] w-[30vw] flex justify-center'>
          <Link to='/Dresses'><span className='text-[4vw] sm:text-[2.5vw]' >
                DRESSES
              </span></Link>
          </div>
        </div>
        <div className='w-full my-[2vw]  md:h-[3.5vw] h-[4vw]'>
          <img src={Vec3} className='w-full opactiy-100 md:h-[3.75vw] h-[4.25vw] object-cover object-center'/>
        </div>
        

    </div>
      
    
  )
}

export default Categ1