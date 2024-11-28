import { RegForm } from "@/components/regform/regform";
import Modal from "@/components/ut/modal/modal";
import styles from "./page.module.css";

export default async function Signin() {
  return (
    <div>
      <Modal>
        <div className={styles.main}>
          <h1>Регистрация</h1>
          <RegForm></RegForm>
        </div>
      </Modal>
    </div>
  );
}
