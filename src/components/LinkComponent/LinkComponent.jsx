import React from "react";

const LinkComponent = ({ text, url }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={`${url}`}
    title={`${text}`}
  >
    {text}
  </a>
// Define prop types
LinkComponent.defaultProps = {
  triggerModal: false,
  url: "#"
};
LinkComponent.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  triggerModal: PropTypes.bool
};
