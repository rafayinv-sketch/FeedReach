import React from "react";

const Card = ({ img, heading, paragraph }) => {
  return (
    <div className="card overflow-hidden position-relative" style={{width: "316px", height: "450px"}}>
      {/* Image */}
      <img className="object-fit-cover" src={img} alt={heading || "..."}style={{width: "100%",height: "100%"}}/>

      {/* Gradient */}
      <div className="position-absolute top-0 bottom-0 start-0 end-0" style={{background:"linear-gradient(180deg, rgba(1, 138, 190, 0) 0%, #014478 100%)",}}></div>

      {/* Text */}
      <div className="position-absolute text-white bottom-0 start-0 mb-3 ms-3" style={{fontFamily:"Montserrat Alternates, sans-serif"}}>
        <h5 style={{fontWeight: 500,fontSize: "15px",}}>{heading}</h5>
        <p className="mt-2 mr-0 ml-1" style={{fontWeight: 300,fontSize: "9px",}}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
