import React from 'react'

const Greet = () => {
  return (
    <div
  id="Greeting"
  className="overflow-hidden bg-white flex flex-col justify-between gap-56 w-full"
>
  <div className="flex flex-col justify-between gap-40 items-center">
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-10 w-[332px] items-center">
        <img
          src="https://file.rendit.io/n/6ExolH58sNZmAcVSpfrB.svg"
          id="ThankyouForShopping"
        />
        <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] self-start">
          Thank you for shopping !<br />
          <span className="font-['Nunito']">
            Your order have been placed successfully
          </span>
        </div>
      </div>
      <div className="overflow-hidden bg-[#032b2a] self-start flex flex-col justify-center w-[458px] h-12 shrink-0 items-center rounded-lg">
        <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-white">
          Continue Shopping
        </div>
      </div>
    </div>
  </div>
</div>
  
  )
}

export default Greet