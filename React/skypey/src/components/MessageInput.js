import React from "react";
import "./MessageInput.css"

const MessageInput = ({ typing, setTypingValue }) => {

  const handleChange = (e) => {setTypingValue(e.target.value)}

  return (
    <div>
      <form className="Message">
        <input
          className="Message__input"
          onChange={handleChange}
          value={typing}
          placeholder="write a message"
        ></input>
      </form>
    </div>
  );
};

export default MessageInput