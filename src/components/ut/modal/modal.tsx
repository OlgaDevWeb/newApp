"use client";
import React, { useEffect, ReactNode } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import CloseIcon from "clouse.png";
import ModalOverlay from "../modaloverlay/modaloverlay";
import Buttonsmall from "../buttonsmall/buttonsmall";
import { useRouter } from "next/navigation";

type TModalprops = {
  children: ReactNode;
};

function Modal(props: TModalprops) {
  const router = useRouter();
  return createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.closeIcon}>
          <Buttonsmall
            func={() => {
              router.back();
            }}
            size={30}
            img={"/clouse.png"}
          ></Buttonsmall>
        </div>
        {props.children}
      </div>
      <ModalOverlay
        onClose={() => {
          router.back();
        }}
      />
    </>,
    document.body
  );
}
export default Modal;
