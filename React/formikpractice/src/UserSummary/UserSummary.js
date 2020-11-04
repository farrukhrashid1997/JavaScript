import React, { useState } from "react";
import FormContainer from "../common/FormContainer";
import UserSummaryMain from "./UserSummaryMain";
import AddUser from "./AddUser";

function UserSummary() {
  const [innerStep, setInnerStep] = useState(1);

  const setCurrentBoxDisplay = () => {
    switch (innerStep) {
      case 1:
        return <UserSummaryMain setInnerStep={setInnerStep} />;
      case 2:
        return <AddUser setInnerStep={setInnerStep} />;
    }
  };

  return <FormContainer>{setCurrentBoxDisplay()}</FormContainer>;
}

export default UserSummary;
