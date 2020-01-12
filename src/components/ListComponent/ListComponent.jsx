import React from "react";
import PropTypes from "prop-types";

const ListComponent = ({li}) =>
  li ? (
    <div>
      <ul>
        {li.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  ) : null;

ListComponent.propsTypes = {
  li: PropTypes.string
};

export default ListComponent;
