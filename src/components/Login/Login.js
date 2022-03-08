import React from "react";
import "./Login.css";
//import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/user";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        dispatch(addUser(result.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign-In
      </button>
    </div>
  );
};

export default Login;
