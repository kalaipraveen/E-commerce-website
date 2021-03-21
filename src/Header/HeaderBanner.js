import React from 'react'
import Carousel from "react-elastic-carousel";
import './HeaderBanner.css'
import slide1 from '../Images/slide1.jpg'
import Slide2 from '../Images/slide2.jpg'
import Slide3 from '../Images/slide3.jpg'
import Slide4 from '../Images/slide4.jpg'
import Slide5 from '../Images/slide5.jpg'
import Slide6 from '../Images/slide6.jpg'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1},
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];
  

export default function HeaderBanner() {
    return (
        <div>
      <Carousel breakPoints={breakPoints}>
      <div>
         <img src={slide1} alt="slideone"  className = "Slide-one"></img>
        </div>
        <div><img src={slide1} alt="slideone"  className = "Slide-one"></img></div>
        <div><img src={Slide2} alt="slidtwo"  className = "Slide-two"></img></div>
        <div><img src={Slide3} alt="slidethree"  className = "Slide-three"></img></div>
        <div><img src={Slide4} alt="slidefour"  className = "Slide-four"></img></div>
        <div><img src={Slide5} alt="slidefive"  className = "Slide-five"></img></div>
        <div><img src={Slide6} alt="slidesix"  className = "Slide-six"></img></div>
      </Carousel>
    </div>
  );
    
}
