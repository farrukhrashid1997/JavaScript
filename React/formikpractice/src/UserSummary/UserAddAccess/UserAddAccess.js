import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import {
  handleModuelsList,
  rolesList,
  enableLimitFieldList
} from "../../helpers/Constants";
import AddBoxSharp from "@material-ui/icons/LocalHospital";
import Validator from "./Validator";
import FormBoxContainer from "../../common/FormBoxContainer";
import { Grid } from "@material-ui/core";
import CustomDropdown from "../../common/CustomDropdown";
import CustomDropdownMultiple from "../../common/CustomDropdownMultiple";
import strings from "../../localisation";
import CustomTextFieldMasked from "../../common/CustomTextFieldMasked";
import { useSelector } from "react-redux";
import { getFabAccounts, getModules } from "../../selectors/accountsSelector";
import "./style.scss";

function UserAddAccess({
  handleAddUserAccess,
  userAccessesLength,
  addAccessError
}) {
  // const accounts = {
  //   45444444444444444444444: {
  //     accountNumber: "45444444444444444444444",
  //     bankName: "",
  //     checked: true,
  //     country: "AED",
  //     iban: "",
  //     name: "Farrukh Rashid",
  //     swift: "",
  //   },
  // };

  const accounts = useSelector(getFabAccounts);
  const modules = handleModuelsList(useSelector(getModules));

  // const modules = [
  //   { label: "MT940", value: "mt940" },
  //   { label: "RCD", value: "rcd" },
  //   { label: "RCP", value: "rcp" },
  //   { label: "Host to Host", value: "hostToHost" },
  //   { label: "Direct Debit", value: "directDebit" },
  //   { label: "MT101", value: "mt101" },
  // ];

  const handleAccountsArray = values => {
    const accountsArray = [];
    Object.keys(values).forEach(key => {
      const accObject = {
        label: `${values[key].name},${key}`,
        value: key
      };
      accountsArray.push(accObject);
    });

    return accountsArray;
  };

  const [enableLimitField, setEnableLimitField] = useState(false);

  const FormikEffects = () => {
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
      const shouldLimitBeEnabled = enableLimitFieldList.includes(
        values.newRole
      );
      setEnableLimitField(shouldLimitBeEnabled);
      if (!shouldLimitBeEnabled) setFieldValue("newLimit", "");
    }, [values.newRole, setFieldValue]);
    return null;
  };

  return (
    <Formik
      initialValues={{
        newProduct: modules[0].value,
        newAccountList: [],
        newRole: rolesList[0].value,
        newLimit: ""
      }}
      validationSchema={Validator}
      onSubmit={(values, actions) => {
        handleAddUserAccess({
          id: userAccessesLength + 1,
          product: modules.filter(
            product => product.value === values.newProduct
          )[0],
          accounts: values.newAccountList,
          role: rolesList.filter(role => role.value === values.newRole)[0],
          limit: values.newLimit
        });
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue, handleChange, handleSubmit }) => (
        <FormBoxContainer>
          <FormikEffects />
          <div className="add-user-access-form-container">
            <div className="add-user-access-fields-container">
              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <CustomDropdown
                    value={values.newProduct}
                    menuItem={modules}
                    label={strings.proudct}
                    handleChange={value => setFieldValue("newProduct", value)}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <CustomDropdownMultiple
                    name="newAccountsList"
                    label={strings.account}
                    listValue={values.newAccountList}
                    menuItem={handleAccountsArray(accounts)}
                    setListValue={value =>
                      setFieldValue("newAccountList", value)
                    }
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <CustomDropdown
                    name="newRole"
                    label={strings.role}
                    menuItem={rolesList}
                    withCustomMenuItemClasses
                    value={values.newRole}
                    handleChange={value => setFieldValue("newRole", value)}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <CustomTextFieldMasked
                    name="newLimit"
                    label={strings.limit}
                    customChange={setFieldValue}
                    value={values.newLimit}
                    disabled={!enableLimitField}
                  />
                </Grid>
              </Grid>
            </div>
            <button
              className="add-user-access-button-container"
              onClick={handleSubmit}
              type="button"
            >
              <AddBoxSharp />
            </button>
          </div>
          <p className="user-access-form-error-text">{addAccessError}</p>
        </FormBoxContainer>
      )}
    </Formik>
  );
}

export default UserAddAccess;
