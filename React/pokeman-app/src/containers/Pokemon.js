import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import { Typography } from "@material-ui/core";

const Pokemon = ({ match }) => {
  const pkName = match.params.pokemon;
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(getPokemon(pkName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemon.data[pkName])) {
      const sPokemon = pokemon.data[pkName];
      return (
        <div className="pokemon-wrapper">
          <div className={"item"}>
            <Typography variant="h5">Sprites</Typography>
            <img src={sPokemon.sprites.front_default} alt="" />
            <img src={sPokemon.sprites.back_default} alt="" />
            <img src={sPokemon.sprites.front_shiny} alt="" />
            <img src={sPokemon.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <Typography variant="h5">Stats</Typography>
            {sPokemon.stats.map((el) => (
              <p>
                {el.stat.name} &nbsp;
                {el.base_stat}
              </p>
            ))}
          </div>
          <div>
            <Typography variant="h5">Abilities</Typography>
            {sPokemon.abilities.map((el) => (
              <p>{el.ability.name}</p>
            ))}
          </div>
        </div>
      );
    }
    if (pokemon.loading) {
      return <p>Loading...</p>;
    }

    if (pokemon.err !== "") {
      return <p>Unable to show the data.</p>;
    }
  };

  return (
    <div className="poke">
      <Typography variant="h4" className = "heading">{pkName.toUpperCase()}</Typography>
      {showData()}
    </div>
  );
};

export default Pokemon;
