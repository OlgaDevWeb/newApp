import { Modal } from "./modal";
import { SignIn } from "@/components/signin/signin";

export default async function Page() {
  return (
    <div>
      <Modal>
        <SignIn></SignIn>
      </Modal>
    </div>
  );
}
