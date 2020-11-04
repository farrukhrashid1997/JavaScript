import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" xs={12}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          ONLINE COFFEE SHOP
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
