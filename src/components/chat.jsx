import React from "react";
import Messages from "./messages";
import Input from "./input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sam</span>
        <div className="chatIcons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8408/8408020.png"
            alt="Cam"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/8861/8861125.png"
            alt="Add"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
            alt="Settings"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
