import React, { useState, useEffect } from 'react';
import Component1 from '../HeroBanner/Hero.jsx';
import Component2 from '../HeroBanner/Hero1.jsx';
import Component3 from '../HeroBanner/Hero2.jsx';

const Carousel = () => {
  const components = [Component1, Component2, Component3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000); // Change component every 5 seconds

    return () => clearInterval(interval);
  }, [components.length]);

  return (
    <div className="container">
      <div className="">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? 'block' : 'hidden'
            } transition-opacity w-[100vw] duration-500 ease-in-out opacity-0 ${
              index === activeIndex ? 'opacity-100' : ''
            }`}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
