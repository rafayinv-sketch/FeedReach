import React from "react";

const Btn = ({ text, size = "md" }) => {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  return (
    <div className="div-btn">
      <button className={`btn btn-dark m-1 ${sizeClass}`} type="button">
        {text} <i className="bi bi-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default Btn;
