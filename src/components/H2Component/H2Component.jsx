import React from "react";

const H2Component = ({ text }) =>
  text ? (
    <div>
      <h2>{text}</h2>
    </div>
  ) : null;

export default H2Component;
