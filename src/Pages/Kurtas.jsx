// import React from 'react'
// import Category from '../Pages/Category/Category'

// const Saree = () => {
//   const index = 0;
//   return (
//     <div>
//       <Category defaultTab={index}/>
//     </div>
//   )
// }

// export default Saree
import Footer from '../Components/Footer';
import Saree12 from '../Pages/Category/Saree12'

import React from 'react'

const Kurtas = () => {
  const index = 3;
  return (
    <div>
      <Saree12 defaultTab={index}/>
      <Footer/>
    </div>
  )
}

export default Kurtas