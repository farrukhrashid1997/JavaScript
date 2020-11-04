import React from "react";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, withStyles } from "@material-ui/core/styles";

function TableChip({ accountNumber, label, handleDelete }) {
  const useStyles = makeStyles({
    tableChipIcon: {
      width: 15,
      height: 15,
    },
    tableAddressChipIcon: {
      width: 15,
      height: 15,
      color: "#003087",
    },
    accountLabel: {
      color: "#003087",
    },
  });

  const StyledCloseIcon = withStyles(() => ({
    root: {
      "&:hover": {
        color: "black",
      },
    },
  }))(CloseIcon);

  const chipLabel = () =>
    accountNumber ? (
      <>
        <span className={classes.accountLabel}>{accountNumber},</span>
        <span>{label}</span>
      </>
    ) : (
      <span>{label}</span>
    );
  const classes = useStyles();
  return (
    <Chip
      deleteIcon={
        <StyledCloseIcon
          className={
            accountNumber ? classes.tableAddressChipIcon : classes.tableChipIcon
          }
        />
      }
      label={chipLabel()}
      variant="outlined"
      onDelete={handleDelete}
    />
  );
}

export default TableChip;

TableChip.propTypes = {
  accountNumber: PropTypes.string,
  label: PropTypes.string.isRequired,
};

TableChip.default = {
  accountNumber: null,
};
