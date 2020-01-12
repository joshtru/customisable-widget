import React from "react";
import PropTypes from "prop-types";

const H2Component = ({ text }) =>
  text ? (
    <div>
      <h2>{text}</h2>
    </div>
  ) : null;

H2Component.propTypes = {
  text: PropTypes.string
};

export default H2Component;
