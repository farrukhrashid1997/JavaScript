import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import strings from "../../localisation";
import Constants from "../../helpers/Constants";

function CustomTextField({ name, formik, maxLength, id, type }) {
  const handleChange = (e) => {
    switch (type) {
      case Constants.number:
        e.target.value = e.target.value.replace(/[^0-9]+/g, "");
        formik.handleChange(e);
        break;
      case Constants.alpha:
        e.target.value = e.target.value.replace(/[^A-Za-z\s]/gi, "");
        formik.handleChange(e);
        break;
      default:
        formik.handleChange(e);
        break;
    }
  };

  return (
    <TextField
      value={formik.values[name]}
      id={id}
      inputProps={{
        maxLength,
      }}
      helperText={
        formik.errors[name] && formik.touched[name] && formik.errors[name]
      }
      label={strings[name]}
      name={name}
      onChange={(e) => handleChange(e)}
      fullWidth
      variant="outlined"
      error={formik.errors[name] && formik.touched[name] && formik.errors[name]}
    />
  );
}

CustomTextField.propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.number,
  id: PropTypes.string,
  formik: PropTypes.object,
  type: PropTypes.string,
};

CustomTextField.defaultProps = {
  name: null,
  id: null,
  maxLength: null,
  formik: { errors: {}, values: {} },
  type: null,
};

export default CustomTextField;
