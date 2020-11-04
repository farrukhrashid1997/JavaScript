import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBox from "@material-ui/core/CheckBox";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import PropTypes from "prop-types";

function CustomCheckBox({ title, value, handleChange, disable, id, padding }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <CheckBox
            color="primary"
            style={{ margin: 0, ...padding }}
            checkedIcon={<CheckBoxOutlinedIcon />}
            onChange={(e) => handleChange(e)}
            checked={value}
            id={id}
          />
        }
        label={title}
      ></FormControlLabel>
    </FormGroup>
  );
}
CustomCheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
  disable: PropTypes.bool,
  id: PropTypes.string,
  padding: PropTypes.object,
};
CustomCheckBox.defaultProps = {
  disable: false,
  id: "",
  value: false,
  padding: {},
  handleChange: () => {},
};
export default CustomCheckBox;
