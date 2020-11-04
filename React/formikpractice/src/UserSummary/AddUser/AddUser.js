import React, { useState } from "react";
import FormHeader from "../../common/FormHeader";
import AddBox from "@material-ui/icons/AddBox";
import strings from "../../localisation";
import FormContent from "../../common/FormContent";
import { useFormik } from "formik";
import validator from "./Validator";
import AddUserForm from "./AddUserForm";
import "./style.scss";
import UserAddAccess from "../UserAddAccess";
import {
  getTempCorporateUser,
  getCorporateUserFormType
} from "../../selectors/userSelector";
import { useSelector, useDispatch } from "react-redux";
import UserDetailsTable from "../UserDetailsTable";
import FormFooter from "../../common/FormFooter";
import { addCorporateUser } from "../../actions/userActions";

function AddUser({ setInnerStep }) {
  const dispatch = useDispatch();
  const tempUser = useSelector(getTempCorporateUser);
  const [addMoreUsers, setAddMoreUsers] = useState(false);
  const [addUserAccessError, setAddUserAccessError] = useState("");
  const isEditForm = useSelector(getCorporateUserFormType);

  const mainFormFormik = useFormik({
    initialValues: {
      ...tempUser
    },
    validationSchema: validator,
    onSubmit: values => {
      if (addMoreUsers) {
        dispatch(addCorporateUser(values));
        mainFormFormik.resetForm();
      } else {
        dispatch(addCorporateUser(values));
        setInnerStep(1);
      }
    }
  });

  const handleDeleteRow = rowIdToDelete => {
    let updatedUserAccess = mainFormFormik.values.userAccesses.filter(
      row => row.id !== rowIdToDelete
    );
    const updatedUserAccessWithID = updatedUserAccess.map(item => {
      return {
        ...item,
        id: updatedUserAccess.indexOf(item) + 1
      };
    });
    mainFormFormik.setFieldValue("userAccesses", updatedUserAccessWithID);
  };

  const handleDeleteAccount = (userAccessId, accountNumber) => {
    let accountsToSave = null;
    const updatedList = mainFormFormik.values.userAccesses.map(userAccess => {
      if (userAccess.id === userAccessId) {
        accountsToSave = userAccess.accounts.filter(
          account => account !== accountNumber
        );

        return {
          ...userAccess,
          accounts: accountsToSave
        };
      }
    });

    if (accountsToSave.length === 0) {
      handleDeleteRow(userAccessId);
    } else {
      mainFormFormik.setFieldValue("userAccesses", updatedList);
    }
  };

  const handleAddUserAccess = newUserAccess => {
    if (mainFormFormik.values.userAccesses.length === 0) {
      mainFormFormik.setFieldValue("userAccesses", [
        ...mainFormFormik.values.userAccesses,
        newUserAccess
      ]);
    } else {
      let errorExist = false;
      let rowToAppend = 0;
      mainFormFormik.values.userAccesses
        .filter(item => item.product.value === newUserAccess.product.value)
        // eslint-disable-next-line array-callback-return
        .some(existingProduct => {
          if (existingProduct) {
            if (existingProduct.role.value === newUserAccess.role.value) {
              // Check if the existing product has the recently added accounts
              if (
                existingProduct.accounts.some(
                  r => newUserAccess.accounts.indexOf(r) >= 0
                )
              ) {
                setAddUserAccessError(
                  strings.formatString(
                    strings.addUserAccessError,
                    existingProduct.product.label,
                    existingProduct.role.label
                  )
                );
                errorExist = true;
                return true;
              }
              if (existingProduct.limit === newUserAccess.limit) {
                rowToAppend = existingProduct.id;
              }
            }
          }
        });
      if (!rowToAppend && !errorExist) {
        mainFormFormik.setFieldValue("userAccesses", [
          ...mainFormFormik.values.userAccesses,
          newUserAccess
        ]);
      } else if (rowToAppend && !errorExist) {
        mainFormFormik.setFieldValue("userAccesses", [
          ...mainFormFormik.values.userAccesses.map(ua => {
            if (ua.id === rowToAppend) {
              return {
                ...ua,
                accounts: ua.accounts.concat(newUserAccess.accounts)
              };
            }
            return ua;
          })
        ]);
      }
    }
  };

  return (
    <>
      <FormHeader
        title={strings.addUserDetails}
        backButtonFunc={() => setInnerStep(1)}
        buttonFunc={() => setInnerStep(2)}
        buttonIcon={<AddBox />}
        buttonTitle={strings.uploadDocuments}
      />
      <FormContent>
        <AddUserForm mainFormFormik={mainFormFormik} />
        <div className="add-user-second-section">
          <h2 className="form-header-title-text">{strings.userAccess}</h2>
        </div>
        <UserAddAccess
          handleAddUserAccess={handleAddUserAccess}
          userAccessesLength={mainFormFormik.values.userAccesses.length}
          addAccessError={
            addUserAccessError ||
            (mainFormFormik.errors.userAccesses &&
              mainFormFormik.touched.userAccesses &&
              mainFormFormik.errors.userAccesses)
          }
        />
        <UserDetailsTable
          rows={mainFormFormik.values.userAccesses}
          onDeleteRow={handleDeleteRow}
          onDeleteAccount={handleDeleteAccount}
        />
      </FormContent>
      <FormFooter
        primaryFunc={e => {
          setAddMoreUsers(false);
          mainFormFormik.handleSubmit(e);
        }}
        primary={isEditForm ? strings.editUser : strings.addUser}
        secondary={isEditForm ? "" : strings.saveAndAdd}
        secondaryFunc={e => {
          setAddMoreUsers(true);
          mainFormFormik.handleSubmit(e);
        }}
      />
    </>
  );
}

export default AddUser;
