import React from "react";
import Post1 from "../assets/Pictures/Post1.png";
import Post2 from "../assets/Pictures/Post2.png";
import Post3 from "../assets/Pictures/Post3.png";
import Post4 from "../assets/Pictures/Post4.png";
import Btn from "./Btn";

const Section9 = () => {
  return (
    <div className="container">
      <div
        className="m-auto rounded-4 p-4 d-flex flex-row align-items-center mt-5"
        style={{ background: "#DAC8FF", width: "90%" }}
      >
        <div>
          <img
            className="rounded-4 me-0 img-fluid"
            src={Post1}
            alt="Post"
            style={{ width: "53rem", height: "19rem", objectFit: "fill" }}
          />
        </div>

        <div
          className="ms-4"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontStyle: "normal",
          }}
        >
          <p style={{ fontWeight: 300, fontSize: "0.625rem" }}>DESIGN</p>

          <p style={{ fontWeight: 500, fontSize: "1.5625rem" }}>
            The Most complete Set of Publishing Integrations, ever
          </p>

          <p style={{ fontWeight: 400, fontSize: "0.625rem" }}>
            Lorem ipsum dolor sit amet consectetur. Varius egestas orci eu nulla
            non. Neque nulla adipiscing senectus volutpat tristique urna. Tortor
            enim non et suscipit nunc semper mauris at nunc.
          </p>

          <Btn text="Learn More" />

          <div
            className="mt-3"
            style={{ fontWeight: 500, fontSize: "0.625rem" }}
          >
            <p>
              <i className="bi bi-check2-circle me-2"></i> Auto-publish your
              content or get a notification when it’s time to post.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Collaborate with your
              team to plan and approve posts faster.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Track performance and
              engagement directly from the dashboard.
            </p>
          </div>
        </div>
      </div>
      {/* ================================================================================================================== */}
      <div
        className="m-auto rounded-4 p-4 d-flex flex-row-reverse align-items-center mt-3"
        style={{ background: "#FFB2A8", width: "90%" }}
      >
        <div>
          <img
            className="rounded-4 me-0 img-fluid"
            src={Post2}
            alt="Post"
            style={{ width: "53rem", height: "19rem", objectFit: "fill" }}
          />
        </div>

        <div
          className="ms-4"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontStyle: "normal",
          }}
        >
          <p style={{ fontWeight: 300, fontSize: "0.625rem" }}>CONTENT</p>

          <p style={{ fontWeight: 500, fontSize: "1.5625rem" }}>
            The Most complete Set of Publishing Integrations, ever
          </p>

          <p style={{ fontWeight: 400, fontSize: "0.625rem" }}>
            Lorem ipsum dolor sit amet consectetur. Varius egestas orci eu nulla
            non. Neque nulla adipiscing senectus volutpat tristique urna. Tortor
            enim non et suscipit nunc semper mauris at nunc.
          </p>

          <Btn text="Learn More" />

          <div
            className="mt-3"
            style={{ fontWeight: 500, fontSize: "0.625rem" }}
          >
            <p>
              <i className="bi bi-check2-circle me-2"></i> Auto-publish your
              content or get a notification when it’s time to post.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Collaborate with your
              team to plan and approve posts faster.
            </p>
            <p>
              <i className="bi bi-check2-circle me-2"></i> Track performance and
              engagement directly from the dashboard.
            </p>
          </div>
        </div>
      </div>
      {/* ================================================================================================================== */}
      <div className="container my-4" style={{ width: "90%" }}>
        <div className="row g-4">
          {/* Box 1 */}
          <div className="col-md-6">
            <div
              className="rounded-4 p-4 d-flex flex-column justify-content-between"
              style={{ background: "#FFD88A" }}
            >
              {/* Content */}
              <div
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontStyle: "normal",
                }}
              >
                <p style={{ fontWeight: 300, fontSize: "0.625rem" }}>
                  SCHEDULE
                </p>
                <p style={{ fontWeight: 500, fontSize: "1.5625rem" }}>
                  The Most complete Set of Publishing Integrations, ever
                </p>
                <p style={{ fontWeight: 400, fontSize: "0.625rem" }}>
                  Lorem ipsum dolor sit amet consectetur. Varius egestas orci eu
                  nulla non. Neque nulla adipiscing senectus volutpat tristique
                  urna.
                </p>
                <Btn text="Learn More" />
              </div>

              {/* Image */}
              <div className="mt-3">
                <img
                  className="rounded-4 img-fluid"
                  src={Post3}
                  alt="Post"
                  style={{ width: "100%", height: "19rem", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          {/* ================================================================================================================== */}
          {/* Box 2 */}
          <div className="col-md-6">
            <div
              className="rounded-4 p-4 d-flex flex-column"
              style={{ background: "#B0EC9C" }}
            >
              {/* Content */}
              <div
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontStyle: "normal",
                }}
              >
                <p style={{ fontWeight: 300, fontSize: "0.625rem" }}>CREATE</p>
                <p style={{ fontWeight: 500, fontSize: "1.5625rem" }}>
                  The Most complete Set of Publishing Integrations, ever
                </p>
                <p style={{ fontWeight: 400, fontSize: "0.625rem" }}>
                  Lorem ipsum dolor sit amet consectetur. Varius egestas orci eu
                  nulla non. Neque nulla adipiscing senectus volutpat tristique
                  urna.
                </p>
                <Btn text="Learn More" />
              </div>

              {/* Image */}
              <div className="mt-3">
                <img
                  className="rounded-4 img-fluid"
                  src={Post4}
                  alt="Post"
                  style={{ width: "100%", height: "19rem", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
