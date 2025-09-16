import React from "react";
import Lightning from "../assets/Pictures/Lightning.png";
import SectionTag from "./SectionTag";
import Nav2 from "./Nav2";
import Dashboard from "./Dashboard";

const Section5 = () => {
  return (
    <div className="section5 mt-5">
      <div className="div5-1 d-flex flex-column justify-content-center align-items-center text-center">
        <SectionTag title={"AFFORDABLE"} Icon={Lightning} />
        <div
          className="heading mt-2 w-75"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          How it works
        </div>

        <div
          className="paragraph d-flex justify-content-center mt-3"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "15px",
          }}
        >
          <p className="w-100 text-center">
            Simplified Social Media Management in Few Easy Steps. We have made
            managing your social media unproblematic.
          </p>
        </div>
      </div>
      <Nav2 />
      <Dashboard />
    </div>
  );
};

export default Section5;
