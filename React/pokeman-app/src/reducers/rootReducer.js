import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer";
import PokemonMultipleReducer from "./pokemonMultipleReducer";

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
});

export default rootReducer;
