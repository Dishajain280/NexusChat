import React from "react";
import Sidebar from "../components/sidebar";
import Chat from "../components/chat";

const home = () => {
  return (
    <div>
      <div className="home">
        <div className="homeContainer">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default home;
