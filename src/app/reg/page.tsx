import { RegForm } from "@/components/regform/regform";
import { Modal } from "@/components/ut/modal/modal";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <div className={styles.main}>
      <Modal>
        <h1>Регистрация</h1>
        <RegForm></RegForm>
      </Modal>
    </div>
  );
}
