import React from "react";
import GetComponent from "../GetComponent/GetComponent";

// Import css module styles
import styles from "./BoxComponent.module.css";

const BoxComponent = ({ Content, Children }) => {
  // Set default border size if non provided
  const borderSize =
    Content.props !== undefined ? Content.props.borderSize : "0.5px";
  // Extract children components into an array
  const newData = [];
  for (let i in Children) newData.push(Children[i]);
  // Return the box component with border size
  // and other renderable children
  return (
    <div
      className={styles.box_component}
      style={{ border: `${borderSize} solid black` }}
    >
      {newData.map((item, index) => (
        <GetComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default BoxComponent;
