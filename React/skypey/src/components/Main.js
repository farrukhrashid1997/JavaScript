import React from "react";
import "./Main.css";
import  Empty from "./Empty"
import ChatWindow from "./ChatWindow"

const Main = ({ users, activeUserId, contacts, messages }) => {
  const renderMainContent = () => {
    
    if (!activeUserId) {
      return <Empty user={users} activeUserId={activeUserId} ></Empty>;
    } else {
      return <ChatWindow activeUserId={activeUserId} contacts = {contacts} messages = {messages}></ChatWindow>;
    }
  };

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
