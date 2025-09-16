import React from "react";

const Btn = ({ text }) => {
  return (
    <div className="div-btn">
      <button className="btn btn-dark m-1" type="submit">
        {text} <i className="bi bi-arrow-up-right"></i>
      </button>
    </div>
  );
};

export default Btn;
