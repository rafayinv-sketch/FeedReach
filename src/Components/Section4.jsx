import React from "react";
import Line from "../assets/Pictures/Line.png";
const Section4 = () => {
  return (
    <div className="section4">
      <div className="d-flex flex-column justify-content-center text-center">
        <div
          className="section4-heading mt-5"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "80px",
          }}
        >
          Achieve Business
        </div>
        <div
          className="section4-heading"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "80px",
          }}
        >
          Growth
        </div>
      </div>

      <div className="row">
        <div className="col-3 bg-dark">1</div>
        <div className="col-3 bg-light">2</div>
        <div className="col-3 bg-primary">3</div>
        <div className="col-3 bg-secondary">4</div>
        <div className="col-3 bg-secondary">5</div>
        <div className="col-3 bg-primary">6</div>
        <div className="col-3 bg-light">7</div>
        <div className="col-3 bg-dark">8</div>
      </div>
    </div>
  );
};

export default Section4;
