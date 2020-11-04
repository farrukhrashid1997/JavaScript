import React, { useState, useEffect } from "react";
import Constants from "../../helpers/Constants";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import strings from "../../localisation";
import CustomCheckBox from "../CustomCheckBox";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function CustomDropdownMultiple({ label, listValue, menuItem, setListValue }) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const isAllSelected = () => {
    return listValue.length === menuItem.length;
  };

  const handleChange = (event) => {
    event.target.value.includes(Constants.selectAll)
      ? handleSelectAll()
      : setListValue(event.target.value);
  };

  const handleSelectAll = () => {
    if (listValue.length === menuItem.length) {
      setListValue([]);
    } else {
      const tempCheckBoxList = [];
      menuItem.forEach((item) => {
        tempCheckBoxList.push(item.value ? item.value : item);
      });
      setListValue(tempCheckBoxList);
    }
  };

  const handleCheck = (item) => {
    const checkedArray = [...listValue];
    return checkedArray.includes(item.value);
  };
  const handleRender = (selected) => {
    const selectArray = [];
    const isObject = typeof menuItem[0] === "object";
    isObject &&
      selected.forEach((item) => {
        const itemIndex = menuItem.findIndex(
          (menuItemObject) => menuItemObject.value === item
        );
        itemIndex > -1 && selectArray.push(menuItem[itemIndex].label);
      });
    return isObject ? selectArray.join(", ") : selected.join(", ");
  };

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  });
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel ref={inputLabel}>{label}</InputLabel>
      <Select
        fullWidth
        IconComponent={ExpandMoreIcon}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        }}
        value={listValue}
        multiple
        onChange={handleChange}
        variant="outlined"
        renderValue={handleRender}
        labelWidth={labelWidth}
      >
        <MenuItem key={Constants.selectAll} value={Constants.selectAll}>
          <CustomCheckBox value={isAllSelected()}></CustomCheckBox>
          <ListItemText primary={strings.selectAll}></ListItemText>
        </MenuItem>
        {menuItem.map((item) => (
          <MenuItem key={item.value} value={item.value ? item.value : item}>
            <CustomCheckBox value={handleCheck(item)} />
            <ListItemText primary={item.label ? item.label : item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomDropdownMultiple;

CustomDropdownMultiple.propTypes = {
  label: PropTypes.string.isRequired,
  listValue: PropTypes.array.isRequired,
  menuItem: PropTypes.array.isRequired,
  setListValue: PropTypes.func.isRequired,
};
