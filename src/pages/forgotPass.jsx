import React, { useState } from "react";
import { images } from "../config";
import { Input, Button, SuccessModal } from "../components";

export const ForgotPass = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="logo-holder">
          <img src={images.logo} alt="logo" className="img-fluid" />
        </div>
        <form className="auth-form" onSubmit={submitHandler}>
          <h1>Forgot Password?</h1>
          <p>
            Enter the email address associated with your account and we'll send
            you a password reset link.
          </p>
          <Input placeholder="Email" name="email" type="email" />
          <Button className="nextBtn" type="submit">
            Send Link
          </Button>
        </form>
      </div>
      <SuccessModal
        label="Success"
        message="We have successfully sent your password reset link on your email address. Please open the link from your email to reset your password."
        icon={images.checkMark}
        open={showModal}
        closeModal={closeModal}
      />
    </div>
  );
};