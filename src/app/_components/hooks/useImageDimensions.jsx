import { useState, useEffect } from "react";

const useImageDimensions = (imageSrc) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [imageSrc]);

  return dimensions;
};

export default useImageDimensions;




// import React from 'react'
// const useImageDimension = () => {
//     const [width, setWidth] = React.useState(0)
//     React.useEffect(() => {
//       // Update width on window resize
//       const handleResize = () => {
//         setWidth(window.innerWidth)
//       }
//       handleResize()
//       window.addEventListener('resize', handleResize)
//       return () => window.removeEventListener('resize', handleResize)
//     }, [])
//     // Calculate optimal image dimensions based on screen size
//     const getImageDimensions = () => {
//       if (width <= 640) return { width: 640, height: 480 }
//       if (width <= 1080) return { width: 1080, height: 720 }
//       if (width <= 1920) return { width: 1920, height: 1080 }
//       return { width: 2048, height: 1152 }
//     }
//     return { getImageDimensions}
// }
// export default useImageDimension