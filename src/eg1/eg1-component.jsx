import React from "react";

const Netflix = () => {
  return <h2>Netflix</h2>;
};

const Movies = () => {
  return <h3>Movies</h3>;
};

const WebSeries = () => {
  return <h3>Web Series</h3>;
};

const Eg1Component = () => {
  return (
    <div>
      <h1>Example 1</h1>
      <Netflix />
      <Movies />
      <WebSeries />
    </div>
  );
};

export default Eg1Component;