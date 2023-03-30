import React, { useState } from "react";
import "./header.css";
import fbLogo from "../images/Facebook-logo.png";
import { BiSearch, BiStore } from "react-icons/bi";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  MdSubscriptions,
  MdSupervisedUserCircle,
  MdForum,
  MdOutlineCancel,
} from "react-icons/md";
// import { RxAvatar } from "react-icons/rx";
import { IoMdNotifications, IoMdAdd } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useStateValue } from "../DataContext/StateProvider";

function Header() {
  const [show, setShow] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const signout = async () => {
    try {
      const response = await signOut(auth);
      localStorage.removeItem("user");
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  // console.log(user.photoURL);

  return (
    <div className="header">
      {/* Header left */}
      <div className="header__left">
        <img src={fbLogo} alt="facebook" />
        <div className="header__input">
          <BiSearch />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Header middle */}
      <div className="header__center">
        <div className="header__options header__options--active">
          <AiFillHome className="icon" />
        </div>
        {/* <div className="header__options">
          <AiFillFlag className="icon" />
        </div> */}
        <div className="header__options">
          <MdSubscriptions className="icon" />
        </div>
        <div className="header__options">
          <BiStore className="icon" />
        </div>
        <div className="header__options">
          <MdSupervisedUserCircle className="icon" />
        </div>
      </div>

      {/* Header right */}
      <div className="header__right">
        <div className="header__info" onClick={handleShow}>
          <img src={user?.photoURL} alt="" className="image" />
          <h4>{user?.displayName}</h4>

          {/* drop down */}
          <div
            className={`${
              show ? " moreOption__button show" : "moreOption__button"
            } `}
          >
            <MdOutlineCancel className="icon__cancel" onClick={handleShow} />
            <div className="button">
              <AiFillSetting className="icon" />
              <p>Settings & Privacy</p>
            </div>
            <div className="button" onClick={signout}>
              <IoLogOut className="icon" />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="header__right__icon">
          <IoMdAdd className="small__icon" />
          <MdForum className="small__icon" />
          <IoMdNotifications className="small__icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
