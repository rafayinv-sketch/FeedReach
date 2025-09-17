import React from "react";
import Table from "./Table";
import CTAbanner1 from "./CTAbanner1";

const Section7 = () => {
  return (
    <div className="section7">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <div
          className="heading w-75 mt-5"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          Why Choose Feadreach
        </div>
        <Table />
        <CTAbanner1 />
      </div>
    </div>
  );
};

export default Section7;
