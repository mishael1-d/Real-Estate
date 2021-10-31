import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/error.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="error">
          <h2>page not found</h2>
          <p>please <Link to="/" className="span">click here </Link>to go back home</p>
      </div>
    </div>
  );
};

export default ErrorPage;
