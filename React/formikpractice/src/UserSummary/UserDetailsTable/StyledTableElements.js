import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

export const StyledTableCell = withStyles(() => ({
  head: {
    fontSize: 12,
    textAlign: "center",
    padding: 0,
    fontWeight: 500,
    minWidth: 15,
    textTransform: "capitalize",
    minHeight: 46,
  },
  body: {
    fontSize: 12,
    textAlign: "center",
    padding: 0,
    minWidth: 15,
    minHeight: 46,
  },
}))(TableCell);
