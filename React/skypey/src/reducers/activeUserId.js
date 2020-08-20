import { SET_ACTIVE_USER_ID } from "../constants/action-types";

const activeIdReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload

    default:
      return state;
  }
};

export default activeIdReducer;
