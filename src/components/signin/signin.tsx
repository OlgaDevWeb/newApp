"use client";

import { GoogleButton } from "../googlebutton/googlebutton";

const SignIn = () => {
  return (
    <>
      <h1>Вход</h1>
      <GoogleButton></GoogleButton>
    </>
  );
};
export { SignIn };
/*{!one && (
  <>
    <h1 style={{ paddingTop: "60px" }}>Регистрация нового пользователя </h1>
    <RegForm act={setOne}></RegForm>
  </>
)}*/
/*<SignInForm act={setOne}></SignInForm>*/
