import React from "react";
import Update_img from "../assets/Pictures/Update_img.png";
import Footer_bg from "../assets/Pictures/Footer_bg.jpg";
import LogoWhite from "../assets/Pictures/LogoWhite.png";

const Footer = () => {
  return (
    <div
      className="position-relative"
      style={{
        marginTop: "150px", // creates space before footer starts
      }}
    >
      {/* Footer background (stays behind everything) */}
      <div
        className="w-100 overflow-hidden position-relative text-white text-center p-5"
        style={{
          backgroundImage: `linear-gradient(
              78.17deg,
              rgba(0, 58, 110, 0.9) 0.07%,
              rgba(1, 138, 190, 0.9) 84.37%,
              rgba(214, 231, 238, 0.6) 120.49%
            ), url(${Footer_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      >
        <div style={{ marginTop: "8rem" }}>
          <div className="d-flex flex-row justify-content-between align-items-center m-auto w-75">
            <p
              style={{
                fontFamily: "proxima-nova, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "35px",
                margin: 0,
              }}
            >
              <u>Let’s Talk</u>
            </p>
            <button type="button" className="btn btn-outline-light btn-sm">
              Book a Call <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
        <hr className="w-75 m-auto mt-5" />
        <div className="w-75 m-auto mt-5">
          {" "}
          <div class="row align-items-start">
            <div class="col align-items-center text-start">
              <img src={LogoWhite} alt="..." style={{ width: "110px" }} />
              <p
                className="mt-3"
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "10px",
                  margin: 0,
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Scelerisque iaculis
                suspendisse leo tincidunt faucibus proin.
              </p>
              <button
                type="button"
                className="btn btn-outline-light btn-sm mt-3"
              >
                Schedule a Demo <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>

            <div class="col text-start ms-5">
              <div
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                <p>Menu</p>
              </div>
              <div
                className="text-start mt-2 ms-2"
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "10px",
                  margin: 0,
                }}
              >
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "15px",
                    margin: 0,
                  }}
                >
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>Agency Reseller</li>
                  <li>Video Demo</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>

            <div class="col text-start ms-5">
              <div
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "15px",
                }}
              >
                <p>Services</p>
              </div>
              <div
                className="text-start mt-2 ms-2"
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "10px",
                }}
              >
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "15px",
                    margin: 0,
                  }}
                >
                  <li>Social Media Management</li>
                  <li>Short-form Video Content</li>
                  <li>Email Design</li>
                  <li>Blog Posts</li>
                </ul>
              </div>
            </div>
            <div class="col text-start ms-5">
              <div
                style={{
                  fontFamily: "proxima-nova, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                <p>Compare</p>
              </div>
              <div
                className="text-start mt-2 ms-2"
                style={{
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "10px",
                  margin: 0,
                }}
              >
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "15px",
                    margin: 0,
                  }}
                >
                  <li>98 Buck Social</li>
                  <li>Smarcomms</li>
                  <li>SocialSinQ</li>
                  <li>99 Social</li>
                  <li>Socinova </li>
                  <li>See more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-75 m-auto mt-5" />
        <div
          className="d-flex flex-row justify-content-between w-75 m-auto mt-3"
          style={{
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "12px",
          }}
        >
          <div>2025 © Feedreach. All Rights Reserved.</div>

          {/* Policies with spacing */}
          <div className="d-flex flex-row gap-4">
            <div>Terms & Conditions</div>
            <div>Refund Policy</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>

      {/* Small box (overlapping footer) */}
      <div
        className="w-75 m-auto rounded-5 p-3 position-absolute d-flex flex-row align-items-center"
        style={{
          top: "-131px", // pulls it up so it overlaps half inside the footer
          left: "50%",
          transform: "translateX(-50%)",
          backgroundImage: `linear-gradient(
              78.17deg,
              rgba(0, 58, 110, 0.8) 0.07%,
              rgba(1, 138, 190, 0.8) 84.37%,
              rgba(214, 231, 238, 0.5) 120.49%
            ), url(${Footer_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 3,
        }}
      >
        <img src={Update_img} alt="update" style={{ width: "50%" }} />
        <div className="w-50 ms-4">
          <p style={{ color: "white", fontWeight: 400, fontSize: "15px" }}>
            Subscribe for Daily Update
          </p>
          <div className="input-group mb-3" style={{ width: "314px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="Recipient’s username"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text"
              id="basic-addon2"
              style={{
                background:
                  "linear-gradient(86.13deg, #014478 0.03%, #018ABE 99.97%)",
                fontSize: "12px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Subscribe Now
            </span>
          </div>
          <p style={{ color: "white", fontSize: "10px" }}>
            By clicking Sign Up, you confirm that you agree to our{" "}
            <u>Terms and Conditions</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
