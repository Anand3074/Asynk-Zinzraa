import React, { useState, useEffect } from 'react';
import Component1 from '../HeroBanner/Hero.jsx';
import Component2 from '../HeroBanner/Hero1.jsx';
import Component3 from '../HeroBanner/Hero2.jsx';
import Draggable from 'react-draggable';
const Carousel = () => {
  const components = [Component1, Component2, Component3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 10000); // Change component every 5 seconds

    return () => clearInterval(interval);
  }, [components.length]);

  const handleDrag = (e, ui) => {
    const { deltaX } = ui;
  
    // Adjust this value based on your sensitivity preference
    const sensitivity = -0.05
    
    
    
    
    
    
    0.1;
    console.log('Dragging...', ui);
  
    // If dragged more than the sensitivity value, change the activeIndex
    if (deltaX > sensitivity) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
    } else if (deltaX < sensitivity) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    }
  }

  return (
    <div className="container sm:w-[98.9vw]  ">
      <Draggable
        axis="x" // Allow only horizontal dragging
        bounds="parent" // Restrict dragging to the parent element
        onDrag={handleDrag}
      >
      <div className="flex relative">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? 'block' : 'hidden'
            } transition-opacity sm:w-[98.9vw] duration-500 ease-in-out opacity-0 ${
              index === activeIndex ? 'opacity-100' : ''
            }`}
          >
            <Component />
          </div>
        ))}
        <div className="flex justify-center items-center absolute left-[48vw] bottom-[1vw]  ">
          {components.map((_, index) => (
            <div
              key={index}
              className={`flex w-[1vw]  h-[1vw]  rounded-full mx-[0.3vw] bg-gray-400 ${
                index === activeIndex ? 'bg-slate-900' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      </Draggable>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from 'react';
// import Component1 from '../HeroBanner/Hero.jsx';
// import Component2 from '../HeroBanner/Hero1.jsx';
// import Component3 from '../HeroBanner/Hero2.jsx';

// const Carousel = () => {
//   const components = [Component1, Component2, Component3];
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
//     }, 5000); // Change component every 5 seconds

//     return () => clearInterval(interval);
//   }, [components.length]);

//   return (
//     <div className="container">
//       <div className="">
//         {components.map((Component, index) => (
//           <div
//             key={index}
//             className={`${
//               index === activeIndex ? 'block' : 'hidden'
//             } transition-opacity w-[100vw] duration-500 ease-in-out opacity-0 ${
//               index === activeIndex ? 'opacity-100' : ''
//             }`}
//           >
//             <Component />
//           </div>
//         ))}
//       </div>
//       <div>

//       </div>
//     </div>
//   );
// };

// export default Carousel;

