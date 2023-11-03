import React from 'react'
import Poster from '../Components/Modern.jsx'
import elestar from '../assets/ele1.png'
import Cards from '../Components/Cards.jsx'

const Dresses = () => {
  return (
    <div>
      <div>
          <Poster/>
      </div>
      <div className='mt-[3vw]'>
        <div className='flex justify-center '>
                <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/>
            </div>
            <div className='flex justify-center text-[#875A33] font-lora text-[3vw]' >
                <span>Our Products</span>
            </div>
        </div>
        <div id='navbar' className='flex justify-center mx-[17vw] mt-[3vw] text-[2.2vw]'>
          <nav>
              <ul className='flex flex-row font-poppins text-[#454545] gap-[3vw]'>
                <li className='flex justify-center w-[13vw] h-[7vw]'>WESTERN</li>
                <li className='flex justify-center w-[13vw] h-[7vw]'>DRESSES</li>
                <li className='flex justify-center w-[13vw] h-[7vw]'>SAREE</li>
                <li className='flex justify-center w-[13vw] h-[7vw]'>KURTA</li>
                <li className='flex justify-center w-[13vw] h-[7vw]'>ETHNIC</li>
              </ul>
          </nav>
        </div>
        <div id='products-container-parent'>
          <div id='left' className='flex flex-col w-[16vw] border-r border-r-[1px] border-slate-300 m-[3vw]'>
            <div id='size' className='flex flex-col'>
                <div className='text-[2.57vw] font-bold mb-[1vw]'>
                    Size
                </div>
                <div className='text-[2.21vw]'>
                  <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                    <div>
                        <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                    </div>
                    <div>
                        Small
                    </div>
                  </div>
                  <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Medium
                  </div>
                </div>
                <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Large
                  </div>
                </div>
                <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Xl
                  </div>
                </div>
                <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      2xl
                  </div>
                </div>
              </div>
            </div>
            <div id='Fabric' className='flex mt-[3vw] flex-col'>
                <div className='text-[2.57vw] font-bold mb-[1vw]'>
                    Fabric
                </div>
                <div className='text-[2.21vw]'>
                  <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                    <div>
                        <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                    </div>
                    <div>
                        Silk
                    </div>
                  </div>
                  <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Cotton
                  </div>
                </div>
                <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Linen
                  </div>
                </div>
                <div className='flex flex-row gap-[3vw] mb-[1.5vw]'>
                  <div>
                      <input type='checkbox' className='w-[2vw] h-[2vw]'/>
                  </div>
                  <div>
                      Rayon
                  </div>
                </div>
              </div>
            </div>
            


          </div>
          <div id='right'>
            <div className='flex flex-row'>
                <div>
                  
                  </div>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default Dresses