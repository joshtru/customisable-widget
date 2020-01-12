import React from "react";

const H1Component = ({ text }) =>
  text ? (
    <div>
      <h1>{text}</h1>
    </div>
  ) : null;

export default H1Component;
