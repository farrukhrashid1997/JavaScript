import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import strings from "../../localisation";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import PropTypes from "prop-types";
import TableChip from "../TableChip";
import Delete from "@material-ui/icons/Delete";
import DeleteButton from "../DeleteButton";

function AccountTable({
  groups,
  accounts,
  deleteRow,
  deleteModule,
  deleteAccount,
}) {
  const StyledTableCell = withStyles(() => ({
    root: {
      padding: 5,
    },
    head: {
      height: 40,
      padding: 0,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    numberHeadCell: {
      width: "4%",
    },

    accountsHeadCell: { width: "36%" },
    modulesHeadCell: {
      width: "60%",
    },
    deleteCell: {
      width: "5%",
    },
  });

  const globalAccounts = {
    4544444444444444: {
      accountNumber: "454444444444444444444",
      bankName: "",
      checked: true,
      country: "",
      currency: "AED",
      iban: "",
      name: "Farrukh Bin Rashid",
      swift: "",
    },
  };
  // groups = [["gpssa", "payroll", "ratibi"]];
  // accounts = {
  //   4544444444444444: ["mt940"],
  // };
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" className={classes.numberHeadCell}>
              #
            </StyledTableCell>
            <StyledTableCell
              align="center"
              className={classes.accountsHeadCell}
            >
              {strings.accountDetails}
            </StyledTableCell>
            <StyledTableCell
              align="center"
              colSpan={2}
              className={classes.modulesHeadCell}
            >
              {strings.modules}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((group, index) => (
            <TableRow>
              <StyledTableCell align="center">{index + 1}</StyledTableCell>
              <StyledTableCell>
                {Object.keys(accounts).map((acc) => {
                  const accArray = accounts[acc].sort();
                  return (
                    <TableChip
                      accountNumber={acc}
                      label={globalAccounts[acc].currency}
                      handleDelete={()=>deleteAccount(acc)}
                    />
                  );
                })}
              </StyledTableCell>
              <StyledTableCell>
                {group.map((item) => (
                  <TableChip
                    handleDelete={() => deleteModule(group, item)}
                    label={strings[item]}
                  />
                ))}
              </StyledTableCell>
              <StyledTableCell className={classes.deleteCell} align="center">
                <DeleteButton handleDelete={() => deleteRow(group)} />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccountTable;

AccountTable.propTypes = {
  groups: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired,
};
