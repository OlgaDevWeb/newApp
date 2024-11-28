import styles from "./buttonrode.module.css";

type Tprops = {
  name: string;
  image: string;
};

export function ButtonRode({ name, image }: Tprops) {
  return (
    <div className={styles.title}>
      <svg className={styles.circle} viewBox="0 0 80 80">
        <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
        <text>
          <textPath xlinkHref="#circle">{`${name} ✮ ✮ ✮ ✮ ✮`}</textPath>
        </text>
      </svg>

      <img className={styles.icon} src={image} alt="logo" />
    </div>
  );
}
export default ButtonRode;
