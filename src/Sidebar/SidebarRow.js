import React from "react";
import "./sidebarRow.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <img src={src} />}
      {Icon && <Icon className="icon" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
