import { connect } from "react-redux";
import Main from "../components/Main";
import _ from "lodash";
import {setActiveUserId} from "../actions";

const mapStateToProps = (state) => {
  return {
    users: state.user,
    activeUserId: state.activeUserId,
    contacts: state.contacts,
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   setActiveUserId : (id) => dispatch(setActiveUserId(id)),
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
