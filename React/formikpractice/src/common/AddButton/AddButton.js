import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import PropTypes from "prop-types";
import "./style.scss";

function AddButton({ handleChange }) {
  return (
    <span
      tabIndex={0}
      role="button"
      className="add-button-icon"
      onClick={handleChange}
    >
      <AddBoxIcon color="primary" />
    </span>
  );
}

export default AddButton;

AddButton.propTypes = {
  handleChange: PropTypes.func.isRequired
}
