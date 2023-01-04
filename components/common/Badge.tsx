import { PokemonType } from "../../types/PokemonInfo";
import styles from "../../styles/components/common/Badge.module.css";

const Badge = ({ type }: { type: PokemonType }) => {
  return (
    <div className={[styles.badge, styles[type.toLowerCase()]].join(" ")}>
      {type}
    </div>
  );
};

export default Badge;
