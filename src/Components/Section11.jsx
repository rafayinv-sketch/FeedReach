import React from "react";
import Btn from "./Btn";
import Options from "../assets/Pictures/Options.png";

const Section11 = () => {
  return (
    // main div
    <div className="d-flex flex-row justify-content-center align-items-center m-auto w-75 mt-5">
      {/*sub div right */}
      <div className="w-50 m-auto mt-5">
        {/*top div */}
        <div>
          {" "}
          <div
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "1.7625rem",
            }}
          >
            Revolutionizing The Way You Connect With Customers
          </div>
          <div
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "0.625rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Varius egestas orci eu nulla
            non. Neque nulla adipiscing senectus volutpat tristique urna. Tortor
            enim non et suscipit nunc semper mauris at nunc.
          </div>
        </div>
        {/*middle div */}
        <div className="ms-4 mt-4">
          <p
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "0.625rem",
              color: "#014478",
            }}
          >
            Working together with Feedreach.io
          </p>
          <div
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "0.625rem",
            }}
          >
            {" "}
            <p>
              <i className="bi bi-check2-circle me-2"></i> Lorem ipsum dolor sit
              amet consectetur. Orci.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Lorem ipsum dolor sit
              amet consectetur. Orci.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Lorem ipsum dolor sit
              amet consectetur. Orci.
            </p>
          </div>
        </div>
        {/*bottom div */}
        <div>
          <Btn text={"Schedule a Demo"} size="sm" />
        </div>
      </div>

      {/*sub div left */}
      <div className="w-50 m-auto">
        <img
          src={Options}
          alt="..."
          style={{
            width: "429px",
            height: "196px",
            marginLeft: "48px",
            marginTop: "55px",
          }}
        />
      </div>
    </div>
  );
};

export default Section11;
