import styles from "../../../styles/components/kanto/mainSide/TopLimitLine.module.css";

const TopLimitLine = () => (
  <div className={styles.topSide}>
    <div className={`${styles.horizontalLimit} ${styles.limit1}`} />
    <div className={styles.diagonalLimit} />
    <div className={`${styles.horizontalLimit} ${styles.limit2}`} />
  </div>
);

export default TopLimitLine;
