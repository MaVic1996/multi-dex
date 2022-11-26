import styles from "../styles/components/Side.module.css";

const Side = ({ rotate }: { rotate?: boolean }) => {
  return (
    <div className={[styles.topSide, rotate? styles.rotate : ''].join(' ')}>
      <div className={styles.leftSmallSquare}></div>
      <div className={styles.rightBigSquare}></div>
      <div className={styles.rightSmallSquare}></div>
      <div className={styles.leftBigSquare}></div>
      <div className={styles.centerSemiCircle}>
        <div className={styles.smallSemiCircle}></div>
      </div>
    </div>
  );
};

export default Side;
