import { useState } from "react";
import styles from "../../styles/components/screen/Box.module.css";

const Box = ({ pokeNum, idx }: { pokeNum: number | string; idx: number }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.pokemonBox}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <picture>
        <img
          className={[styles.pokemonImg, hover ? styles.hover : ""].join(" ")}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`}
          alt=""
        ></img>
      </picture>
      <div className={[styles.pokemonIdx, hover ? styles.hover : ""].join(" ")}>
        {idx}
      </div>
    </div>
  );
};

export default Box;
