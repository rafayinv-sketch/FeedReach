import React from "react";
import Wave from "../assets/Pictures/Wave.png";
import Dot from "../assets/Pictures/Dot.png";

const Dashboard = () => {
  return (
    <div
      className="main_div mx-auto p-4 mt-3 d-flex flex-row justify-content-center align-items-center rounded-4"
      style={{
        height: "100%",
        width: "90%",
        background: "linear-gradient(78.21deg, #014478 0.07%, #008CC2 99.93%)",
      }}
    >
      <div className="inner_div d-flex flex-row justify-content-center align-items-center">
        <div className="txt text-white w-50 pe-4">
          <div
            className="div-heading"
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "30px",
            }}
          >
            Intelligent Voice Assistance For Real Estate Professionals
          </div>
          <div
            className="div-paragraph mt-3"
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "13px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio integer sed ornare
              lacus etiam diam. Nibh enim dignissim nam urna sagittis sagittis.
            </p>
          </div>
          <div
            className="div.points "
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "15px",
            }}
          >
            <p>
              {" "}
              <i class="bi bi-check2-circle me-3"></i> Lorem ipsum dolor sit
              amet Mauris ut.
            </p>
            <p>
              {" "}
              <i class="bi bi-check2-circle me-3"></i> Lorem ipsum dolor sit
              amet Mauris ut.
            </p>
            <p>
              {" "}
              <i class="bi bi-check2-circle me-3"></i> Lorem ipsum dolor sit
              amet Mauris ut.
            </p>
            <p>
              {" "}
              <i class="bi bi-check2-circle me-3"></i> Lorem ipsum dolor sit
              amet Mauris ut.
            </p>
          </div>
        </div>

        <div className="imges w-50">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="bg-light p-4 rounded-4 d-flex flex-column justify-content-center align-items-center text-dark">
                <i class="bi bi-activity"></i>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "15px",
                  }}
                >
                  Engagement Rate
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "12px",
                  }}
                >
                  No data to show yet.
                </p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="bg-light p-4 rounded-4 d-flex flex-column justify-content-center align-items-center text-dark">
                <i class="bi bi-heart"></i>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "15px",
                  }}
                >
                  Engagements
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "12px",
                  }}
                >
                  No data to show yet.
                </p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="bg-light p-4 rounded-4 d-flex flex-column justify-content-center align-items-center text-dark">
                <i class="bi bi-lightbulb"></i>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "15px",
                  }}
                >
                  Impressions
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "15px",
                  }}
                >
                  6
                </p>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="bg-light p-4 rounded-4 d-flex flex-column justify-content-center align-items-center text-dark">
                <i class="bi bi-eye"></i>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "15px",
                  }}
                >
                  Profile Visits
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "12px",
                  }}
                >
                  No data to show yet.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="bg-light p-4 rounded-4">
                <div className=" d-flex flex-row justify-content-between">
                  {" "}
                  <div>
                    {" "}
                    <p
                      style={{
                        fontFamily: "Montserrat Alternates, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "10px",
                      }}
                    >
                      Follower activity
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p
                      style={{
                        fontFamily: "Montserrat Alternates, sans-serif",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: "10px",
                      }}
                    >
                      Activity + engagement
                    </p>
                  </div>
                </div>

                <div>
                  {" "}
                  <p
                    style={{
                      fontFamily: "Montserrat Alternates, sans-serif",
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontSize: "10px",
                    }}
                  >
                    See when your followers are most active
                  </p>
                </div>

                <div
                  className="days d-flex flex-row justify-content-around overflow-hidden d-block text-center"
                  style={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "10px",
                  }}
                >
                  <div>
                    <div>Mon</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      10
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>Tue</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      11
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>Wed</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      12
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>Thu</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      13
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>Fri</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      14
                    </div>
                    <img src={Dot} alt="..." />
                  </div>
                  <div>
                    {" "}
                    <div>Sat</div>
                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      15
                    </div>
                  </div>
                </div>
                <img src={Wave} alt="..." className="w-100 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
