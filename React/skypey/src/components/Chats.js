import React, { useEffect, useRef } from "react"
import "./Chats.css";

const Chats = ({ messages }) => {
  const scrollRef = useRef(null);

  const scrollBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const editMessage = (m) => {
    console.log(m)
  }

  useEffect(() => {
    scrollBottom();
  });

  return (
    <div>
      <div className="Chats" ref={scrollRef}>
        {messages.map((message) => (
          <div
            onDoubleClick = {() => {editMessage(message.text)}}
            key={message.number}
            className={`Chat ${message.is_user_msg ? "is-user-msg" : ""}`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
