
import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigations } from "../config";
import {
  Register,
  Login,
  SecureAccount,
  About,
  Preferences,
  ForgotPass,
} from "../pages";

export const Routes = () => {
  return (
    <Router>
      <Route path={Navigations.LOGIN} element={<Login />} />
      <Route path={Navigations.REGISTER} element={<Register />} />
      <Route path={Navigations.SECURE_ACCOUNT} element={<SecureAccount />} />
      <Route path={Navigations.ABOUT} element={<About />} />
      <Route path={Navigations.PREFERENCES} element={<Preferences />} />
      <Route path={Navigations.FORGOT_PASSWORD} element={<ForgotPass />} />
    </Router>
  );
};