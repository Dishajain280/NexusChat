import React from "react";

const navbar = () => {
  return (
    <div className="navbar">
      <span className="navLogo">Nexus Chat</span>
      <div className="navUser">
        <img
          id="navImg"
          src="https://th.bing.com/th/id/OIP.i-h_R_qJwqd5B1JF-0NEjwHaE8?w=279&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt=""
        />
        <span>Suhani</span>
        <button id="navButton">logout</button>
      </div>
    </div>
  );
};

export default navbar;
