import React from "react";
import PropTypes from "prop-types";

const ParagraphComponent = ({ text }) =>
  text ? (
    <div>
      <p>{text}</p>
    </div>
  ) : null;

ParagraphComponent.propTypes = {
  text: PropTypes.string
};

export default ParagraphComponent;
