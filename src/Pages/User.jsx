import React from 'react'
import Userjpg from '../Components/UserInfo/userphoto'
import { useState } from 'react';
// import Accounts from '../Components/UserInfo/Accounts'
// import History from '../Components/UserInfo/History'
// import Payments from '../Components/UserInfo/Payments'


const User = () => {

  return (
    <div>
        <div>
        <Userjpg/>
          </div>
          {/* <div>
            {activeLink === '/Account' && <Accounts />}
            {activeLink === '/History' && <History />}
            {activeLink === '/Payment' && <Payments />}
          </div> */}
    </div>
  )
}

export default User