import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
} from "../constants/actionTypes";
import axios from "../apis/axios";

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch(pokemonLoading());
    const perPage = 15;
    const offset = page * perPage - perPage;
    const res = await axios.get(`?limit=15&offset=${offset}`);
    dispatch(pokemonSuccess(res));
  } catch (e) {
    dispatch(pokemonFail(e));
  }
};

export const getPokemon = (pokemonName) => async (dispatch) => {
  try {
    dispatch(pokemonMultipleLoading());
    const res = await axios.get(`/${pokemonName}`);
    dispatch(pokemonMultipleSuccess(res.data, pokemonName));
  } catch (error) {
    dispatch(pokemonMultipleFail(error));
  }
};

const pokemonLoading = () => {
  return {
    type: POKEMON_LIST_LOADING,
  };
};

const pokemonSuccess = (res) => {
  return {
    type: POKEMON_LIST_SUCCESS,
    payload: res.data,
  };
};

const pokemonFail = (err) => {
  return {
    type: POKEMON_LIST_FAIL,
    payload: err,
  };
};

const pokemonMultipleLoading = () => {
  return {
    type: POKEMON_MULTIPLE_LOADING,
  };
};

const pokemonMultipleSuccess = (res, pokemonName) => {
  return {
    type: POKEMON_MULTIPLE_SUCCESS,
    payload: res,
    pokemonName: pokemonName,
  };
};

const pokemonMultipleFail = (err) => {
  return {
    type: POKEMON_MULTIPLE_FAIL,
    payload: err,
  };
};
