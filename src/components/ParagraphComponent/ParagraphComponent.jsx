import React from "react";

const ParagraphComponent = ({ text }) =>
  text ? (
    <div>
      <p>{text}</p>
    </div>
  ) : null;

export default ParagraphComponent;
