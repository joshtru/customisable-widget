import React from "react";
import { connect } from "react-redux";
// IMPORTING REDUX ACTION
import { toggleModal } from "../../redux/modal/modal.action";

import styles from "./buttonComponent.module.css";

const ButtonComponent = ({ text, openModal, toggleModal }) => (
  <button className={styles.button} type="button" onClick={() => toggleModal()}>
    {openModal ? "Hide Modal" : `${text}`}
  </button>
);
const mapStateToProps = ({ modal }) => ({
  openModal: modal.openModal
});
const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});
export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
