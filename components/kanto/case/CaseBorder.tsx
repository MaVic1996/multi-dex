import styles from '../../../styles/components/kanto/case/CaseBorder.module.css';

const CaseBorder = () => (
  <div className={`${styles.caseBorderContainer}`}>
    <div className={`${styles.horizontal} ${styles.top}`} />
    <div className={`${styles.horizontal} ${styles.top}`} /> 
    <div className={`${styles.diagonal}`} /> 
    <div className={`${styles.vertical} ${styles.left}`} />
    <div className={`${styles.vertical}`} />
    <div className={`${styles.horizontal} ${styles.bottom}`} />
  </div>
);
export default CaseBorder;
