import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MessageInput.css";
import { typingSel, activeUserIdSel } from "../containers/MainSelector";
import { setTypingValue, sendMessage } from "../actions";

const MessageInput = () => {
  const dispatch = useDispatch();

  const typing = useSelector(typingSel);
  const activeUserId = useSelector(activeUserIdSel);

  const sendMesDispatch = (typing, activeUserId) =>
    dispatch(sendMessage(typing, activeUserId));
  const setTypingDis = (txt) => dispatch(setTypingValue(txt));

  const handleChange = (e) => {
    setTypingDis(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMesDispatch(typing, activeUserId);
    setTypingDis("");
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <div className="Message_input_box">
        <input
          className="Message__input"
          onChange={handleChange}
          value={typing}
          placeholder="write a message"
        ></input>
      </div>
    </form>
  );
};

export default MessageInput;
