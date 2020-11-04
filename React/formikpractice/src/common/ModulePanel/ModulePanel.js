import React, { useState, useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from "prop-types";
import "./style.scss";
import CustomCheckBox from "../CustomCheckBox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import strings from "../../localisation";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function ModulePanel({
  list,
  handleCheckBoxChange,
  checkBoxValue,
  children,
  expandStatus,
  setExpandStatus,
  editable,
}) {
  const OverrideExpansionPanelSummary = withStyles(() => ({
    root: {
      minHeight: "41px !important",
    },
  }))(ExpansionPanelSummary);
  const [expand, setExpand] = useState(false);
  const handleExpand = (value) => {
    if (expandStatus[list] !== value) {
      setExpandStatus({ ...expandStatus, [list]: value });
      setExpand(value);
    }
  };
  useEffect(() => {
    setExpand(expandStatus[list]);
  }, [expandStatus]);
  return (
    <ExpansionPanel
      defaultExpanded={expand}
      expanded={expand}
      key={list}
      id={list}
    >
      <OverrideExpansionPanelSummary
        onClick={() => {
          handleExpand(!expand);
        }}
        // children &&
        expandIcon={ editable && <ExpandMoreIcon />}
      >
        <CustomCheckBox
          handleChange={handleCheckBoxChange}
          value={checkBoxValue}
          id={list}
          title={strings[list]}
        />
      </OverrideExpansionPanelSummary>
      <ExpansionPanelDetails>
        {children && <div className="module-children-container">
          <Grid container spacing={4}>
            {children}
          </Grid>
        </div>}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ModulePanel.propTypes = {
  list: PropTypes.string.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
  checkBoxValue: PropTypes.bool.isRequired,
  children: PropTypes.array,
  expandStatus: PropTypes.object.isRequired,
  setExpandStatus: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

ModulePanel.defaultProps = {
  children: null,
  editable: true,
};

export default ModulePanel;
