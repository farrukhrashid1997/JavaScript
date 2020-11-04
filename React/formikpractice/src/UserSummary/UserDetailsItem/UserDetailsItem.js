import React from "react";
import { Grid } from "@material-ui/core";
import strings from "../../localisation";
import "./style.scss";
import PropTypes from "prop-types";
import { convertDate } from "../../helpers/Constants";

const UserDetailsItem = ({ user }) => {
  return (
    <Grid container spacing={2}>
      <Grid container item md={6} xs={12}>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.userId}
          </div>
          <div className="corporate-details-item-col-value">{user.userId}</div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.userGroup}
          </div>
          <div className="corporate-details-item-col-value">
            {user.userGroup}
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.dateOfBirth}
          </div>
          <div className="corporate-details-item-col-value">
            {convertDate(user.dateOfBirth)}
          </div>
        </Grid>
      </Grid>
      <Grid container item md={6} xs={12}>
        <Grid item md={4}>
          <div className="corporate-details-item-col-title">
            {strings.emailAddress}
          </div>
          <div className="corporate-details-item-col-value">{user.email}</div>
        </Grid>
      </Grid>
      <Grid container item md={6} xs={12}>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.mothersMaidenName}
          </div>
          <div className="corporate-details-item-col-value">
            {user.mothersMaidenName}
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.eidOrPassportNumber}
          </div>
          <div className="corporate-details-item-col-value">
            {user.eidOrPassportNumber}
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.mobileNumber}
          </div>
          <div className="corporate-details-item-col-value">
            {user.mobileNumber}
          </div>
        </Grid>
      </Grid>
      <Grid container item md={6} xs={12}>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.location}
          </div>
          <div className="corporate-details-item-col-value">
            {user.location}
          </div>
        </Grid>
        <Grid item md={4} xs={6}>
          <div className="corporate-details-item-col-title">
            {strings.tokenType}
          </div>
          <div className="corporate-details-item-col-value">
            {user.tokenType}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
UserDetailsItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserDetailsItem;
