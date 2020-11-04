import React from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../components/ChatWindow";
import { usersSel, activeUserIdSel } from "../containers/MainSelector";

const Main = () => {
  const users = useSelector(usersSel);
  const activeUserId = useSelector(activeUserIdSel);
  console.log(users);
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={users} activeUserId={activeUserId}></Empty>;
    } else {
      return <ChatWindow></ChatWindow>;
    }
  };

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
