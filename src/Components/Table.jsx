import React from "react";

const ComparisonTable = () => {
  const features = [
    "Affordable, High-Quality Service",
    "Transparent and Reliable",
    "Flexible Plans",
    "Human-Driven Creativity",
  ];

  return (
    <div
      className="table-responsive w-75 p-5 rounded-5"
      style={{ overflow: "hidden" }}
    >
      <div
        className="rounded-top-4"
        style={{
          background: " #01669A",
          width: "291px",
          marginLeft: "282px",
          marginTop: "-25px",
          position: "absolute",
        }}
      >
        {" "}
        <p style={{ color: "#01669A" }}>.</p>
      </div>
      <table className="table table-bordered text-center align-middle mb-0">
        <thead>
          <tr>
            <th
              className="bg-light text-start fs-5 fw-bold"
              style={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "25px",
              }}
            >
              Features
            </th>
            <th
              className="text-white fs-5 fw-bold"
              style={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "25px",
                background: " #01669A",
              }}
            >
              Why Choose Feadreach
            </th>
            <th
              className="bg-light fs-5 fw-bold"
              style={{
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "25px",
              }}
            >
              Traditional Alternative
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "15px",
          }}
        >
          {features.map((feature, index) => (
            <tr key={index}>
              <td className="text-start">{feature}</td>
              <td className="text-white" style={{ background: " #01669A" }}>
                <i class="bi bi-check2-circle" size={20}></i>
              </td>
              <td className="text-danger">
                <i class="bi bi-check2-circle" size={20}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="rounded-bottom-4"
        style={{
          background: " #01669A",
          width: "291px",
          marginLeft: "282px",
          marginTop: "-13px",
          position: "absolute",
        }}
      >
        {" "}
        <p style={{ color: "#01669A" }}>.</p>
      </div>
    </div>
  );
};

export default ComparisonTable;
