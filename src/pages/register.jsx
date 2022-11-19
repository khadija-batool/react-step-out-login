import React from "react";
import { Input, Button } from "../components";
import { images } from "../config";

export const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form">
          <h1>Create An Account.</h1>
          <p>Please enter below details to get registered.</p>
          <div className="split-inputs">
            <Input type="text" placeholder="First Name" name="firstName" />
            <Input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <Input placeholder="Date of Birth" name="dob" type="date" />
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="User Name" name="userName" type="text" />
          <div className="terms-conditions">
            <Input type="checkbox" />
            <p>Accept Terms & Conditions</p>
          </div>
          <Button>Register</Button>
          <hr />
          <p>Already have an account</p>
          <Button variant="outlined">Login</Button>
        </form>
      </div>
    </div>
  );
};