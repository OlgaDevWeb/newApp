import { GoogleButton } from "@/components/googlebutton/googlebutton";
import { SignInForm } from "@/components/signinform/signinform";
import styles from "./page.module.css";
import { Modal } from "@/components/ut/modal/modal";
import { SignIn } from "@/components/signin/signin";

export default async function Page() {
  return (
    <div className={styles.main}>
      <Modal>
        <SignIn></SignIn>
      </Modal>
    </div>
  );
}

/*<div>
<Modal>
  <div className={styles.main}>
    <h1>Вход</h1>
    <GoogleButton></GoogleButton>
    <p className="textbold">или</p>
    <p className="textbold">Введите почту и пароль</p>
    <SignInForm></SignInForm>
  </div>
</Modal>
</div>*/
