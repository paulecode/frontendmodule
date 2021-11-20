import React from "react";
import { useNavigate } from "react-router-dom";
import wallpaper from "./piano.png";

function Login() {
  const navigate = useNavigate();

  function localStorageSetter() {
    localStorage.setItem("user", document.querySelector("[placeholder='Username']"));
    navigate('/Repertoire');
  }

  return (
    <div>
      <img
        className="wallpaper"
        src={wallpaper}
        alt="Piano Wallpaper"
        //style={{display: "none"}}
      ></img>
      <div className="loginscreen">
        <h1>Piano Project</h1>
        <h2>Log into your Account</h2>
        <form>
          <input className="logintextfield" placeholder="Username" />
          <input className="logintextfield" placeholder="Password" />
          <button className="loginbutton" onClick={localStorageSetter}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
