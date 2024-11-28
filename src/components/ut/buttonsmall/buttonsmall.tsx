import styles from "./buttonsmall.module.css";
import exit from "../../images/exit.png";

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
      <img
        className={styles.icon}
        src={props.img}
        alt="button"
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
