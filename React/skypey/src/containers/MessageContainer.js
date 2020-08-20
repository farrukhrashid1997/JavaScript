import { connect } from "react-redux";
import { setTypingValue } from "../actions";
import MessageInput from "../components/MessageInput"

const mapStateToProps = (state) => {
  return {
    typing: state.typing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTypingValue: (typing) => dispatch(setTypingValue(setTypingValue)),
  };
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);
export default MessageContainer;