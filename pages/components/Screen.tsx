
import styles from "../../styles/components/Screen.module.css";
import { ImCross } from "react-icons/im";
import { useOpenClosePokedex } from "../hooks/useOpenClosePokedex";
import ScreenContent from "./screen/ScreenContent";

const Screen = () => {
  const { active, showOpenButton, togglePokedex } = useOpenClosePokedex();

  return (
    <div className={[styles.screen, active ? styles.active : ""].join(" ")}>
      {showOpenButton ? (
        <button
          onClick={togglePokedex}
          className={[styles.openButton, active ? styles.active : ""].join(" ")}
        ></button>
      ) : (
        <><div className={styles.cross}>
            <ImCross size={18} onClick={togglePokedex} />
          </div><ScreenContent /></>
      )}
    </div>
  );
};

export default Screen;
