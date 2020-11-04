import React, { useRef, useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

function CustomDropdown({
  value,
  variant,
  label,
  menuItem,
  handleChange,
  withCustomMenuItemClasses,
}) {
  const inputLabel = useRef(null);
  const [labelWidth, setlabelWidth] = useState(0);

  useEffect(() => {
    setlabelWidth(inputLabel.current.offsetWidth);
  });

  return (
    <FormControl variant={variant} fullWidth>
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        fullWidth
        IconComponent={ExpandMoreIcon}
        variant={variant}
        onChange={(e) => handleChange(e.target.value)}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        }}
        value={value}
        labelWidth={labelWidth}
      >
        {menuItem.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            classes={withCustomMenuItemClasses ? { root: item.class } : {}}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

CustomDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  menuItem: PropTypes.array.isRequired,
  variant: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

CustomDropdown.defaultProps = {
  variant: "outlined",
  withCustomMenuItemClasses: false,
};

export default CustomDropdown;
