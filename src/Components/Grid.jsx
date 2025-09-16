import React from "react";
import Rating from "../assets/Pictures/Rating.png";
import People from "../assets/Pictures/People.png";

const Grid = () => {
  const reviews = [
    {
      title: "Customer Experience",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat at in adipiscing consequat. Placerat pharetra mattis dolor faucibus volutpat at quam. Scelerisque donec ac pharetra turpis vulputate amet semper. Vitae facilisi turpis mi eget nulla lobortis lectus sed quis.",
      author: "Alexis Graham",
      date: "26, April 2025",
    },
    {
      title: "Customer Experience",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat at in adipiscing consequat. Placerat pharetra mattis dolor faucibus volutpat at quam. Scelerisque donec ac pharetra turpis vulputate amet semper. Vitae facilisi turpis mi eget nulla lobortis lectus sed quis.",
      author: "Alexis Graham",
      date: "26, April 2025",
    },
    {
      title: "Customer Experience",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat at in adipiscing consequat. Placerat pharetra mattis dolor faucibus volutpat at quam. Scelerisque donec ac pharetra turpis vulputate amet semper. Vitae facilisi turpis mi eget nulla lobortis lectus sed quis.",
      author: "Alexis Graham",
      date: "26, April 2025",
    },
  ];

  return (
    <div
      className="container my-5"
      style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
    >
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-3 col-12 border-start border-secondary d-flex flex-column align-items-center justify-content-center py-3 gap-4">
          <h2
            style={{
              background:
                "linear-gradient(88.4deg, #014478 1.96%, #018ABE 91.28%, #D6E7EE 180.6%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              fontSize: "40px",
              margin: 0,
            }}
          >
            4.9
          </h2>

          <img src={Rating} alt="rating" style={{ width: "130px" }} />

          <p style={{ fontWeight: 400, fontSize: "15px", margin: 0 }}>
            2000+ Reviews
          </p>

          <img src={People} alt="people" style={{ width: "150px" }} />
        </div>

        {/* Columns 2–4 */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className="col-md-3 col-12 border-start border-secondary d-flex flex-column align-items-start justify-content-center py-3"
            style={{ fontWeight: 400, fontSize: "15px" }}
          >
            <h5>{review.title}</h5>
            <p>{review.text}</p>
            <p>
              <strong>{review.author}</strong>
            </p>
            <p className="text-muted">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
