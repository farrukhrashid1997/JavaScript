import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.css";
import User from "../components/User.js";
import { setActiveUserId } from "../actions";
import _ from "lodash";
import { contactsSel } from "../containers/MainSelector";

const Sidebar = () => {
  const contacts = _.values(useSelector(contactsSel).contacts);
  const dispatch = useDispatch();
  const setActiveUserIdDispatch = (id) => dispatch(setActiveUserId(id));
  
  return (
    <div>
      <aside className="Sidebar">
        {contacts.map((contact) => (
          <User
            user={contact}
            key={contact.user_id}
            setActiveUserId={setActiveUserIdDispatch}
          />
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
