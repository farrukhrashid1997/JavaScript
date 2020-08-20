import React, { useState } from "react";
import useInput from "../Hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
          value = {firstName} 
            onChange = {bindFirstName}
            type="text"
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value = {lastName} 
            onChange = {bindLastName}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
