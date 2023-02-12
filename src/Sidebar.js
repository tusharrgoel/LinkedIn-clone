import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p> {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <Avatar src = {user.photoUrl} className="sidebar_avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,789</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1,542</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p> Recent</p>
        {recentItem("React.js")}
        {recentItem("Web Developer")}
        {recentItem("C++")}
        {recentItem("MySQL")}
        {recentItem("Programming")}
      </div>
    </div>
  );
}

export default Sidebar;
