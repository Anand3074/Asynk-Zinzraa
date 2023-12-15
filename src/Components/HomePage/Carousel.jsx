import React, { useState, useEffect } from 'react';
import Component1 from '../HeroBanner/Hero.jsx';
import Component2 from '../HeroBanner/Hero1.jsx';
import Component3 from '../HeroBanner/Hero2.jsx';
import Slider from 'react-slick'; 
import { IoIosArrowDropright   } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const components = [
    Component1,
     Component2,
     Component3
    ];
  const [activeIndex, setActiveIndex] = useState(0);
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute  top-1/2 right-2 transform rounded-full
      w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer overflow-hidden "
      onClick={onClick}

    >
  <IoIosArrowDropright className="w-full h-full text-[#546e7a]" fill="[#546e7a]" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform rounded-full
      w-[4vw] h-[4vw] -translate-y-1/2 cursor-pointer"
      onClick={onClick}
      style={{ zIndex: 1 }}
    >
      <IoIosArrowDropleft  className="w-[4vw] rounded-full 
      h-[4vw] overflow-hidden text-[#546e7a]" fill='[#546e7a]' />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay timer to 2 seconds
    customPaging: (i) => (
      <div
      className={`w-[0vw] h-[0vw] md:w-[0.7vw] md:h-[0.7vw] rounded-full bg-gray-400 ${
        i === activeIndex ? 'bg-slate-900' : ''
        }`}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '5px', // Adjust the distance from the bottom
          width:  '100%',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0' }}>{dots}</ul>
      </div>
    ),

  };
  return (      
      <Slider {...sliderSettings}>
      {components.map((Component, index) => (
            <Component key={index}/>
          ))}
        </Slider>
  );
};

export default Carousel;


// import React, { useState, useEffect } from 'react';
// import Component1 from '../HeroBanner/Hero.jsx';
// import Component2 from '../HeroBanner/Hero1.jsx';
// import Component3 from '../HeroBanner/Hero2.jsx';
// import Draggable from 'react-draggable';
// const Carousel = () => {
//   const components = [Component1, Component2, Component3];
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
//     }, 10000); // Change component every 5 seconds

//     return () => clearInterval(interval);
//   }, [components.length]);

//   const handleDrag = (e, ui) => {
//     const { deltaX } = ui;
  
//     // Adjust this value based on your sensitivity preference
//     const sensitivity = -0.05
    
    
    
    
    
    
//     0.1;
//     console.log('Dragging...', ui);
  
//     // If dragged more than the sensitivity value, change the activeIndex
//     if (deltaX > sensitivity) {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
//     } else if (deltaX < sensitivity) {
//       setActiveIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
//     }
//   }

//   return (
//     <div className="container sm:w-[98.9vw]  ">
//       <Draggable
//         axis="x" // Allow only horizontal dragging
//         bounds="parent" // Restrict dragging to the parent element
//         onDrag={handleDrag}
//       >
//       <div className="flex relative">
//         {components.map((Component, index) => (
//           <div
//             key={index}
//             className={`${
//               index === activeIndex ? 'block' : 'hidden'
//             } transition-opacity sm:w-[98.9vw] duration-500 ease-in-out opacity-0 ${
//               index === activeIndex ? 'opacity-100' : ''
//             }`}
//           >
//             <Component />
//           </div>
//         ))}
//         <div className="flex justify-center items-center absolute left-[48vw] bottom-[1vw]  ">
//           {components.map((_, index) => (
//             <div
//               key={index}
//               className={`flex w-[1vw]  h-[1vw]  rounded-full mx-[0.3vw] bg-gray-400 ${
//                 index === activeIndex ? 'bg-slate-900' : ''
//               }`}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//       </Draggable>
//     </div>
//   );
// };

// export default Carousel;

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

