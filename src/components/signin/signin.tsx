import Image from "next/image";
import GoogleButton from "../googlebutton/googlebutton";
import styles from "./signin.module.css";

const SignIn = () => {
  return (
    <div className={styles.main}>
      <h1>Вход</h1>
      <div className={styles.box}>
        <Image
          className={styles.logo}
          src="/enter.png"
          alt="enter"
          width={100}
          height={100}
          priority
        />
      </div>
      <GoogleButton></GoogleButton>
    </div>
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
