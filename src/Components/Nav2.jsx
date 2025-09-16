import React from "react";

const Nav2 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="div5-2 bg-body-secondary border border-secondary-subtle rounded p-0"
        style={{ height: "50px", width: "80%" }}
      >
        <ul className="nav nav-pills h-100 w-100 d-flex justify-content-center align-items-center m-0">
          <li className="nav-item">
            <a
              className="nav-link active d-flex align-items-center h-100"
              aria-current="page"
              href="#"
              style={{
                background:
                  "linear-gradient(86.13deg, #014478 0.03%, #018ABE 99.97%)",
                color: "white",
              }}
            >
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-white"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <i
                  className="bi bi-house-fill"
                  style={{
                    background:
                      "linear-gradient(86.13deg, #014478 0.03%, #018ABE 99.97%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                ></i>
              </span>
              <span className="ms-4 text-white">Engagement</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link d-flex align-items-center h-100" href="/">
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="bi bi-heart-pulse"></i>
              </span>
              <span className="ms-4 text-black">Publish</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link d-flex align-items-center h-100" href="/">
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="bi bi-mortarboard-fill"></i>
              </span>
              <span className="ms-4 text-black">Analytics</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link d-flex align-items-center h-100" href="/">
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="bi bi-currency-dollar"></i>
              </span>
              <span className="ms-4 text-black">Listening</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link d-flex align-items-center h-100" href="/">
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="bi bi-currency-dollar"></i>
              </span>
              <span className="ms-4 text-black">Advocacy</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link d-flex align-items-center h-100" href="/">
              <span
                className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white"
                style={{ width: "30px", height: "30px" }}
              >
                <i class="bi bi-tropical-storm"></i>
              </span>
              <span className="ms-4 text-black">Influencer Marketing</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;
