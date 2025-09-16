import React from "react";

const Section7 = () => {
  return (
    <div className="section7">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <div
          className="heading w-75"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          Why Choose Feadreach
        </div>
        <div className="table w-50 bg-light border border-secondary rounded-4 d-flex flex-row justify-content-between p-2">
          <div>
            <p>Features</p>
            <p>
              Affordable, High-Quality Service <hr />
            </p>

            <p>
              Transparent and Reliable <hr />
            </p>
            <p>
              Flexible Plans <hr />
            </p>
            <p>Human-Driven Creativity</p>
          </div>
          <div>
            <p>Traditional Alternative</p>
            <p>
              <i class="bi bi-check2-circle text-danger"></i> <hr />
            </p>

            <p>
              <i class="bi bi-check2-circle text-danger"></i> <hr />
            </p>
            <p>
              <i class="bi bi-check2-circle text-danger"></i> <hr />
            </p>
            <p>
              <i class="bi bi-check2-circle text-danger"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
