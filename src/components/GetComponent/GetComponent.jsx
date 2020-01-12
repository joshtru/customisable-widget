import React from "react";

// IMPORTING COMPONENTS
import ModalComponent from "../ModalComponent/ModalComponent";
import H1Component from "../H1Component/H1Component";
import H2Component from "../H2Component/H2Component";
import ParagraphComponent from "../ParagraphComponent/ParagraphComponent";
import ListComponent from "../ListComponent/ListComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LinkComponent from "../LinkComponent/LinkComponent";
import BoxComponent from "../BoxComponent/BoxComponent";

export const checkAndGetComponent = passedData => {
  console.log(passedData.Content);
  switch (passedData.Content.type) {
    case "ModalComponent":
      return (
        <ModalComponent
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "H1Component":
      return (
        <H1Component
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "H2Component":
      return (
        <H2Component
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "ParagraphComponent":
      return (
        <ParagraphComponent
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "ListComponent":
      return (
        <ListComponent
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "ButtonComponent":
      return (
        <ButtonComponent
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "LinkComponent":
      return (
        <LinkComponent
          key={passedData.Content.type}
          {...passedData.Content.props}
        />
      );
    case "BoxComponent":
      return <BoxComponent key={passedData.Content.type} {...passedData} />;
    default:
      return (
        <div>
          <h1>Welcome to Customizable Widget.</h1>
          <p>Pass a JSON to see some functions</p>
        </div>
      );
  }
};
const GetComponent = ({ data = [] }) => {
  return (
    <section className="get_component">{checkAndGetComponent(data)}</section>
  );
};

export default GetComponent;
