import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="loginWrapper">
        <br />
        <p>Email</p>
        <input
          className="username"
          type="text"
          placeholder="email@email.com"
        ></input>
        <p>Password</p>
        <input
          className="password"
          type="password"
          placeholder="password"
        ></input>
        <p>Confirm Password</p>
        <input
          className="password"
          type="password"
          placeholder="password"
        ></input>
        <br />
        <button className="submit">Register</button>
      </div>
    </div>
  );
}

export default Login;
