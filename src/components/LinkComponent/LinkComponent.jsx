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
);
export default LinkComponent;
