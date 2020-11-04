import React from "react";
import PropTypes from "prop-types";
import "./style.scss"

function FormContent({ children }) {
  return <div className="form-content-row">{children}</div>;
}

FormContent.propTypes = {
  children: PropTypes.array.isRequired,
};

export default FormContent;
