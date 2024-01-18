import React from 'react'
import EWish from '../../assets/wishh.png'
import { Link } from 'react-router-dom'
import Greetings from '../Greeting'

const EmptyWish = () => {
    let empty = {
        img: EWish,
        msg1:'Your wishlist is empty!',
        msg2:"Save your favorite items so you don't lose sight of them.",
        button: 'Start Shopping Now'

    }
  return (
        <div>
            <Greetings wish={empty}/>
        </div>
  )
}

export default EmptyWish