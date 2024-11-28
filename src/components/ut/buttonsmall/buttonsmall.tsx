import Image from "next/image";
import styles from "./buttonsmall.module.css";

type TButton = {
  func: () => void;
  size: number;
  img: string;
};
function Buttonsmall(props: TButton) {
  return (
    <button
      className={styles.main}
      onClick={props.func}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: `${props.size}px`,
      }}
    >
      <Image
        className={styles.icon}
        src={props.img}
        alt="button"
        width={props.size}
        height={props.size}
        style={{
          width: `${props.size}px`,
          height: `${props.size}px`,
          borderRadius: `${props.size}px`,
        }}
      />
    </button>
  );
}

export default Buttonsmall;
