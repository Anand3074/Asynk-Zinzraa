import {useState} from 'react'
import Poster from '../../Components/HomePage/Modern.jsx'
import elestar from '../../assets/ele1.png'
import Filtersss from '../../Components/ProductDisplay/Filtersss.jsx'
import Western from './Western'
import Saree from './Saree'
import Kurtas from './Kurtas'
import Dresses from './Dresses'
import Ethnic from './Ethnic'

// import ProductList from '../Components/ProductDisplay/ProductList.jsx'

const Category = ({}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  const tabStyles = (index) => {
    return `cursor-pointer ${
      index === activeTab ? 'underline text-[#875A33]' : 'hover:text-[#875A33]'
    } flex justify-center items-center w-[13vw] h-[4vw] font-[poppins]`;
  };

  const tabComponents = {
    0: <Western />,
    1: <Dresses />,
    2: <Saree />,
    3: <Kurtas />,
    4: <Ethnic />,
  };
  
  return (
    <div>
      <div>
          <Poster/>
      </div>
      <div className='mt-[0vw]'>
        <div className='flex justify-center '>
                <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/>
            </div>
            <div className='flex justify-center text-[#875A33] font-lora text-[3vw]' >
                <span>Our Products</span>
            </div>
        </div>
    <div className='my-[1vw]' id='NavforProducts'> 
         {/* <CategoryNav/> */}
         <div id='navbar' className='flex justify-center mx-[17vw] mt-[0.5vw] text-[2.2vw]'>
        <nav>
          <ul className='flex flex-row font-poppins text-[#454545] gap-[3vw]'>
            <li onClick={() => handleClick(0)} className={tabStyles(0)}>
              WESTERN
            </li>
            <li onClick={() => handleClick(1)} className={tabStyles(1)}>
              DRESSES
            </li>
            <li onClick={() => handleClick(2)} className={tabStyles(2)}>
              SAREE
            </li>
            <li onClick={() => handleClick(3)} className={tabStyles(3)}>
              KURTA
            </li>
            <li onClick={() => handleClick(4)} className={tabStyles(4)}>
              ETHNIC
            </li>
          </ul>
        </nav>
      </div>
    </div>
        <div id='products-container-parent' className='flex flex-row'>
          <div className='w-[25vw] ' id='left'>
            <Filtersss/>
          </div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-start items-start gap-[5vw] px-[6vw] my-[3vw]'>
              {activeTab !== null && tabComponents[activeTab]}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category