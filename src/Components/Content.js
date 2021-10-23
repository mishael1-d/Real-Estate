import React from "react";
import InputField from './Input-field'

const Content = () => {
  return (
    <div className="content">
      <div className="text_content">
        <h2>We're The Next Generation Of Real Estate Agents.</h2>
        <p>
          We specialize in providing these services buying, selling and renting
          of apartments.
        </p>
      </div>
      <InputField/>
    </div>
  );
};

export default Content;
