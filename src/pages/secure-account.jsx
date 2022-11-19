import React from "react";
import { images } from "../config";
import { Input, Button } from "../components";

export const SecureAccount = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form">
          <h1>Secure Your Account.</h1>
          <p>Enter and confirm a password for your account.</p>
          <Input placeholder="Password" name="password" type="password" />
          <Input
            placeholder="Confirm Password"
            name="cpassword"
            type="password"
          />
          <Button className="nextBtn">Next (1/3)</Button>
        </form>
      </div>
    </div>
  );
};