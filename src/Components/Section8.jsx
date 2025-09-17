import React from "react";
import Yt_1 from "../assets/Pictures/Yt_1.png";
import Yt_2 from "../assets/Pictures/Yt_2.png";
import Yt_3 from "../assets/Pictures/Yt_3.png";
import Yt_4 from "../assets/Pictures/Yt_4.png";
import Yt_5 from "../assets/Pictures/Yt_5.png";
import Card2 from "./Card2";

const Section8 = () => {
  return (
    <div>
      <div className="m-auto mt-5" style={{ width: "65%" }}>
        <div className="d-inline align-items-center text-center ">
          <p
            style={{
              fontFamily: "Montserrat Alternates, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "30px",
            }}
          >
            “Hands down the{" "}
            <span
              style={{
                background:
                  "linear-gradient(88.4deg, #014478 1.96%, #018ABE 91.28%, #D6E7EE 180.6%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              Best Social Media Service
            </span>
            . It's like Hootsuite, but they create amazing content for us and
            post to our socials after we approve"
          </p>
        </div>
      </div>
      <div className="d-flex flex-row mt-5">
        {" "}
        <Card2 img={Yt_1} />
        <Card2 img={Yt_2} />
        <Card2 img={Yt_3} />
        <Card2 img={Yt_4} />
        <Card2 img={Yt_5} />
      </div>
    </div>
  );
};

export default Section8;
