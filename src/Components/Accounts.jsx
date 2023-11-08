import React from 'react';
import AccDetail from './AccDetail.jsx';

const Accounts = () => {
  const Acc1 = [
    {
      DataName: 'Name',
      data: 'John Doe',
    },
    {
      DataName: 'Email',
      data: 'johndev@gmail.com',
    },
    {
      DataName: 'Password',
      data: '********',
    },
    {
      DataName: 'Phone Number',
      data: '+91 9493833749',
    },
    {
      DataName: 'Address',
      data: 'Kenilworth Road, Rolling Stones, Amsterdam',
    },
    {
      DataName: 'Date of Birth',
      data: '23-12-1988',
    },
  ];
  
  return (
    <div className='mt-[vw]'>
      <div className='text-[4vw] mx-[4vw] mt-[3vw]'>Accounts</div>
      {Acc1.map((item, index) => (
        <div key={index}>
          <AccDetail DataAcc={item} />
        </div>
      ))}
    </div>
  );
};

export default Accounts;


