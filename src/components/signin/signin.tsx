"use client";

import { useState } from "react";
import { GoogleButton } from "../googlebutton/googlebutton";
import { SignInForm } from "../signinform/signinform";
import { RegForm } from "../regform/regform";

const SignIn = () => {
  const [one, setOne] = useState(true);

  return (
    <>
      {one && (
        <>
          <h1>Вход</h1>
          <GoogleButton></GoogleButton>
          <p className="textbold">или</p>
          <p className="textbold">Введите почту и пароль</p>
          <SignInForm act={setOne}></SignInForm>
        </>
      )}
      {!one && (
        <>
          <h1 style={{ paddingTop: "60px" }}>Регистрация</h1>
          <RegForm act={setOne}></RegForm>
        </>
      )}
    </>
  );
};
export { SignIn };
