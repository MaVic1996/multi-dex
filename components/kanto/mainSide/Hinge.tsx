import styles from "../../../styles/components/kanto/mainSide/Hinge.module.css";

const Hinge = () => (
  <div className={styles.hingeContainer}>
    <div className={styles.hingeSmall}></div>
    <div className={styles.splitter}></div>
    <div className={styles.hingeBig}></div>
    <div className={styles.splitter}></div>
    <div className={styles.hingeSmall}></div>
  </div>
);

export default Hinge;
