import { useState } from "react";
import styles from "../../../styles/components/screen/Box.module.css";

const Box = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.pokemonBox} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
      <picture>
        <img
          className={[styles.pokemonImg, hover ? styles.hover: ''].join (' ')}
          src="https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20190430161933/Fennekin.png"
          alt=""
        ></img>
      </picture>
      <div className={[styles.pokemonIdx, hover ? styles.hover: ''].join (' ')}>001</div>
    </div>
  );
};

export default Box;
