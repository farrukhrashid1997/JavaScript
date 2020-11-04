export const actionTypes = {
  LOGIN: "LOGIN",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  ADD_USER: "ADD_USER",
  ADD_CORPORATE_USER: "ADD_CORPORATE_USER",
  EDIT_TEMP_USER: "EDIT_TEMP_USER",
  SET_FORM_TYPE: "SET_FORM_TYPE",
  EDIT_CORPORATE_USER: "EDIT_CORPORATE_USER"
};

export const addCorporateUser = corporateUser => ({
  type: actionTypes.ADD_CORPORATE_USER,
  corporateUser
});
