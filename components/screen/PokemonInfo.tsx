import { useEffect } from "react";
import CreatePortal from "../CreatePortal";
import styles from "../../styles/components/screen/PokemonInfo.module.css";
import { PokemonInfo } from "../../types/PokemonInfo.d";
import Badge from "../Badge";
import { ImCross } from "react-icons/im";

const PokemonInfo = ({
  pokemonInfo,
  isOpen,
  closeInfo,
}: {
  pokemonInfo?: PokemonInfo;
  isOpen: boolean;
  closeInfo: () => void;
}) => {
  
  
  useEffect(() => {
    const closeOnEscapeKey = (e: globalThis.KeyboardEvent) =>
      e.key === "Escape" ? closeInfo() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeInfo]);

  if (!isOpen || !pokemonInfo) return null;

  return (
    <CreatePortal portalId="pokemon-info-modal">
      <div className={styles.infoContainer}>
      <div className={styles.exitIcon} onClick={closeInfo}><ImCross size={14}/></div>
       <picture>
        <img className={styles.image} src={pokemonInfo.imgSrc} alt={pokemonInfo.name} />
       </picture>
       <div className={styles.basicData}>
        <div className={styles.nameData}>{pokemonInfo.name}</div>
        <div  className={styles.detail}>{pokemonInfo.detail}</div>
        <div className={styles.info}>Type: <div>{pokemonInfo.types.map((type, idx) => <Badge key={`${type}-${idx}`} type={type} />)}</div></div>
        <div className={styles.info}>HEIGHT: <div>{pokemonInfo.height} m</div></div>
        <div className={styles.info}>WEIGHT: <div>{pokemonInfo.weight} kg</div></div>
       </div>
      </div>
    </CreatePortal>
  );
};

export default PokemonInfo;
