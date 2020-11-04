import React, { useState } from "react";
import FormContainer from "./common/FormContainer";
import FormHeader from "./common/FormHeader";
import strings from "./localisation";
import FormContent from "./common/FormContent";
import FormBoxContainer from "./common/FormBoxContainer";
import { Grid } from "@material-ui/core";
import CustomDropdownMultiple from "./common/CustomDropdownMultiple";
import AddButton from "./common/AddButton";
import "./style.scss";
import {
  handleModuelsList,
  compareArray,
  isObjectEmpty,
  handleGroupSorting
} from "./helpers/Constants";
import FormEmptyNote from "./common/FormEmptyNote";
import AccountTable from "./common/AccountTable";

function AccountAccessPractice() {
  const modules = ["payments"];
  const accounts = {
    4544444444444444: {
      accountNumber: "454444444444444444444",
      bankName: "",
      checked: true,
      country: "",
      currency: "AED",
      iban: "",
      name: "Farrukh Bin Rashid",
      swift: ""
    }
  };

  const [accountList, setAccountList] = useState([]);
  const [modulesList, setModulesList] = useState([]);
  const [accountAccessList, setAccountAccessList] = useState({});
  const [accountGroups, setAccountGroups] = useState([]);

  // groups = [["gpssa", "payroll", "ratibi"]];
  // accounts = {
  //   4544444444444444: ["mt940"],
  // };

  const handleAccountsArray = () => {
    const accountsArray = [];
    Object.keys(accounts).forEach(key => {
      const accObject = {
        label: `${accounts[key].name}, ${key}`,
        value: key
      };
      accountsArray.push(accObject);
    });

    return accountsArray;
  };

  const handleModuleDelete = (group, mod) => {
    const tempAccArray = { ...accountAccessList };
    Object.keys(tempAccArray).forEach(acc => {
      const accModules = tempAccArray[acc].sort();
      if (compareArray(accModules, group)) {
        const index = accModules.indexOf(mod);
        index !== -1 && accModules.splice(index, 1);
        tempAccArray[acc] = accModules;
      }
    });
    setAccountAccessList(tempAccArray);
    handleGroupSorting(tempAccArray, accountGroups, setAccountGroups);
  };

  const handleAdd = () => {
    const tempAcca = { ...accountAccessList };
    accountList.forEach(acc => {
      tempAcca[acc] = tempAcca[acc]
        ? modulesList.concat(...tempAcca[acc])
        : modulesList;
      tempAcca[acc] = [...new Set(tempAcca[acc])];
    });
    setAccountAccessList(tempAcca);
    handleGroupSorting(tempAcca, accountGroups, setAccountGroups);
  };

  const handleDeleteRow = group => {
    const tempAccArray = { ...accountAccessList };
    Object.keys(tempAccArray).forEach(acc => {
      const accModules = tempAccArray[acc].sort();

      if (compareArray(accModules, group)) {
        delete tempAccArray[acc];
      }
    });
    setAccountAccessList(tempAccArray);
    handleGroupSorting(tempAccArray, accountGroups, setAccountGroups);
  };

  const handleDeleteAccount = acc => {
    const tempAccArray = { ...accountAccessList };
    delete tempAccArray[acc];
    setAccountAccessList(tempAccArray);
    handleGroupSorting(tempAccArray, accountGroups, setAccountGroups);
  };

  return (
    <FormContainer>
      <FormHeader
        title={strings.AccountsCardsAccess}
        desc={strings.AccountsCardsAccessDesc}
      ></FormHeader>
      <FormContent>
        <FormBoxContainer>
          <div className="add-menu-container">
            <div className="add-menu-dropdown">
              <Grid spacing={1} container>
                <Grid xs={6} item>
                  <CustomDropdownMultiple
                    label={strings.accountDetails}
                    setListValue={setAccountList}
                    listValue={accountList}
                    menuItem={handleAccountsArray()}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomDropdownMultiple
                    setListValue={setModulesList}
                    listValue={modulesList}
                    label={strings.modules}
                    menuItem={handleModuelsList(modules)}
                  ></CustomDropdownMultiple>
                </Grid>
              </Grid>
            </div>
            <div className="add-menu-button">
              <AddButton handleChange={handleAdd} />
            </div>
          </div>
        </FormBoxContainer>
        <div>
          {isObjectEmpty(accountAccessList) || accountGroups.length === 0 ? (
            <FormEmptyNote note={strings.noAccessAdded} />
          ) : (
            <AccountTable
              accounts={accountAccessList}
              groups={accountGroups}
              deleteRow={handleDeleteRow}
              deleteModule={handleModuleDelete}
              deleteAccount={handleDeleteAccount}
            />
          )}
        </div>
      </FormContent>
    </FormContainer>
  );
}

export default AccountAccessPractice;
