import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    alignItems: "flex-end",
  },

  searchOption: {
    color: "white",
  },
}));

const theme = createMuiTheme({});

function App() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.navBar} position="static" xs={12}>
        <Toolbar>
          <NavLink to={"/"} className={classes.searchOption}>
            Search
          </NavLink>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </Box>
  );
}

export default App;
