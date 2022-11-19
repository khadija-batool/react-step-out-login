import React from "react";
import { images } from "../config";
import { Input, Button, Chip } from "../components";

export const About = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form ">
          <h1>Tell us About Yourself.</h1>
          <p>Fill out below details before planning your date.</p>
          <div className="chipContainer">
            <p className="align-left">Gender</p>
            <div className="chipHolder">
              <Chip label="Male" id="male" name="male" />
              <Chip label="Female" id="female" name="female" />
              <Chip label="Other" id="genderother" name="other" />
            </div>
          </div>
          <div className="chipContainer">
            <p className="align-left">Occupation</p>
            <div className="chipHolder">
              <Chip label="Student" id="student" name="student" />
              <Chip label="Label" id="label" name="label" />
              <Chip label="Other" id="occuptionother" name="other" />
            </div>
          </div>
          <Button className="nextBtn">Submit (2/3)</Button>
        </form>
      </div>
    </div>
  );
};