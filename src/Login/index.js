import React, { useEffect, useState } from "react";
import "./Login.css";
import fbLogo from "../images/Facebook-logo.png";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useStateValue } from "../DataContext/StateProvider";
import { actionType } from "../DataContext/reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    // e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const { photoURL, displayName, email } = result.user;
        const user = { photoURL, displayName, email };
        dispatch({ type: actionType.SET_USER, user: user });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={fbLogo} alt="Facebook logo" className="fbLogo" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
          alt="Facebook logo"
          className="fbLogo__text"
        />
      </div>
      <button type="submit" onClick={signIn}>
        Login
      </button>
    </div>
  );
}

export default Login;
