import React from "react";
import Header from "./Header";
import _ from "lodash";
import { useSelector } from "react-redux";
import Chats from "./Chats";
import MessageInput from "../components/MessageInput";
import "./ChatWindow.css";
import {
  activeUserIdSel,
  contactsSel,
  messagesSel,
} from "../containers/MainSelector";

const ChatWindow = () => {
  const activeUserId = useSelector(activeUserIdSel);
  const contacts = useSelector(contactsSel);
  const messages = useSelector(messagesSel);

  const activeUser = contacts.contacts[activeUserId];
  const activeMsgs = messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
