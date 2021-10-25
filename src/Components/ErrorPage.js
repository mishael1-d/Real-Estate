import React from "react";
import "../../src/styles/error.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="error">
          <h2>page not found</h2>
          <p>please <span>click here </span>to go back home</p>
      </div>
    </div>
  );
};

export default ErrorPage;
