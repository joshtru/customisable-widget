import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// IMPORTING REDUX ACTION
import { toggleModal } from "../../redux/modal/modal.action";

const ButtonComponent = ({ text, openModal, toggleModal, triggerModal }) => (
  <button type="button" onClick={() => (triggerModal ? toggleModal() : null)}>
    {text}
  </button>
);
// Define prop types
ButtonComponent.defaultProps = {
  triggerModal: true
};
ButtonComponent.propTypes = {
  text: PropTypes.string,
  openModal: PropTypes.bool,
  triggerModal: PropTypes.bool
};
// Get state from redux
const mapStateToProps = ({ modal }) => ({
  openModal: modal.openModal
});
// Dispatch redux action
const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});
export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
