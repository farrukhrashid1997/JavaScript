import React from "react";
import FormBoxContainer from "../../../common/FormBoxContainer";
import { Grid } from "@material-ui/core";
import CustomTextField from "../../../common/CustomTextField";
import Constants from "../../../helpers/Constants";
import strings from "../../../localisation";
import CustomDatePicker from "../../../common/CustomDatePicker";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

function AddUserForm({ mainFormFormik }) {
  return (
    <FormBoxContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextField
            name="userId"
            maxLength={16}
            formik={mainFormFormik}
          />
          <p className="add-user-note">{strings.userIDFieldNote}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            name="userGroup"
            maxLength={20}
            formik={mainFormFormik}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CustomTextField
            type={Constants.alpha}
            name="firstName"
            formik={mainFormFormik}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomTextField
            type={Constants.alpha}
            name="lastName"
            formik={mainFormFormik}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomTextField
            type={Constants.alpha}
            name="mothersMaidenName"
            formik={mainFormFormik}
            maxLength={24}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CustomTextField
            name="eidOrPassportNumber"
            maxLength={31}
            formik={mainFormFormik}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomDatePicker formik={mainFormFormik} name="dateOfBirth" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomTextField name="email" formik={mainFormFormik} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextField
            name="mobileNumber"
            maxLength={33}
            formik={mainFormFormik}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            name="location"
            maxLength={37}
            formik={mainFormFormik}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="position"
            name="position"
            value={mainFormFormik.values.tokenType}
            onChange={(event) => {
              mainFormFormik.setFieldValue("tokenType", event.target.value);
            }}
            row
          >
            <FormControlLabel
              value="Soft Token"
              control={<Radio color="primary" />}
              label={strings.softToken}
              labelPlacement="0"
            />
            <FormControlLabel
              value="Hard Token"
              control={<Radio color="primary" />}
              label={strings.hardToken}
              labelPlacement="end"
            />
            <FormControlLabel
              value="SMS OTP"
              control={<Radio color="primary" />}
              label={strings.smsOtp}
              labelPlacement="end"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </FormBoxContainer>
  );
}

export default AddUserForm;
