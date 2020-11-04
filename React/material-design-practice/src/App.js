import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  // background: {
  //   backgroundColor: "teal",
  //   height: "100%",
  // },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" spacing={10}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
