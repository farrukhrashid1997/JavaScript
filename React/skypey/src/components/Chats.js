// import React from "react";
// import "./Chats.css"

// const Chats = ({ messages }) => {
//   return (
//     <div>
//       <div className="Chats">
//         {messages.map((message) => (
//           <div key = {message.number}>
//             <span className={`Chat ${message.is_user_msg ? "is-user-msg" : ""}`}>
//               {message.text}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chats;


import React, { Component } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  render() {
    return (
      <div className="Chats">
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;