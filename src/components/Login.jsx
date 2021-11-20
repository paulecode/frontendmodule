import React from "react";
import { useNavigate } from "react-router-dom";
import wallpaper from "./piano.png";

function Login() {
  const navigate = useNavigate();
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
          <button className="loginbutton" onClick={() => {navigate('/Repertoire')}}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
