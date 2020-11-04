import React from "react";
import PropTypes from "prop-types";
import "./style.scss"

function FormBoxContainer({ children }) {
  return <div className="form-box-container">{children}</div>;
}

export default FormBoxContainer;

FormBoxContainer.propTypes = {
  children: PropTypes.array.isRequired,
};
