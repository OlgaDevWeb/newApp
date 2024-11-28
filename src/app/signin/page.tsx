import { GoogleButton } from "@/components/googlebutton/googlebutton";
import { SignInForm } from "@/components/signinform/signinform";
import Modal from "@/components/ut/modal/modal";
import styles from "./page.module.css";

export default async function Signin() {
  return (
    <div>
      <Modal>
        <div className={styles.main}>
          <h1>Вход</h1>
          <GoogleButton></GoogleButton>
          <p className="textbold">или</p>
          <p className="textbold">Введите почту и пароль</p>
          <SignInForm></SignInForm>
        </div>
      </Modal>
    </div>
  );
}
