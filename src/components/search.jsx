import React from "react";

const search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input className="searchInput" type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://th.bing.com/th/id/OIP.i-h_R_qJwqd5B1JF-0NEjwHaE8?w=279&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt=""
        />
        <div className="userChatInfo">
          <span>Justin</span>
        </div>
      </div>
    </div>
  );
};

export default search;
