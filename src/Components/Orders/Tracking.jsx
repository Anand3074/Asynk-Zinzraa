import React from 'react'
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { CogIcon, UserIcon, BuildingLibraryIcon,ShoppingBagIcon, CubeIcon, TruckIcon, ClipboardDocumentCheckIcon, ClipboardDocumentIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
const TrackingSteps = ({orderStatus}) => {
    const [activeStep, setActiveStep] = React.useState(orderStatus || "Purchased");
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
//  console.log(orderStatus)
 
  console.log(activeStep)
  return (
    <div className="w-full px-2 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className={orderStatus === "Purchased" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" :
         "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1  text-white" }>
          <ShoppingBagIcon    />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]"  color={orderStatus === "Purchased" ? "blue" : "blue-gray"}>
              Purchased
            </Typography>
           
          </div>
        </Step>
        <Step className={orderStatus === "Packaging" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" : "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1  text-white" } >
          <CubeIcon />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]" color={orderStatus === "Packaging" ? "blue" : "blue-gray"}>
              Packaging
            </Typography>
           
          </div>
        </Step>
        <Step className={orderStatus === "Shipped" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" : "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1  text-white" } >
          <TruckIcon  />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]"  color={orderStatus === "Shipped" ? "blue" : "blue-gray"}>
             Shipped
            </Typography>
            
          </div>
        </Step>
         <Step className={orderStatus === "Delivering" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" : "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" }>
          <ClipboardDocumentIcon  />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]" color={orderStatus === "Delivering" ? "blue" : "blue-gray"}>
             Delivering
            </Typography>
            
          </div>
        </Step>
          <Step className={orderStatus === "Delivered" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" : "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1  text-white" } >
          <ClipboardDocumentCheckIcon  />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]" color={orderStatus === "Delivered" ? "blue" : "blue-gray"}>
             Delivered
            </Typography>
            
          </div>
        </Step>
          <Step className={orderStatus === "Return" ? "bg-blue-400 lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1 text-white" : "blue-gray lg:h-10 lg:w-10  w-6 h-6 lg:px-2 lg:py-2 px-1 py-1  text-white" } >
          <ArrowPathIcon  />
          <div className="absolute lg:-bottom-[2.5rem] -bottom-[1.3rem] w-max text-center">
            <Typography className="text-[.6rem] lg:text-[1rem]" color={orderStatus === "Return" ? "blue" : "blue-gray"}>
             Return
            </Typography>
            
          </div>
        </Step>
      </Stepper>
    
    </div>
  )
}

export default TrackingSteps