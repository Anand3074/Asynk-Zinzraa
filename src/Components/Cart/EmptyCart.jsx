import React from 'react'
import EWish from '../../assets/wishh.png'
import { Link } from 'react-router-dom'
import Greetings from '../Greeting'

const EmptyWish = () => {
    let empty = {
        img: EWish,
        msg1:'No Items in the Cart!',
        msg2:"Add your favorite items so you don't lose sight of them.",
        button: 'Start shopping now'

    }
  return (
        <div>
            <Greetings wish={empty}/>
        </div>
  )
}

export default EmptyWish