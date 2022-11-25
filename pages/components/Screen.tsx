import { useState } from "react";
import styles from "../../styles/components/Screen.module.css";
import { ImCross } from "react-icons/im";

const Screen = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);

  const handleActivate = () => {
    setActive(true);
    setTimeout(() => setShow(false), 1500);
  };

  const handleDeactivate = () => {
    setShow(true);
    setTimeout(() => setActive(false), 100);
  };

  return (
    <div className={[styles.screen, active ? styles.active : ""].join(" ")}>
      {show ? (
        <button
          onClick={handleActivate}
          className={[styles.openButton, active ? styles.active : ""].join(" ")}
        ></button>
      ) : (
        <div className={styles.cross}>
          <ImCross size={18} onClick={handleDeactivate}/>
        </div>
      )}
    </div>
  );
};

export default Screen;
