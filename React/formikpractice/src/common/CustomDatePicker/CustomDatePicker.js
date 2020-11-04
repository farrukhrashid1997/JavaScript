import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnUtils from "@date-io/date-fns";
import PropTypes from "prop-types";
import strings from "../../localisation";

function CustomDatePicker({ formik, name, id }) {
  const handleChange = (value) => formik.setFieldValue("dateOfBirth", value);
  return (
    <MuiPickersUtilsProvider utils={DateFnUtils}>
      <DatePicker
        inputVariant="outlined"
        fullWidth
        name={name}
        label={strings[name]}
        disableFuture
        format="dd/MM/yyyy"
        id={id}
        key={id}
        openTo="year"
        views={["year", "month", "date"]}
        value={formik.values[name]}
        onChange={handleChange}
        helperText={
          formik.errors[name] && formik.touched[name] && formik.errors[name]
        }
        variant="variant"
        error={
          formik.errors[name] && formik.touched[name] && formik.errors[name]
        }
      />
    </MuiPickersUtilsProvider>
  );
}

export default CustomDatePicker;
