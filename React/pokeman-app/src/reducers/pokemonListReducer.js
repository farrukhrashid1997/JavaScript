import {
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_LIST_LOADING,
} from "../constants/actionTypes";

const DefaultState = {
  loading: false,
  data: [],
  err: "",
  count: 0,
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        count: action.payload.count,
      };

    case POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

export default PokemonListReducer;
