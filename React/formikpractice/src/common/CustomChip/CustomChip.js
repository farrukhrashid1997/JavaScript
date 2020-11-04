import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

const CustomChip = ({ onDelete, type, label }) => {
  const ChipOverride = withStyles(() => ({
    root: {
      borderRadius: 4,
      margin: 6,
      border: "solid 1px #d9e2e8",
      backgroundColor: "#f6f7f8",
    },
    label: {
      fontSize: 12,
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: -0.26,
      textAlign: "center",
      color: "#637488",
    },
  }))(Chip);

  const useStyles = makeStyles({
    orangeChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #f0dfcc",
      backgroundColor: "#fff4e8",
    },

    greenChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #cae4d2",
      backgroundColor: "#e8ffef",
    },
    redChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #e4b2b2",
      backgroundColor: "#ffe8e8",
    },
    yellowChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #ebe9b7",
      backgroundColor: "#fffee8",
    },
    blueChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #b7d7f5",
      backgroundColor: "#e8f4ff",
    },
    purpleChip: {
      borderRadius: "4px",
      margin: "8px",
      color: "#637488",
      border: "solid 1px #cdc5ff",
      backgroundColor: "#ebe8ff",
    },
    root: {
      boxShadow: "none",
    },
    table: {
      boxShadow: "",
    },
    tableAddressChipIcon: {
      width: 15,
      height: 15,
      color: "#003087",
    },
  });

  const classes = useStyles();

  let className = "";
  switch (type) {
    case "MAKER":
      className = classes.orangeChip;
      break;
    case "APPROVER":
      className = classes.greenChip;
      break;
    case "SELF_AUTHORIZER":
      className = classes.blueChip;
      break;
    case "INQUIRY_ONLY":
      className = classes.redChip;
      break;
    case "VERIFIER":
      className = classes.yellowChip;
      break;
    case "RELEASER":
      className = classes.purpleChip;
      break;
    default:
      className = "defaultChip";
  }

  return (
    <ChipOverride
      className={className}
      label={label}
      deleteIcon={
        onDelete ? <CloseIcon className={classes.tableAddressChipIcon} /> : null
      }
      onDelete={onDelete}
    />
  );
};

CustomChip.propTypes = {
  type: PropTypes.string,
  onDelete: PropTypes.func,
  label: PropTypes.string.isRequired,
};

CustomChip.defaultProps = {
  type: "",
  onDelete: null,
};

export default CustomChip;
