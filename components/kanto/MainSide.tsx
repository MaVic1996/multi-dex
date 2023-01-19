import styles from "../../styles/components/kanto/MainSide.module.css";
import Hinge from "./mainSide/Hinge";
import TopSide from "./mainSide/TopSide";

const MainSide = () => (
  <div className={styles.mainSide}>
    <TopSide />
    <Hinge />
  </div>
);

export default MainSide;
