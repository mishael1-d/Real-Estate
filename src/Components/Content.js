import React from "react";
import Slider from "./Slider";
// import InputField from "./Input-field";

const Content = () => {
  return (
    <div className="content container">
      <div className="image-container">
        <div className="text_content">
          <h2>We're The Next Generation Of Real Estate Agents.</h2>
          <p>Discover a place you'll love to live</p>
          <div className="search-container">
            <input
              type="search"
              name=""
              id=""
              placeholder="Location, City, Area Code"
            />
            <button type="submit" className="search-button"></button>
          </div>
        </div>
      </div>
      <h1>See how we can help</h1>
      <div className="bottom-text-container">
        <div className="bottom-text">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
            alt=""
          />
          <h2>Buy a home</h2>
          <p>
            With over 1 million+ homes for sale available on the website, We can
            match you with a house you will want to call home.
          </p>
          <button>Find a home</button>
        </div>
        <div className="bottom-text">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
            alt=""
          />
          <h2>Rent a home</h2>
          <p>
            With 35+ filters and custom keyword search, We can help you easily
            find a home or apartment for rent that you'll love.
          </p>
          <button>Find a rental</button>
        </div>
        <div className="bottom-text">
          <img
            src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
            alt=""
          />
          <h2>See neighborhoods</h2>
          <p>
            With more neighborhood insights than any other real estate website,
            we've captured the color and diversity of communities.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      {/* <InputField/> */}
      <div className="explore-homes">
        <h2>Explore homes that we have</h2>
        <p>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>
      <Slider />
    </div>
  );
};

export default Content;
