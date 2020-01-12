import React from "react";
import PropTypes from "prop-types";
import styles from "./ListComponent.module.css";
const ListComponent = ({ li }) =>
  li ? (
    <div className={styles.list_component}>
      <ul>
        {li.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  ) : null;

ListComponent.propTypes = {
  li: PropTypes.arrayOf(PropTypes.string)
};

export default ListComponent;
