import * as Yup from "yup";
import strings from "../../localisation";

export default () =>
  Yup.object().shape({
    userId: Yup.string().min(8, strings.userIdBetween8To16),
    firstName: Yup.string().required(strings.fieldRequired),
    lastName: Yup.string().required(strings.fieldRequired),
    eidOrPassportNumber: Yup.string().required(strings.fieldRequired),
    mobileNumber: Yup.string().required(strings.fieldRequired),
    email: Yup.string()
      .required(strings.fieldRequired)
      .email(strings.validationEmail),
    userAccesses: Yup.array().required(strings.userAccessRequired),
  });
