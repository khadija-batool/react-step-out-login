import React from "react";
import { Input, Button } from "../components";
import { images } from "../config";

export const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form">
          <h1>Login To Your Account</h1>
          <p>Please enter your login details</p>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />

          <div className="remember-container">
            <div className="terms-conditions">
              <Input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p>Forget Password</p>
          </div>
          <Button>Login</Button>
          <hr />
          <p>Don,t hava a account</p>
          <Button variant="outlined">Register</Button>
        </form>
      </div>
    </div>
  );
};