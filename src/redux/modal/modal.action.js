import modalTypes from "./modal.types";

export const toggleModal = () => ({
  type: modalTypes.TOGGLE_MODAL
});

export const setOpenModal = payload => ({
  type: modalTypes.SET_OPEN_MODAL,
  payload
});
