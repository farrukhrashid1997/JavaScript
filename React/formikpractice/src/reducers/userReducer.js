import { actionTypes } from "../actions/userActions";

const initialState = {
  user: {
    corporateId: "",
    companyName: "",
    emirate: "",
    emailAddress: "",
    customerId: "",
    mailingAddress: "",
    contactPerson: "",
    dailyLimit: "999999999999",
    office: "",
    mobileNumber: ""
  },

  corporateUsers: [],

  tempCorporateUser: {
    userId: "",
    firstName: "",
    lastName: "",
    eidOrPassportNumber: "",
    dateOfBirth: new Date(),
    mobileNumber: "",
    tokenType: "Soft Token",
    userGroup: "",
    mothersMaidenName: "",
    email: "",
    location: "",
    userAccesses: []
  },

  isCorporateUserEdit: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CORPORATE_USER:
      return {
        ...state,
        corporateUsers: [
          ...state.corporateUsers,
          {
            id: state.corporateUsers.length + 1,
            ...action.corporateUser
          }
        ]
      };
    default:
      return state;
  }
};
