import { KeyboardEvent, useEffect } from "react";
import CreatePortal from "../../hooks/CreatePortal";
import styles from "../../styles/components/screen/PokemonInfo.module.css";

const PokemonInfo = ({
  pokemonInfo,
  isOpen,
  closeInfo,
}: {
  pokemonInfo?: {img: string, name: string};
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
       <picture>
        <img className={styles.image} src={pokemonInfo.img} alt={pokemonInfo.name} />
       </picture>
       <div className={styles.name}>{pokemonInfo.name}</div>
      </div>
    </CreatePortal>
  );
};

export default PokemonInfo;
