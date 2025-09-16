import React from "react";
import Grid from "./Grid";

const Section6 = () => {
  return (
    <div className="main-div m-auto mt-5" style={{ width: "90%" }}>
      <div className="div-1 d-flex flex-row justify-content-between align-items-center">
        <div
          className="div-heading"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          <div className="d-flex flex-row">
            Trusted By{" "}
            <div
              className="ms-3"
              style={{
                background:
                  "linear-gradient(88.4deg, #014478 1.96%, #018ABE 91.28%, #D6E7EE 180.6%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "42px",
              }}
            >
              25,000+
            </div>
          </div>
          <div
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "40px",
            }}
          >
            Happy Customers
          </div>
        </div>

        <div className="div-btn">
          <button className="btn btn-dark m-1" type="submit">
            Schedule a Demo <i className="bi bi-arrow-up-right"></i>{" "}
          </button>
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Section6;
