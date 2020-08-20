import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import _ from "lodash";
import { setActiveUserId } from "../actions";
import User from "../components/User"

const mapStateToProps = (state) => {
  return {
    user: state.user,
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveUserId: (id) => dispatch(setActiveUserId(id)),
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
