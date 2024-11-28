"use client";
import React from "react";
import styles from "./modaloverlay.module.css";

type ТModalOverlayprops = {
  onClose: () => void;
};

function ModalOverlay(props: ТModalOverlayprops) {
  return (
    <section
      className={`  ${styles.modaloverlay}`}
      onClick={props.onClose}
    ></section>
  );
}
export default ModalOverlay;
