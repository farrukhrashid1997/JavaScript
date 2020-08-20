import React from "react";
import "./Sidebar.css";
import User from "../components/User.js";
import _ from 'lodash'

const Sidebar = ({ contacts, setActiveUserId }) => {
  
  contacts = _.values(contacts.contacts)
  return (
    <div>
      <aside className="Sidebar">
        {contacts.map((contact) => (
          <User user={contact} key={contact.user_id} setActiveUserId = {setActiveUserId}/>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
