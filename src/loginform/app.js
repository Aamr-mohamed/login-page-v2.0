import React from "react";
import "./app.css";

const LoginForm = function () {
  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Username" className="userInput"></input>
      <input
        type="password"
        placeholder="Password"
        className="passInput"
      ></input>
      <button className="loginBtn">Sign in</button>
      <div>
        <p>Or login using</p>
      </div>
      <div>
        <button className="googleIcn">google icon</button>
        <button className="githubIcn">Github icon</button>
      </div>
    </div>
  );
};
export default LoginForm;
