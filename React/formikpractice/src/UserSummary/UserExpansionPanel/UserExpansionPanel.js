import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckBox from "../../common/CustomCheckBox";
import CreateIcon from "@material-ui/icons/Create";
import "./style.scss";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import UserDetailsItem from "../UserDetailsItem";
import UserDetailsTable from "../UserDetailsTable";


function UserExpansionPanel({ user, setInnerStep }) {
  const [expandPanel, setExpandPanel] = useState(false);
  return (
    <ExpansionPanel expanded={expandPanel}>
      <ExpansionPanelSummary
        onClick={() => setExpandPanel(!expandPanel)}
        expandIcon={<ExpandMoreIcon />}
        classes={{ root: "user-summary-container" }}
      >
        <FormControlLabel
          control={
            <CustomCheckBox
              id={user.id}
              padding={{ paddingLeft: 10, paddingRight: 10 }}
            />
          }
          label={`${user.firstName} ${user.lastName}`}
        />
        <span className="corporate-panel-container-icon">
          <CreateIcon onClick={() => true} style={{ color: "#637488" }} />
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{ root: "user-details-container" }}>
        <UserDetailsItem user={user} />
        <UserDetailsTable rows={user.userAccesses} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default UserExpansionPanel;
