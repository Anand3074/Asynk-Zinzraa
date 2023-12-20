import React from 'react'
import Greetings from '../Greeting'
import Thanks from '../../assets/thanks.png'
import { Link } from 'react-router-dom'
import { GoStack } from "react-icons/go";


const OrderSuccess = () => {
    let Order = {
        img: Thanks,
        msg1:'Thank you for shopping !',
        msg2:"Your order have been placed successfully",
        button: 'Continue Shopping'
    }
    const TrackOrder = 'Track Orders'

  return (
    <div>
      
    
        <Greetings wish={Order} Trackorder={TrackOrder} orderlogo={<GoStack/>} />
        
    </div>
  )
}

export default OrderSuccess