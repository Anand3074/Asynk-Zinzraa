import React from 'react'
import Greetings from '../Greeting'
import Thanks from '../../assets/thanks.png'

const OrderSuccess = () => {
    let Order = {
        img: Thanks,
        msg1:'Thank you for shopping !',
        msg2:"Your order have been placed successfully",
        button: 'Continue Shopping'
    }
  return (
    <div>
        <Greetings wish={Order}/>
    </div>
  )
}

export default OrderSuccess