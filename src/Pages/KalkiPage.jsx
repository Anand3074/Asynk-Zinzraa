import React from 'react'
import ProductType from './ProductType.jsx'
import WesternPost from '../Components/westernPost'
import Footer from '../Components/Footer.jsx'

const KalkiPage = () => {
    const Western= "Western"
  return (
    <div>
        <ProductType PosterType={Western} Poster={<WesternPost/>}/>
        {/* <Footer/> */}
    </div>
  )
}

export default KalkiPage