import React from "react";
import LoginForm from "./LoginForm";
import "../stylesheets/login.css";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-header">Bookscanner</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
