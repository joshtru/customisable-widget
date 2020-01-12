import React, { useEffect } from "react";
import { connect } from "react-redux";
import GetComponent from "../GetComponent/GetComponent";
import { setOpenModal, toggleModal } from "../../redux/modal/modal.action";
// Importing styles
import styles from "./ModalComponent.module.css";

const ModalComponent = ({
  Content: {
    props: { isOpen = false, width = "400px", height = "350px" }
  },
  Children,
  openModal,
  setOpenModal,
  toggleModal
}) => {
  // Extract children components into an array
  const modalChildren = [];
  for (let i in Children) modalChildren.push(Children[i]);
  // On component did load,
  // set the open modal with a value from JSON
  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen, setOpenModal]);
  // Return the modal component with width, height
  // and other renderable children
  return (
    <div
      className={styles.modal_component}
      style={{
        display: openModal ? "block" : "none"
      }}
    >
      <div
        className={styles.modal_content}
        style={{
          width: `${width}`,
          height: `${height}`
        }}
      >
        <span className={styles.close_modal} onClick={() => toggleModal()}>
          &#10005;
        </span>
        {modalChildren.map((item, index) => (
          <GetComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({
  openModal: modal.openModal
});
const mapDispatchToProps = dispatch => ({
  setOpenModal: show => dispatch(setOpenModal(show)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
