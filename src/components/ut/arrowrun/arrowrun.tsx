import styles from "./arrowrun.module.css";
import icon from " /ran.png";
import icona from "../../images/rana.png";
import Link from "next/link";
import Image from "next/image";

type TButton = {
  size: number;
};

export function ArrowRun(props: TButton) {
  const size = props.size;

  const sizeP = props.size + props.size;
  return (
    <div
      className={styles.title}
      style={{
        width: `${sizeP}px`,
        height: `${sizeP}px`,
        borderRadius: `${sizeP}px`,
      }}
    >
      <Image
        className={styles.icon}
        src={"/rana.png"}
        alt="logo"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${size / 2}px`,
        }}
        width={100}
        height={100}
      />
    </div>
  );
}
export default ArrowRun;
