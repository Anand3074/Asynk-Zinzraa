import React from 'react'
import Collections from '../Components/Collections.jsx'
import Modern from '../Components/Modern.jsx'
import ele1 from '../assets/ele1.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'

const Prodctdetail = () => {

    const Group1 = {
        title:"Best Collections",
        icon : ele1,
        Products : [
          {
              image : Card1,
              specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
              price : '$6500',
              oldprice : '$8999'},
          {
              image : Card2,
              specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
              price : '$6500',
              oldprice : '$8066'}, 
          {
              image : Card3,
              specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
              price : '$6500',
              oldprice : '$7566'
      
          }]
      }
      const Group2 = {
        title:"Recommended for you",
        icon : ele1,
        Products : [
          {
              image : c1,
              specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
              price : '$6500',
              oldprice : '$8999'},
          {
              image : c2,
              specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
              price : '$6500',
              oldprice : '$8066'}, 
          {
              image : c3,
              specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
              price : '$6500',
              oldprice : '$7566'
            }
        ]
        }
  return (
    <div>
        <div>
            <Collections group={Group1}/>
        </div>
        <div>
            <Modern/>
        </div>
        <div>
            <Collections group={Group2}/>
        </div>
    </div>
    
  )
}

export default Prodctdetail