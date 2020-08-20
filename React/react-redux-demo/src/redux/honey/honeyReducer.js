import { BUY_HONEY } from "./honeyTypes";

const initialState = {
  numOfHoney: 30,
};

const honeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_HONEY:
      return {
        ...state,
        numOfHoney: state.numOfHoney - 1,
      };

    default:
      return state;
  }
};


export default honeyReducer