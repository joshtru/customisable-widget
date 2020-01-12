import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// IMPORTING REDUX ACTION
import { toggleModal } from "../../redux/modal/modal.action";

const LinkComponent = ({ text, url, triggerModal, toggleModal }) =>
  text ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`${url}`}
      title={`${text}`}
      onClick={() => (triggerModal ? toggleModal() : null)}
    >
      {text}
    </a>
  ) : null;
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

// Dispatch redux action
const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});
export default connect(null, mapDispatchToProps)(LinkComponent);
