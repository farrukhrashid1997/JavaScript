import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function FormEmptyNote({ note }) {
  return <div className="form-empty-note">{note}</div>;
}

FormEmptyNote.propTypes = {
  note: PropTypes.string.isRequired,
};

export default FormEmptyNote;
