import React from 'react'
import Saree12 from '../Pages/Category/Saree12'
import Footer from '../Components/Footer';

const Dresses = () => {
  const index = 1;
  return (
    <div>
      <Saree12 defaultTab={index}/>
      <div>
        <Footer/>
        </div>
    </div>
  )
}

export default Dresses