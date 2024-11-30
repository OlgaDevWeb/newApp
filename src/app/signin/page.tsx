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
