import React from "react";
import Header from "./Header";
import _ from "lodash";
import Chats from "./Chats";
import MessageInput from "./MessageInput"

const ChatWindow = ({ activeUserId, contacts, messages }) => {
  const activeUser = contacts.contacts[activeUserId];
  const activeMsgs = messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput/>
    </div>
  );
};

export default ChatWindow;
