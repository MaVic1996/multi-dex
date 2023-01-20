import styles from "../../styles/components/kanto/Case.module.css";

const Case = () => (
  <div className={styles.case}>
    <div className={styles.topVoid}>
      <div className={styles.voidTriangle} />
      <div className={styles.diagonalBorder} />
      <div className={styles.voidRectangle} />
    </div>
  </div>
);

export default Case;
