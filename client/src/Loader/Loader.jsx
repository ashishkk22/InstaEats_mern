import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="center-div">
        <img
          src="images/Loader.gif"
          alt="loader"
          style={{ width: "105px", height: "105px" }}
        />
        <h3 className="text-primaryWeb text-2xl ml-1 mt-2 textLoader">
          Loading...
        </h3>
      </div>
    </>
  );
};

export default Loader;
