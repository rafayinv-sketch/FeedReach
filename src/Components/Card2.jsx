import React from "react";

const Card2 = ({ img }) => {
  return (
    <div
      className="card overflow-hidden position-relative"
      style={{ width: "25rem", height: "25rem" }}
    >
      <img src={img} alt="Card" className="w-100 h-100 object-fit-cover" />
    </div>
  );
};

export default Card2;
