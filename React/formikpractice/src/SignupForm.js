import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid Email Address";
//   }

//   return errors;
// };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps("email")}
          //   onBlur={formik.handleBlur}
          //   onChange={formik.handleChange}
          //   value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="lastName"
          {...formik.getFieldProps("lastName")}
          //   onBlur={formik.handleBlur}
          //   onChange={formik.handleChange}
          //   value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="firstName"
          {...formik.getFieldProps("firstName")}
        //   onBlur={formik.handleBlur}
        //   onChange={formik.handleChange}
        //   value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
