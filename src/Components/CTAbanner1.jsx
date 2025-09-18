import React from "react";
import Btn from "./Btn";
import Diamond from "../assets/Pictures/Diamond.png";
const CTAbanner1 = () => {
  return (
    <div className="banner-div w-75 mt-5 p-2 bg-body-secondary border border-secondary-subtle rounded-3 d-flex align-items-center justify-content-between">
      <div className="diamondIcon ms-3">
        <img
          src={Diamond}
          alt="..."
          style={{ width: "48px", height: "48px" }}
        />
      </div>
      <div className="txt text-start d-block justify-content-center align-items-center">
        <div>
          <p
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
            }}
            className="mb-0"
          >
            Why Settle for Less? Choose Feedreach.
          </p>
        </div>
        <div
          className="w-75"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "12px",
          }}
        >
          <p>
            You need human content, supportive service, and a partner who meets
            you where you are.
          </p>
        </div>
      </div>
      <div className="me-3">
        <Btn text={"Sign Up Today"} size="sm" />
      </div>
    </div>
  );
};

export default CTAbanner1;
