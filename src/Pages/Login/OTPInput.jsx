import React, { useState } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(0);

  const handleChange = (e) => {
    setOtp((prevOtp) => {
      return prevOtp + e.target.value;
    });
  };

  return (
    <div className="flex flex-row otp-input gap-[1vw]">
      <input
        type="number"
        maxLength={1}
        value={otp[0]}
        onChange={handleChange}
        className='flex justify-center items-center pl-[2vw] w-[7vw] h-[6vw] sm:w-[5vw] sm:h-[4vw] border border-solid border-2px border-grey-slate-800'
      />
      <input
        type="number"
        maxLength={1}
        value={otp[1]}
        onChange={handleChange}
        className='flex justify-center items-center pl-[2vw] w-[7vw] h-[6vw] sm:w-[5vw] sm:h-[4vw] border border-solid border-2px border-grey-slate-800'
      />
      <input
        type="number"
        maxLength={1}
        value={otp[2]}
        onChange={handleChange}
        className='flex justify-center items-center pl-[2vw] w-[7vw] h-[6vw] sm:w-[5vw] sm:h-[4vw] border border-solid border-2px border-grey-slate-800'
      />
      <input
        type="number"
        maxLength={1}
        value={otp[3]}
        onChange={handleChange}
        className='flex justify-center items-center pl-[2vw] w-[7vw] h-[6vw] sm:w-[5vw] sm:h-[4vw] border border-solid border-2px border-grey-slate-800'
      />
    </div>
  );
};

export default OTPInput;
