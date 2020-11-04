import React from "react";
import PropTypes from "prop-types";


function FormContainer({ children }) {
  return <div className="form-full-container">{children}</div>;
}

FormContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default FormContainer;
