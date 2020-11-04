import {
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
} from "../constants/actionTypes";

const DefaultState = {
  loading: false,
  data: {},
  err: "",
};

const pokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        err: "",
      };
    case POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    case POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        err: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default pokemonMultipleReducer;
