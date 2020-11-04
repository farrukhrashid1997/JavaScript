import React from "react";
import Delete from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

function DeleteButton({ handleDelete }) {
  const useStyles = makeStyles({
    deleteButton: {
      outline: "none",
    },
  });

  const classes = useStyles();
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleDelete}
      className={classes.deleteButton}
    >
      <Delete />
    </span>
  );
}

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
