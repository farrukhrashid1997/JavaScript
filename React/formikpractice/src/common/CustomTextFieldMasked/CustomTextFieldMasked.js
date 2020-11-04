import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function NumberFormatCustom({ inputRef, value, onChange, name, ...other }) {
  return (
    <NumberFormat
      defaultValue={999999}
      value={value}
      getInputRef={inputRef}
      thousandSeparator
      isNumericString
      prefix="AED"
      onValueChange={(values) => {
        onChange(name, values.value);
      }}
      {...other}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

function CustomTextFieldMasked({
  variant,
  label,
  error,
  value,
  name,
  errorText,
  customChange,
  disabled,
}) {
  return (
    <TextField
      fullWidth
      prefix="prefix"
      variant={variant}
      InputProps={{ inputComponent: NumberFormatCustom }}
      name={name}
      label={label}
      value={value}
      onChange={customChange}
      disabled={disabled}
    ></TextField>
  );
}

CustomTextFieldMasked.propTypes = {
  error: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  customChange: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

CustomTextFieldMasked.defaultProps = {
  disabled: false,
  variant: "outlined",
};

export default CustomTextFieldMasked;
