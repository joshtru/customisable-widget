import modalTypes from "./modal.types";
const INITIAL_STATE = {
  openModal: false
};
const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalTypes.TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal
      };
    case modalTypes.SET_OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload
      };
    default:
      return state;
  }
};

export default modalReducer;
