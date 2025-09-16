const SectionTag = ({ Icon, title }) => {
  return (
    <div className="div1-1 shadow d-flex flex-row justify-content-center align-items-center text-center border border-secondary-subtle rounded-pill p-2 mb-3">
      {Icon && <img src={Icon} alt="..." className="me-2" />}
      <p
        className="m-0"
        style={{
          fontFamily: "Inter Tight, sans-serif",
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "8px",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default SectionTag;
