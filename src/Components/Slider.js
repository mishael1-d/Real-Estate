import React from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../buildings/image1.JPG";
import image2 from "../buildings/image2.JPG";
import image3 from "../buildings/image3.JPG";
import image4 from "../buildings/image4.JPG";
import image5 from "../buildings/image5.JPG";
import image6 from "../buildings/image6.JPG";
import image7 from "../buildings/image7.JPG";

function Slider() {
  const images = {
    items: [
        {id:0, image:image1},
        {id:1, image:image2},
        {id:2, image:image3},
        {id:3, image:image4},
        {id:4, image:image5},
        {id:5, image:image6},
        {id:6, image:image7}
    ],
  };
  return <div>
<Carousel>
    {images.items.map(item=><div key={item.id} className=".images">
        <img src={item.image} alt="" className='image'/>
    </div>)}
</Carousel>
  </div>;
}

export default Slider;
