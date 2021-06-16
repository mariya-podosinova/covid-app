const Confirmed = ({ data }) => {
  return (
    <p className="result">
      CONFIRMED:{" "}
      {data && data.length > 0
        ? data[data.length - 1].Cases
        : "no data available"}
    </p>
  );
};

export default Confirmed;
