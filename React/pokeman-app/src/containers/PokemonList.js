import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import "../App.css";
import ReactPaginate from "react-paginate";
import { Box, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    margin: "auto",
    width: "90%",
  },
  pokemonItem: {
    border: `2px solid #90afd1`,
    borderRadius: "7px",
    width: "100%;",
    padding: "10px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const PokemonList = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <Box component="div" className={classes.listRoot}>
          {pokemonList.data.results.map((el) => (
            <Box className={classes.pokemonItem}>
              <Typography>{el.name}</Typography>
              <Link to={`/pokemon/${el.name}`}>View</Link>
            </Box>
          ))}
        </Box>
      );
    }

    if (pokemonList.err !== "") {
      return <p>Error</p>;
    }
  };
  return (
    <Box>
      <Box className={classes.searchWrapper}>
        <form onSubmit={() => props.history.push(`/pokemon/${search}`)}>
          <TextField
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            label="Search for a pokemon"
            autoFocus={true}
          />
        </form>
      </Box>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <Pagination
          count={Math.ceil(pokemonList.count / 15)}
          boundaryCount={1}
          onChange={(event, value) => fetchData(value)}
          variant="outlined"
          className={classes.pagination}
        />
      )}
    </Box>
  );
};

export default PokemonList;
