import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import { StyledTableCell } from "./StyledTableElements";
import TableRow from "@material-ui/core/TableRow";
import strings from "../../localisation";
import TableBody from "@material-ui/core/TableBody";
import CustomChip from "../../common/CustomChip";
import { numberWithCommas } from "../../helpers/Constants";
import Delete from "@material-ui/icons/Delete";
import "./style.scss";

const UserDetailsTable = ({ rows, onDeleteRow, onDeleteAccount }) => {
  return (
    <TableContainer classes={{ root: "user-details-table-container" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>{strings.proudct}</StyledTableCell>
            <StyledTableCell>{strings.account}</StyledTableCell>
            <StyledTableCell>{strings.role}</StyledTableCell>
            <StyledTableCell>{strings.limit}</StyledTableCell>
            {onDeleteRow && <StyledTableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>
                <span className="corporate-user-table-proudct">
                  {row.product.label}
                </span>
              </StyledTableCell>
              <StyledTableCell>
                {row.accounts.map(account => (
                  <CustomChip
                    label={account}
                    onDelete={() => onDeleteAccount(row.id, account)}
                    key={account}
                  />
                ))}
              </StyledTableCell>
              <StyledTableCell>
                <CustomChip label={row.role.label} type={row.role.value} />
              </StyledTableCell>
              <StyledTableCell>
                <span className="corporate-user-table-limit">
                  {row.limit ? `AED ${numberWithCommas(row.limit)}` : ""}
                </span>
              </StyledTableCell>
              {onDeleteRow && (
                <StyledTableCell>
                  <Delete
                    classes={{ root: "user-details-table-delete-icon" }}
                    onClick={() => onDeleteRow(row.id)}
                  />
                </StyledTableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDetailsTable;
