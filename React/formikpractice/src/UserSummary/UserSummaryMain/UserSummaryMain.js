import React from "react";
import FormHeader from "../../common/FormHeader";
import strings from "../../localisation";
import AddBox from "@material-ui/icons/AddBox";
import FormContent from "../../common/FormContent";
import FormEmptyNote from "../../common/FormEmptyNote";
import UserExpansionPanel from "../UserExpansionPanel";
import PropTypes from "prop-types";
import { getCorporateUser } from "../../selectors/userSelector";
import { useSelector } from "react-redux";
import FormFooter from "../../common/FormFooter";

function UserSummaryMain({ setInnerStep }) {
  const handleNext = () => {
    return true;
  };

  const corporateUsers = useSelector(getCorporateUser);

  // const corporateUsers = [
  //   {
  //     id: 1,
  //     userId: "farrukhrashid",
  //     firstName: "farrukh",
  //     lastName: "rashid",
  //     tokenType: "SMS OTP",
  //     userAccesses: [
  //       {
  //         accounts: ["45444444444444444444444"],
  //         id: 1,
  //         limit: "4545454",
  //         product: {
  //           label: "Maker",
  //           value: "mt940",
  //         },
  //         role: {
  //           label: "Maker",
  //           value: "MAKER",
  //           class: "maker-menu-item",
  //         },
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <FormHeader
        title={strings.userSummary}
        desc={strings.userSummaryDesc}
        buttonIcon={<AddBox />}
        buttonTitle={strings.addUserDetails}
        buttonFunc={() => setInnerStep(2)}
      />
      <FormContent>
        {corporateUsers.length === 0 ? (
          <FormEmptyNote note={strings.noUsersAdded} />
        ) : (
          corporateUsers.map((user) => (
            <UserExpansionPanel
              user={user}
              id={user.id}
              setInnerStep={setInnerStep}
            />
          ))
        )}
      </FormContent>
      <FormFooter
        primaryFunc={() => handleNext()}
        primary={strings.saveAndContinue}
      />
    </>
  );
}

UserSummaryMain.propTypes = {
  setInnerStep: PropTypes.func.isRequired,
};

export default UserSummaryMain;
