import React from "react";
import SidebarRow from "./SidebarRow";
import "./sidebar.css";
import { GrAidOption } from "react-icons/gr";
import { AiFillFlag } from "react-icons/ai";
import {
  MdSupervisedUserCircle,
  MdMessage,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { FcClock } from "react-icons/fc";
import { SiAirplayvideo } from "react-icons/si";
import { VscSaveAll } from "react-icons/vsc";
import { useStateValue } from "../DataContext/StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        title={user?.displayName}
        // src="https://icon-library.com/images/icon-batman/icon-batman-20.jpg"
        src={user?.photoURL}
      />
      <SidebarRow title="Covid-19 Information Center" Icon={GrAidOption} />
      <SidebarRow title="Pages" Icon={AiFillFlag} />
      <SidebarRow title="Friends" Icon={MdSupervisedUserCircle} />
      <SidebarRow title="Messenger" Icon={MdMessage} />
      <SidebarRow title="Marketplace" Icon={BiStore} />
      <SidebarRow title="Videos" Icon={MdOutlineVideoLibrary} />
      <SidebarRow title="Memories" Icon={FcClock} />
      <SidebarRow title="Saved" Icon={VscSaveAll} />
      <SidebarRow title="Reels" Icon={SiAirplayvideo} />
    </div>
  );
}

export default Sidebar;
