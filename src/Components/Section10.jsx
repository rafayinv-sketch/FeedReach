import React from "react";
import SM_icons from "../assets/Pictures/SM_icons.png";

const Section10 = () => {
  return (
    <div className="banner-div m-auto w-75 mt-5 p-2 bg-body-secondary border border-secondary-subtle rounded-3 d-flex align-items-center justify-content-between">
      <div className="txt text-start d-block justify-content-center align-items-center">
        <div
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "20px",
          }}
        >
          <p className="mb-0 ms-4">
            Connect your <br /> favorite accounts
          </p>
        </div>
      </div>
      <div className="me-4">
        <img
          src={SM_icons}
          alt="..."
          style={{ width: "330px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Section10;
