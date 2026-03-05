import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img
          id="send1"
          src="https://cdn-icons-png.flaticon.com/128/17777/17777801.png"
          alt=""
        />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img
            id="send2"
            src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
            alt=""
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
