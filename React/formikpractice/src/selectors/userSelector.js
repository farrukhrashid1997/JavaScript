export const getUser = (state) => state.user.user;
export const getCorporateUser = (state) => state.user.corporateUsers;
export const getTempCorporateUser = (state) => state.user.tempCorporateUser;
export const getCorporateUserFormType = (state) =>
  state.user.isCorporateUserEdit;
