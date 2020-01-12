import { combineReducers } from "redux";

// IMPORT REDUCERS
import modalReducer from "./modal/modal.reducer";

const rootreducer = combineReducers({
  modal: modalReducer
});

export default rootreducer;
