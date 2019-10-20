import React from "react";

import "./sign-in-sign-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPages = () => (
  <div className="sign-in-and-sign-up">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInSignUpPages;
