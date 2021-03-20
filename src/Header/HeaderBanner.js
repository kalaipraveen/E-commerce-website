import React from 'react'
import Carousel from "react-elastic-carousel";
import './HeaderBanner.css'
import slide1 from '../Images/slide1.jpg'


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
      <div className="App">
         <img src={slide1} alt=""></img>
        </div>
        <div>Slide2</div>
        <div>Slide3</div>
        <div>Slide4</div>
        <div>Slide5</div>
        <div>Slide6</div>
        <div>Slide7</div>
      </Carousel>
    </div>
  );
    
}
