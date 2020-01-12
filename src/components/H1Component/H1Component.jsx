import React from "react";
import PropTypes from "prop-types";

const H1Component = ({ text }) =>
  text ? (
    <div>
      <h1>{text}</h1>
    </div>
  ) : null;

H1Component.propTypes = {
  text: PropTypes.string
};

export default H1Component;
