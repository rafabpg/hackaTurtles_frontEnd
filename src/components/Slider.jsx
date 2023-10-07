import React from 'react';
import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children }) => {
  
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "center"
  });

  return (
    <div style={{overflow:'hidden'}} ref={emblaRef}>
      <div style={{display:'flex', gap:'10px'}}>{children}</div>
    </div>
  );
};
export default Slider;
