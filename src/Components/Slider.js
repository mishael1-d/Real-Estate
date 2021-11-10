import React, { useState } from "react";
import "../../src/styles/slider.css"
import ImgComp from "./ImgComp"
import image1 from "../buildings/image1.JPG";
import image2 from "../buildings/image2.JPG";
import image3 from "../buildings/image3.JPG";
import image4 from "../buildings/image4.JPG";
import image5 from "../buildings/image5.JPG";
import image6 from "../buildings/image6.JPG";
import image7 from "../buildings/image7.JPG";

function Slider() {
  const [x, setX] = useState(0)
  let sliderArr = [<ImgComp src={image1}/>,<ImgComp src={image2}/>,<ImgComp src={image3}/>,<ImgComp src={image4}/>,<ImgComp src={image5}/>,<ImgComp src={image6}/>,<ImgComp src={image7}/>]
  const goLeft=()=>{
    x===0?setX(-100*(sliderArr.length-1)):setX(x+100)
  }
  const goRight=()=>{
    x===-100*(sliderArr.length-1)? setX(0): setX(x-100)
  }
  return (
    <div className="slider-container">
{sliderArr.map((item, index)=>{
  return (
    <div key={index} className="slider" style={{transform:`translateX(${x}%)`}}>
      {item}
    </div>
  )
})}
<button id="goLeft" className="btn-styles" onClick={goLeft}>Back</button>
<button id="goRight" className="btn-styles" onClick={goRight}>Next</button>
    </div>
  );
}

export default Slider;
