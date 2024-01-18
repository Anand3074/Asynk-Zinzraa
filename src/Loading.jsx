import React, { useEffect } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import hour from './assets/Hourglass.gif';

const Loading = () => {
  useEffect(() => {
    // Set a minimum duration for the loading indicator
    const minimumLoadTime = 5000; // Set the minimum time in milliseconds (e.g., 2000 for 2 seconds)
        nprogress.start();
    // If the actual load time is less than the minimum, delay the completion
    // if (loadTime < minimumLoadTime) {
      // true ?
      setTimeout(() => {
        nprogress.done();
      }, minimumLoadTime)
      // :
      // nprogress.done();
    

    // Cleanup on component unmount
    return () => {
      nprogress.done();
    };
  }, []);

  const HourGlass = () => {
    return <img src={hour} alt="Hourglass" />;
  };
  return (
<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mx-auto">
<HourGlass />
    </div>
  );
};

export default Loading;

// import React, { useEffect } from 'react';
// import nprogress from 'nprogress';
// import 'nprogress/nprogress.css';
// import hour from './assets/Hourglass.gif'

// const Loading = () => {
//  useEffect(() => {
//     nprogress.start();

//     return () => {
//       nprogress.done();
//     };
//  }, []);

//  const HourGlass = () => {
//   return (
//     <img src={hour} alt="Hourglass" />
//   );
// };

//  return (
//       <div className=''>
//         <HourGlass/>
//       </div>
//  );
// };

// export default Loading;

// //   <div className="loading-bar">
//     //     {/* <img src={logo} alt="ECCOM Logo" /> */}
//     //   </div>


