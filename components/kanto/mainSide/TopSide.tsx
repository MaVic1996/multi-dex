import styles from "../../../styles/components/kanto/mainSide/TopSide.module.css";

const TopSide = () => (
  <div className={styles.topSide}>
    <div className={styles.circle}></div>
    <div className={`${styles.semaphore} ${styles.red}`}></div>
    <div className={`${styles.semaphore} ${styles.yellow}`}></div>
    <div className={`${styles.semaphore} ${styles.green}`}></div>
    <div className={`${styles.horizontalLimit} ${styles.limit1}`} />
    <div className={styles.diagonalLimit} />
    <div className={`${styles.horizontalLimit} ${styles.limit2}`} />
  </div>
);

export default TopSide;
