import React from "react";
import InputField from './Input-field'
import { data } from "../data";

const Content = () => {
  return (
    <div className="content container">
        <div className="image-container">
          
          <div className="text_content">
            <h2>We're The Next Generation Of Real Estate Agents.</h2>
            <p>
              Discover a place you'll love to live
            </p>
            <div className="search-container">
            <input type="search" name="" id="" placeholder="Location, City, Area Code"/>
            <button type="submit"></button>
            </div>
          </div>
            {/* {data.map((image, index)=>{
              return (
                <span key={index}><img src={image} alt="" /></span>
              )
            })} */}
            {/* <img src={data[0]} alt="" srcset="" /> */}
        </div>
      <InputField/>
    </div>
  );
};

export default Content;
