import React, { useState } from "react";
import FormContainer from "./common/FormContainer";
import FormHeader from "./common/FormHeader";
import strings from "./localisation";
import ExpandAllButton from "./common/ExpandAllButton";
import FormContent from "./common/FormContent";
import { servicesList } from "./helpers/Constants";
import ModulePanel from "./common/ModulePanel";
import Constants from "./helpers/Constants";
import { Grid } from "@material-ui/core";
import CustomCheckBox from "./common/CustomCheckBox";
import { withStyles } from "@material-ui/core/styles";

function ModuleAccessPractice() {
  const [checkBoxList, setCheckBoxList] = useState({
    payments: false,
    payrollServices: false,
    tradeFacility: false,
    otherServices: false,
  });

  const [expandStatus, setExpandStatus] = useState({
    payments: false,
    otherServices: false,
    payrollServices: false,
    tradeFacility: false,
  });

  const handleSelectAll = (service, event) => {
    const tempCheckBoxList = { ...checkBoxList };
    tempCheckBoxList[service] = event.target.checked;
    servicesList[service].forEach((item) => {
      tempCheckBoxList[item.value] = event.target.checked;
    });
    setCheckBoxList(tempCheckBoxList);
  };

  const handleCheckBoxChange = (event) => {
    switch (event.target.id) {
      case Constants.otherServices:
        handleSelectAll(Constants.otherServices, event);
        break;
      case Constants.payrollServices:
        handleSelectAll(Constants.payrollServices, event);
        break;
      case Constants.tradeFacility:
        handleSelectAll(Constants.tradeFacility, event);
        break;

      default:
        setCheckBoxList({
          ...checkBoxList,
          [event.target.id]: event.target.checked,
        });
        break;
    }
  };

  return (
    <FormContainer>
      <FormHeader
        title={strings.moduleAccess}
        desc={strings.selectMultipleService}
      />
      <ExpandAllButton
        expandStatus={expandStatus}
        setExpandStatus={setExpandStatus}
      />
      <FormContent>
        {Object.keys(servicesList).map((list) => (
          <ModulePanel
            expandStatus={expandStatus}
            setExpandStatus={setExpandStatus}
            handleCheckBoxChange={handleCheckBoxChange}
            checkBoxValue={checkBoxList[list]}
            key={list}
            list={list}
          >
            {servicesList[list].length !== 0 &&
              servicesList[list].map((item) => (
                <Grid item xs={6} md={3}>
                  <CustomCheckBox
                    handleChange={handleCheckBoxChange}
                    value={checkBoxList[item.value]}
                    id={item.value}
                    title={item.label}
                  ></CustomCheckBox>
                </Grid>
              ))}
          </ModulePanel>
        ))}
      </FormContent>
    </FormContainer>
  );
}

export default ModuleAccessPractice;
