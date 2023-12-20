import React from 'react'
import ProductType from './ProductType.jsx'
import Fashion from'../Components/Fashion.jsx'
import Footer from '../Components/Footer.jsx'


const Western2 = () => {
    const Western= "Western"
    return (
      <div>
          <ProductType PosterType={Western} Poster={<Fashion/>}/>
          {/* <Footer/> */}
      </div>
    )
}

export default Western2