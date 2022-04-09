import React from "react";
import image from "../../src/styles/flower.jpg";
import Buttons from "../pages/buttons";

import "../styles/styles.css";
const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "181px",
          marginLeft: "45%",
          borderRadius: "50%",
          overflow: "hidden",
          height: "169px",
        }}
      >
        <img src={image} />
      </div>
      <div className="background">
        <Buttons />
      </div>
    </div>
  );
};
export default Home;
